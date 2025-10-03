import React from 'react';
import styles from './StaffPortalSection.module.css';
import { Link } from 'react-router-dom';

const facilitiesList = [
  "Smart Classrooms",
  "Music Room",
  "Art & Crafts",
  // "Sports Complex",
  // "Music Room",
  // "Art & Crafts",
];

const Facilities = () => {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2>🌟 Possibilities</h2>
          <p>Discover the facilities that empower our students to grow in every direction.</p>
          <ul>
            <li><span>✔</span> Engaging Academic Environment</li>
            <li><span>✔</span> State-of-the-Art Infrastructure </li>
            <li><span>✔</span> Well-Rounded Co-Curricular Programs </li>
          </ul>
          {/* <Link to="/contact">
            <button className={styles.ctaButton}>JOIN US NOW</button>
          </Link> */}
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.circleGrid}>
            {facilitiesList.map((item, index) => (
              <div key={index} className={`${styles.circle} ${styles['circle' + (index + 1)]}`}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
