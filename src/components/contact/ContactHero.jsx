import React from 'react';
import styles from './ContactHero.module.css';

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      {/* Decorative floating images */}
      <img src="./images/curve.png" alt="decor1" className={styles.decor1} />
      <img src="./images/dots.png" alt="decor2" className={styles.decor2} />
      <img src="./images/line.png" alt="decor3" className={styles.decor3} />
      <img src="./images/star.png" alt="decor4" className={styles.decor4} />

      {/* Main content */}
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <p>
          <span className={styles.homeLink}>Home</span> <span className={styles.separator}>//</span> Contact us
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
