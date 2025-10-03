import React from 'react';
import styles from './ChooseUs.module.css';

// Import decorative assets (adjust paths if you store them elsewhere)
import yellowCorner from '../../assets/images/yellow arrow.png';
import curvedLines from '../../assets/images/image.png';
import learnersVideo from '../../assets/images/hero-vdo.MP4'; // your main image

const features = [
  {
    title: 'World-Class Educators',
    description: 'Our experienced faculty uses creative methods to make learning meaningful and engaging.',
  },
  {
    title: ' Easy & Joyful Learning',
    description: 'Interactive classrooms and digital tools make learning fun, accessible, and child-centered.',
  },
  {
    title: 'Flexible Curriculum',
    description: 'We blend academic rigor with flexibility to support every child’s learning pace and interests.',
  },
  {
    title: 'Affordable Excellence',
    description: 'Top-tier education with reasonable fees—because quality learning should be for every child. ',
  },
];

const ChooseUs = ({ altText = 'Group of learners' }) => {
  return (
    <section className={styles.container}>
      {/* LEFT COLUMN */}
      <div className={styles.left}>
        <div className={styles.subtitle}>WHY CHOOSE US</div>

        {/* Curved lines decoration */}
        <img
          src={curvedLines}
          alt=""
          aria-hidden="true"
          className={styles.curvedLines}
        />

        <h2 className={styles.title}>
          Empowering Lifelong Learners at Morning Star School, {' '}
          <span className={styles.highlight}>Thanjavur.</span>
        </h2>
        <p className={styles.description}>
          At Morning Star School, Thanjavur, we believe in nurturing curiosity, building confidence, and fostering academic excellence from an early age. Our commitment to holistic education prepares your child not just for exams—but for life.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feat, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.checkIcon}>✔︎</span>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDescription}>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          {/* Dotted pattern behind (unchanged) */}
          <div className={styles.dottedPattern}></div>

          {/* Floating decorative lines (unchanged) */}
          <div className={styles.floatingLine1}></div>
          <div className={styles.floatingLine2}></div>

          {/* Yellow corner decorations using imported image */}
          <img
            src={yellowCorner}
            alt=""
            aria-hidden="true"
            className={styles.yellowTopLeft}
          />
          <img
            src={yellowCorner}
            alt=""
            aria-hidden="true"
            className={styles.yellowBottomRight}
          />

          {/* Main image */}
          <video
            src={learnersVideo}
            className={styles.image}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
