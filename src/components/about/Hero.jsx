import React from 'react';
import styles from './Hero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      {/* Decorative floating images */}
      <img src="./images/curve.png" alt="decor1" className={styles.decor1} />
      <img src="./images/dots.png" alt="decor2" className={styles.decor2} />
      <img src="./images/line.png" alt="decor3" className={styles.decor3} />
      <img src="./images/star.png" alt="decor4" className={styles.decor4} />

      {/* Main content */}
      <div className={styles.content}>
        <h1>ABOUT US</h1>
        <p>
          <span className={styles.homeLink}>Home</span> <span className={styles.separator}>//</span> About Us
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
