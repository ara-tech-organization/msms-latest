import React from 'react';
import styles from './Instructors.module.css';
import { FaBook } from 'react-icons/fa';

const Instructors = () => {
  return (
    <section className={styles.instructorSection}>
      <div className={styles.header}>
        <div>
          <span className={styles.subtitle}>
            <FaBook className={styles.bookIcon} /> TEACHERS
          </span>
          <h2 className={styles.title}>Meet Our Instructors</h2>
        </div>
      </div>

      <div className={styles.groupPhotoWrapper}>
        <img
          src="./images/Group.png" // <-- replace with your actual group image path
          alt="Group of Instructors"
          className={styles.groupPhoto}
        />
      </div>
    </section>
  );
};

export default Instructors;
