import { useEffect, useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
import PasswordInput from "./components/PasswordInput";
import PasswordGenerator from "./components/PasswordGenerator";
import MFASection from "./components/MFASection";
import SecurityTips from "./components/SecurityTips";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app">

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <Hero />

      <PasswordInput />

      <PasswordGenerator />

      <MFASection />

      <SecurityTips />

    </div>
  );
}

export default App;