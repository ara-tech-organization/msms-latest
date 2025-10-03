import React from "react";
import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.leftSide}>
        {/* Decorative green image */}
        <img
          src="./images/green.png"
          alt="Decoration"
          className={styles.decor}
        />

        {/* Main Girl Image */}
        <img
          src="./images/gal-4.jpg"
          alt="Student Standing"
          className={styles.mainImage}
        />

        {/* Right two blocks */}
        <div className={styles.rightBlocks}>
          <div className={styles.yearsBox}>
            <h2>30+</h2>
            <p>Years Experience</p>
          </div>
          <div className={styles.studentsImg}>
            <img src="./images/gal-7.JPG" alt="Group of Students" />
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <span className={styles.aboutTag}>ABOUT US</span>
        <h2 className={styles.heading}>
          History of <span className={styles.highlight}>MSMS</span>
        </h2>
        <p className={styles.desc}>
        Since its inception, Morning Star Matriculation School (MSMS) has grown into a respected institution, dedicated to academic excellence and holistic development. We blend traditional values with modern educational practices to nurture integrity, creativity, and critical thinking in every student. <br /> With an experienced faculty, a supportive learning environment, and a dynamic curriculum, MSMS ensures that students are not only academically strong but also morally grounded and future-ready. We continue to inspire young minds to become confident, compassionate, and capable leaders in an ever-evolving world.
        </p>
        <div className={styles.missions}>
          <div>
            <h4>🎯 Our Vision</h4>
            <p>
              To empower every child to unlock their full potential, excel academically and personally, and grow into responsible global citizens who lead with integrity, empathy, and purpose.
            </p>
          </div>
          <div>

            <h4>🌟 Our Mission</h4>
            <p>
              At Morning Star Matriculation School, our mission is to provide a safe, inclusive, and intellectually enriching environment where students flourish through a well-balanced curriculum and passionate educators. We are committed to cultivating innovation, leadership, compassion, and resilience—ensuring every learner is equipped to succeed in life and contribute meaningfully to society.
            </p>
          </div>

        </div>
        {/* <button className={styles.btn}>Admission Open ➔</button> */}
          <Link to="/contact" className={styles.btn}>
            Admissions Open <span className={styles.arrow}>→</span>
          </Link>
      </div>
    </section>
  );
};

export default AboutUs;
