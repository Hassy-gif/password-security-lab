const tips = [
  "Use a different password for every account.",
  "Enable Multi-Factor Authentication whenever possible.",
  "Use a password manager to generate and store passwords.",
  "Never share your password or verification codes.",
  "Watch out for phishing emails and fake login pages.",
  "Keep your operating system and apps updated.",
  "Avoid using personal information in your passwords.",
  "Use passwords with at least 12–16 characters.",
];

function SecurityTips() {
  const day = new Date().getDate();
  const tip = tips[day % tips.length];

  return (
    <section className="generator">
      <h2>💡 Cybersecurity Tip of the Day</h2>

      <div className="password-history">
        <p>{tip}</p>
      </div>
    </section>
  );
}

export default SecurityTips;