import { commonPasswords } from "../data/commonPasswords";
export function checkPasswordStrength(password) {
  const report = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    commonPassword: commonPasswords.includes(password.toLowerCase()),
  };

  const suggestions = [];

if (!report.length) {
  suggestions.push("Use at least 8 characters.");
}

if (!report.uppercase) {
  suggestions.push("Add at least one uppercase letter (A-Z).");
}

if (!report.lowercase) {
  suggestions.push("Add at least one lowercase letter (a-z).");
}

if (!report.number) {
  suggestions.push("Add at least one number (0-9).");
}

if (!report.special) {
  suggestions.push("Add at least one special character (!@#$...).");
}

if (report.commonPassword) {
  suggestions.push("Avoid commonly used passwords.");
}

return {
  ...report,
  suggestions,
};
  
}

export function getPasswordRating(report) {
  let score = 0;

  if (report.length) score++;
  if (report.uppercase) score++;
  if (report.lowercase) score++;
  if (report.number) score++;
  if (report.special) score++;

  // Penalize common passwords
  if (report.commonPassword) {
    score -= 2;
  }

  if (score <= 2) {
    return { label: "Weak", emoji: "🔴", score };
  } else if (score <= 4) {
    return { label: "Fair", emoji: "🟡", score };
  } else {
    return { label: "Strong", emoji: "🟢", score };
  }
}

export function estimateGuessTime(score) {
  if (score <= 20) {
    return "⚡ Instantly";
  }

  if (score <= 40) {
    return "⏱️ A few minutes";
  }

  if (score <= 60) {
    return "🕒 A few hours";
  }

  if (score <= 80) {
    return "📅 Several months";
  }

  return "🔒 Many years";
}