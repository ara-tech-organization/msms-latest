import React from "react";
import styles from "./CoreValues.module.css";
// import rainbow from "../../assets/images/rainbow.png";
// import car from "../../assets/images/car.png";
// import birds from "../../assets/images/birds.png";
import splash from "../../assets/images/splash.png";
import lines from "../../assets/images/curved_lines.png";
import rightImage from "../../assets/images/Smart Class.jpg";
import { FaCheck } from "react-icons/fa";

const coreValues = [
  {
    title: "Integrity",
    description: "We foster honesty, transparency, and strong moral values."
  },
  {
    title: "Excellence",
    description: "We strive to achieve the highest standards in academics and character."
  },
  {
    title: "Respect",
    description: "We nurture empathy, kindness, and appreciation for others."
  },
  {
    title: "Discipline",
    description: "We build focus, self-control, and a sense of responsibility."
  },
  {
    title: "Innovation",
    description: "We encourage creative thinking and a love for lifelong learning."
  },
  {
    title: "Responsibility",
    description: "We empower students to take ownership of their actions and decisions."
  }
];

const CoreValues = () => {
  return (
    <section className={styles.coreValuesSection}>
      {/* <img src={birds} alt="birds" className={styles.birds} /> */}
      {/* <img src={car} alt="car" className={styles.car} /> */}
      <img src={splash} alt="splash" className={styles.splash} />
      <img src={lines} alt="lines" className={styles.lines} />
      {/* <img src={rainbow} alt="rainbow" className={styles.rainbow} /> */}

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.why}>MSMS CORE VALUES</span>
          <h2 className={styles.title}>Guiding Principles That Shape Our Students</h2>
          <p className={styles.description}>
           At Morning Star Matriculation School, our core values guide every step of a student's journey—shaping them into responsible, respectful, and successful individuals.
          </p>

          <div className={styles.gridValues}>
            {coreValues.map((value, index) => (
              <div className={styles.valueBox} key={index}>
                <FaCheck className={styles.checkIcon} />
                <div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <button className={styles.button}>Explore More</button> */}
        </div>

        <div className={styles.rightImage}>
          <img src={rightImage} alt="MSMS Student" />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;