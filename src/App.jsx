import "./App.css";
import Hero from "./components/Hero";
import PasswordInput from "./components/PasswordInput";
import PasswordGenerator from "./components/PasswordGenerator";
import MFASection from "./components/MFASection";

function App() {
  return (
    <div className="app">
      <Hero />
      <PasswordInput />
      <PasswordGenerator />
    <MFASection />
    </div>
  );
}

export default App;