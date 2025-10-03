import React from 'react';
import styles from './HeroSection.module.css';
import heroPattern from '../../assets/images/pattern.png';
import { Link } from 'react-router-dom';
import dotPattern from '../../assets/images/dots.png';
import dashedArrow from '../../assets/images/arrow.png';
import heroVideo from "../../assets/images/MSMS.MP4";


const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={heroPattern} alt="pattern background" className={styles.pattern} />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>Welcome to Morning Star Matriculation School</span>
          <h1 className={styles.title}>
            Empowering Young Minds to 
            Shine Brighter
          </h1>
          <p className={styles.text}>
            Discover holistic learning, digital innovation, and compassionate guidance—right here in Thanjavur.
          </p>
          <Link to="/contact">
            <button className={styles.cta}>
              Admissions Open
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
          <img src={dashedArrow} alt="dashed arrow" className={styles.dashedArrow} />
        </div>
        <div className={styles.imageWrapper}>
          <video
            src={heroVideo}
            className={styles.heroImage}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>

          <img src={dotPattern} alt="dot pattern" className={styles.dotPattern} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

