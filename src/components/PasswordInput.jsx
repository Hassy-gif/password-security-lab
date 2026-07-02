import { useState } from "react";
import {
  checkPasswordStrength,
  getPasswordRating,
  estimateGuessTime,
} from "../utils/passwordChecker";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [report, setReport] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const rating = report ? getPasswordRating(report) : null;
  const securityScore = rating ? Math.max(0, Math.round((rating.score / 5) * 100)) : 0;
  const guessTime = rating
  ? estimateGuessTime(securityScore)
  : "";
  const checks = report
  ? [
      { passed: report.length, text: "At least 8 characters" },
      { passed: report.uppercase, text: "Contains uppercase letter" },
      { passed: report.lowercase, text: "Contains lowercase letter" },
      { passed: report.number, text: "Contains a number" },
      { passed: report.special, text: "Contains a special character" },
      {
        passed: !report.commonPassword,
        text: "Not a commonly used password",
      },
    ]
  : [];

  function handleCheckPassword() {

  if (password.trim() === "") {
    setError("Please enter a password first.");
    setReport(null);
    return;
  }

  setError("");

  const result = checkPasswordStrength(password);
  setReport(result);
}

  return (
    <section className="password-input">
      
      <div className="input-group">

  <div className="password-box">

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password..."
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />

    <button
      type="button"
      className="eye-button"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "🙈" : "👁️"}
    </button>

  </div>

  <button
    className="analyze-button"
    onClick={handleCheckPassword}
  >
    Analyze Password
  </button>
  {error && (
  <p className="error-message">
    {error}
  </p>
)}

</div>

      {report && (
        <div className="report-card">
  <div className="report">
          <h2>Password Security Report</h2>
          {report.commonPassword && (
  <div className="breach-warning">
    ⚠️ This password is extremely common and may have appeared in previous data breaches. Choose a unique password instead.
  </div>
)}
           <p className={`rating ${rating.label.toLowerCase()}`}>
  {rating.emoji} Overall: {rating.label}
</p>
          <div className="strength-bar">
  <div
    className={`strength-fill ${rating.label.toLowerCase()}`}
    style={{ width: `${(rating.score / 5) * 100}%` }}
  ></div>
</div>
<p className="security-score">
  Security Score: <strong>{securityScore}/100</strong>
</p>
<p className="guess-time">
  Estimated Guess Time: <strong>{guessTime}</strong>
</p>

          <div className="security-checklist">
  {checks.map((check, index) => (
    <div
      key={index}
      className={`check-item ${check.passed ? "passed" : "failed"}`}
    >
      <span className="check-icon">
        {check.passed ? "✅" : "❌"}
      </span>

      <span>{check.text}</span>
    </div>
  ))}
</div>
{report.suggestions.length > 0 && (
  <>
    <h3>Security Recommendations</h3>

    <ul>
      {report.suggestions.map((suggestion, index) => (
        <li key={index}>{suggestion}</li>
      ))}
    </ul>
  </>
)}
        </div>
</div>
      )}
    </section>
  );
}

export default PasswordInput;