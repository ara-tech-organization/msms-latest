import React from "react";
import styles from "./Privacypolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1 className={styles.title}>🛡️ Privacy Policy for Morning Star Matric School</h1>

        <p>
          At Morning Star Matric School App, operated by ARA Discoveries Pvt Ltd, your privacy is our top priority. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>Student Name, Class, Section, and Roll Number</li>
          <li>Contact Number</li>
        </ul>
        <p>
          We do not collect personal data for any purpose other than providing school-related services.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Share academic performance and attendance with parents and students</li>
          <li>Notify users about exam schedules, study materials, and school updates</li>
          <li>Improve communication between school and home</li>
          <li>Enhance user experience and system performance</li>
        </ul>
        <p>We do not sell, rent, or share your data with third parties.</p>

        <h2>3. Data Security</h2>
        <p>
          We use industry-standard security measures to protect your information. All data is:
        </p>
        <ul>
          <li>Stored on secure servers</li>
          <li>Transmitted using encrypted protocols</li>
          <li>Accessible only by authorized school administrators</li>
        </ul>

        <h2>4. User Rights</h2>
        <ul>
          <li>Access their data through school login</li>
          <li>Request correction of inaccurate information</li>
        </ul>
        <p>
          If you wish to make such a request, contact your school’s administration or email us at <a href="mailto:support@araschoolmate.com">support@araschoolmate.com</a>
        </p>

        <h2>5. Children’s Privacy</h2>
        <p>
          We comply with applicable laws regarding children’s online privacy. The app is designed for use under the guidance of schools and parents, and we do not knowingly collect data from children without school/parental involvement.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          Morning Star Matric School App may use third-party services (like cloud hosting, push notification tools), but we ensure that these services comply with necessary data protection standards.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. All updates will be posted on this page and reflected by the “Last Updated” date above.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For any questions about this Privacy Policy, please contact:
          <br />
          <strong>ARA Discoveries Pvt Ltd</strong>
          <br />
          Email: <a href="mailto:support@araschoolmate.com">support@araschoolmate.com</a>
          <br />
          Website: <a href="https://www.araschoolmate.com" target="_blank" rel="noopener noreferrer">www.araschoolmate.com</a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
