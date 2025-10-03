import React from "react";
import styles from "./WorkProcess.module.css";
import startIcon from "../../assets/images/icon-1.png";
import decisionIcon from "../../assets/images/icon-2.png";
import certificateIcon from "../../assets/images/icon-3.png";

const steps = [
  {
    icon: startIcon,
    title: "Enroll at Morning Star",
    description:
      "Join one of Thanjavur’s most trusted institutions—renowned for academic excellence, values-based education, and holistic student development.",
  },
  {
    icon: decisionIcon,
    title: "Choose Your Path",
    description:
      "Discover personalized learning experiences across academics, arts, and co-curricular activities—designed to unlock your child’s unique potential.",
    highlight: true,
  },
  {
    icon: certificateIcon,
    title: "Achieve and Graduate",
    description:
      "Graduate with confidence, equipped with strong academic skills, character, and readiness for higher education and life beyond school.",
  },
];

const WorkProcess = () => {
  return (
    <section className={styles.workProcess}>
      <p className={styles.subHeading}>🌟 OUR APPROACH</p>
      <h2 className={styles.heading}>How We Nurture Young Minds</h2>
      <div className={styles.cardsContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.card} ${step.highlight ? styles.highlight : ""}`}
          >
            <div className={styles.iconWrapper}>
              <img src={step.icon} alt={step.title} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
