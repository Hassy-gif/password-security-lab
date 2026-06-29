import "./App.css";
import Hero from "./components/Hero";
import PasswordInput from "./components/PasswordInput";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div className="app">
      <Hero />
      <PasswordInput />
      <PasswordGenerator />
    </div>
  );
}

export default App;