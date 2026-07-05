function MFASection() {
  return (
    <section className="generator">

      <h2>🔐 Multi-Factor Authentication (MFA)</h2>

      <p>
        Multi-Factor Authentication adds an extra layer of security to your
        online accounts. Even if someone discovers your password, they still
        need another verification method to sign in.
      </p>

      <div className="password-history">

        <h3>📱 Authenticator Apps ⭐⭐⭐⭐⭐</h3>

        <p>
          Apps like Google Authenticator and Microsoft Authenticator generate
          one-time codes every 30 seconds.
        </p>

        <strong>Pros</strong>

        <ul>
          <li>Very secure</li>
          <li>Works without internet</li>
          <li>Free</li>
        </ul>

        <strong>Cons</strong>

        <ul>
          <li>You should save backup codes.</li>
        </ul>

      </div>

      <div className="password-history">

        <h3>📩 SMS Verification ⭐⭐⭐</h3>

        <p>
          A verification code is sent to your phone by text message.
        </p>

        <strong>Pros</strong>

        <ul>
          <li>Easy to set up.</li>
        </ul>

        <strong>Cons</strong>

        <ul>
          <li>Can be vulnerable to SIM-swapping attacks.</li>
        </ul>

      </div>

      <div className="password-history">

        <h3>📧 Email Verification ⭐⭐</h3>

        <p>
          A code or verification link is sent to your email.
        </p>

        <strong>Pros</strong>

        <ul>
          <li>Simple to use.</li>
        </ul>

        <strong>Cons</strong>

        <ul>
          <li>If your email is compromised, this method is less secure.</li>
        </ul>

      </div>

      <div className="password-history">

        <h3>🔑 Security Keys ⭐⭐⭐⭐⭐</h3>

        <p>
          Physical security keys provide one of the strongest forms of account
          protection.
        </p>

        <strong>Pros</strong>

        <ul>
          <li>Extremely secure.</li>
          <li>Protects against phishing attacks.</li>
        </ul>

        <strong>Cons</strong>

        <ul>
          <li>Requires purchasing a hardware key.</li>
        </ul>

      </div>

      <div className="breach-warning">

        <strong>💡 Best Practice</strong>

        <ul>
          <li>Use unique passwords for every account.</li>
          <li>Store passwords in a password manager.</li>
          <li>Enable MFA wherever possible.</li>
          <li>Authenticator apps are recommended over SMS.</li>
        </ul>

      </div>

    </section>
  );
}

export default MFASection;