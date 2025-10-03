import React from 'react';
import styles from './AcademicExcellence.module.css';

const AcademicExcellence = () => {
  return (
    <section className={styles.aboutSection}>
      {/* Yellow Rainbow */}
      <img src="./images/star.png" alt="Decoration" className={styles.yellowRainbow} />

      <div className={styles.container}>
        {/* Left Side - Images */}
        <div className={styles.imageGrid}>
          <img
            src="./images/gal-5.jpg"
            alt="Student Learning"
            className={styles.mainImage}
          />
        </div>

        {/* Right Side - Content */}
        <div className={styles.content}>
          <span className={styles.tagline}>➤ Celebrating Academic Excellence</span>
          <h2 className={styles.heading}>100% Pass Rate for 10 Years in a Row!</h2>
          <p className={styles.description}>
            It is with immense pride that we celebrate the outstanding achievements of our Grade 10 students (2024–25), who have showcased exceptional dedication, perseverance, and academic brilliance. With an impressive school average of 395 marks, our students have once again upheld our tradition of excellence.
          </p>

          <div className={styles.highlights}>
            <div className={styles.point}> <strong>🏆 100% Pass Result </strong> for the 10th time!</div>
            <div className={styles.point}> <strong>🎯 10 Students scored </strong> above 480 marks</div>
            <div className={styles.point}> <strong>🎯 27 Students scored </strong> above 450 marks</div>
            {/* <div className={styles.point}>✅ <strong>🎯 67 Students</strong> Scored Above 400 Marks</div> */}
            <div className={styles.point}><strong>🎯 56 Students scored </strong> above 400 marks</div>
            <p className={styles.description}>📚 With consistent high scores and several students securing 95+ marks in Tamil, English, Maths, Science, and Social Science, these results are a testament to our strong academic foundation and student excellence.</p>
          </div>

          {/* <button className={styles.ctaButton}>Celebrate With Us</button> */}
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;
