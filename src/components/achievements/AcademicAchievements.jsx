import React, { useEffect, useRef, useState } from "react";
import styles from "./AcademicAchievements.module.css";

const achievements = [
  {
    title: "Strong Academic Foundation",
    percent: 95,
    description:
      "95% of our students consistently score top marks in core subjects such as Math, Science, and English.",
  },
  {
    title: "Holistic Development",
    percent: 90,
    description:
      "	90% of our students actively participate in extracurricular activities, developing creativity and leadership.",
  },
  {
    title: "Student Progress Rate",
    percent: 98,
    description:
      "98% of our students show remarkable year-on-year academic improvement and personal growth.",
  },
];

const AcademicAchievements = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={styles.academicAchievements} ref={sectionRef}>
      <h2 className={styles.heading}>
        <span>ACADEMIC</span> ACHIEVEMENTS
      </h2>
      <div className={styles.cardContainer}>
        {achievements.map((item, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.percent}>{item.percent}%</p>
            <div className={styles.progressWrapper}>
              <div
                className={`${styles.progressBar} ${
                  inView ? styles.animate : ""
                }`}
                style={{ width: inView ? `${item.percent}%` : "0%" }}
              ></div>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicAchievements;