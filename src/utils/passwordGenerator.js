function shuffleString(text) {
  const array = text.split("");

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.join("");
}
export function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-+=<>?/";

  let allCharacters = "";
  let password = "";

  if (uppercase) {
    allCharacters += upperChars;
    password += upperChars[Math.floor(Math.random() * upperChars.length)];
  }

  if (lowercase) {
    allCharacters += lowerChars;
    password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
  }

  if (numbers) {
    allCharacters += numberChars;
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
  }

  if (symbols) {
    allCharacters += symbolChars;
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
  }

  if (allCharacters === "") {
    return "";
  }

  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return shuffleString(password);
}