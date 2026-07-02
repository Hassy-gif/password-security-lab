import { useState } from "react";
import { generatePassword } from "../utils/passwordGenerator";

function PasswordGenerator() {
  const [length, setLength] = useState(16);
const [uppercase, setUppercase] = useState(true);
const [lowercase, setLowercase] = useState(true);
const [numbers, setNumbers] = useState(true);
const [symbols, setSymbols] = useState(true);
const [generatedPassword, setGeneratedPassword] = useState("");
const [history, setHistory] = useState([]);

function handleGeneratePassword() {
  const password = generatePassword(
    Number(length),
    uppercase,
    lowercase,
    numbers,
    symbols
  );

  setGeneratedPassword(password);

setHistory((previous) => {
  const updated = [password, ...previous];

  return updated.slice(0, 5);
});

}
function handleCopyPassword() {
  if (!generatedPassword) return;

  navigator.clipboard.writeText(generatedPassword);
  alert("Password copied to clipboard!");
}

  return (
    <section className="generator">
      <h2>🔑 Password Generator</h2>

      <p>
        Generate a strong, random password to help keep your accounts secure.
      </p>

      <label>
        Password Length: <strong>{length}</strong>
      </label>

      <input
        type="range"
        min="8"
        max="32"
        value={length}
        onChange={(event) => setLength(event.target.value)}
      />
      <div className="options">

  <label>
    <input
      type="checkbox"
      checked={uppercase}
      onChange={() => setUppercase(!uppercase)}
    />
    Uppercase Letters
  </label>

  <label>
    <input
      type="checkbox"
      checked={lowercase}
      onChange={() => setLowercase(!lowercase)}
    />
    Lowercase Letters
  </label>

  <label>
    <input
      type="checkbox"
      checked={numbers}
      onChange={() => setNumbers(!numbers)}
    />
    Numbers
  </label>

  <label>
    <input
      type="checkbox"
      checked={symbols}
      onChange={() => setSymbols(!symbols)}
    />
    Symbols
  </label>

</div>
<button
  className="generate-btn"
  onClick={handleGeneratePassword}
>
  Generate Password
</button>
{generatedPassword && (
  <div className="generated-password">
    <p>{generatedPassword}</p>

    <button
      className="copy-btn"
      onClick={handleCopyPassword}
    >
      📋 Copy Password
    </button>
  </div>
)}
{history.length > 0 && (
  <div className="password-history">
    <h3>Recent Passwords</h3>

    {history.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
)}
    </section>
  );
}

export default PasswordGenerator;