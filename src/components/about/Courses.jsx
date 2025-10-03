import React from 'react';
import styles from './Courses.module.css';

const courses = [
  {
    title: "PreKG - UKG",
    description: "Fun-filled learning and foundational skill development for early learners.",
    lessons: 5,
    duration: "5h 30m",
    students: "50+",
    // teacher: "Ms. Priya",
    img: "./images/gal-7.JPG",
  },
  {
    title: "1st to 5th",
    description: "Primary education with a focus on creativity, core concepts, and joyful exploration.",
    lessons: 15,
    duration: "15h",
    students: "100+",
    // teacher: "Mr. Arjun",
    img: "./images/std (1).jpg",
  },
  {
    title: "6th to 10th",
    description: "Advanced academics, critical thinking, and focused guidance for board exam readiness.",
    lessons: 25,
    duration: "40h",
    students: "150+",
    // teacher: "Mrs. Kavitha",
    img: "./images/gal-9.JPG",
  }
];

const Courses = () => {
  return (
    <section className={styles.coursesSection}>
      <div className={styles.heading}>
        <span className={styles.subtitle}>OUR CLASSES</span>
        <h2>Creating a Community of Lifelong Learners</h2>
        {/* <button className={styles.exploreBtn}>Explore CLASSES →</button> */}
      </div>

      <div className={styles.cardsContainer}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <img src={course.img} alt={course.title} className={styles.cardImg} />
            <div className={styles.cardContent}>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <div className={styles.courseInfo}>
                {/* <span>📚 {course.lessons} Lessons</span> */}
                {/* <span>⏱️ {course.duration}</span> */}
                {/* <span>👥 {course.students} Students</span> */}
              </div>
              {/* <div className={styles.teacherEnroll}>
                <span className={styles.teacher}>{course.teacher}</span>
                <button className={styles.enrollBtn}>Enroll →</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
