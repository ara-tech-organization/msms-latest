import React from "react";
import styles from "./FacilitiesSection.module.css";
import {
  FaChalkboardTeacher,
  FaPalette,
  FaBookReader,
  FaLanguage,
  FaRunning,FaBus
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Smart Classrooms",
    courses: "Digital Rooms"
  },
  {
    icon: <FaPalette />,
    title: "Art & Design Studio",
    courses: "Creative Zones"
  },
  {
    icon: <FaBookReader />,
    title: "Library & Resource Center",
    courses: "3,000+ Books"
  },
  {
    icon: <FaLanguage />,
    title: "Language & Communication Lab",
    courses: "Interactive Modules"
  },
  {
    icon: <FaRunning />,
    title: "Sports & Athletics",
    courses: "Outdoor & Indoor Games"
  },
  {
    icon: <FaBus />,
    title: "Transport Facilities",
    courses: "Well-connected Routes"
  }
];


const FacilitiesSection = () => {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.facilitiesHeader}>
        <p className={styles.category}>FACILITIES WE OFFER</p>
        <h2>Modern Facilities to Empower Every Learner</h2>
        <div className={styles.arrowAnimation}></div>
        <button className={styles.browseBtn}>At MSMS, we offer state-of-the-art facilities designed to foster holistic development, creativity, and 21st-century learning. Explore our most valued campus features below.

</button>
      </div>
      <div className={styles.facilitiesGrid}>
        {facilities.map((item, index) => (
          <div className={styles.facilityItem} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;