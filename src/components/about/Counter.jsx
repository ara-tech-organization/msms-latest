import React from 'react';
import CountUp from 'react-countup';
import styles from './Counter.module.css';
import { FaUserGraduate, FaChalkboardTeacher, FaSmile, FaUsers, FaQuoteLeft } from 'react-icons/fa';

const statsData = [
  { icon: <FaUserGraduate />, value:  1700, suffix:'+', label: 'Young Learners Nurtured' },
  { icon: <FaChalkboardTeacher />, value: 150, suffix: '+', label: 'Dedicated and Experienced Educators' },
  { icon: <FaSmile />, value: 98, suffix: '%', label: 'Parent Satisfaction' },
  { icon: <FaUsers />, value: 30, suffix:'+ Years', label: 'Legacy of Academic Excellence' },
];

const testimonials = [
  {
    quote: 'Excellent performance, Satisfied service.',
    name: 'Aruna Nandhini',
    title: 'Parent',
  },
  {
    quote: 'Excellent service and well qualified education in Thanjavur.',
    name: 'Preethi Sheetal.Y',
    title: 'Parent',
  },
  {
    quote: 'One of the best learning place in thanjavur.',
    name: 'subathra',
    title: 'Parent',
  },
];

const StatsAndTestimonials = () => {
  return (
    <section className={styles.wrapper}>
      <h3 style={{textAlign:"center",fontSize:"28px",marginBottom:"20px"}}>Key Highlights of Morning Star Matriculation School</h3>
      {/* STATS COUNTER */}
      <div className={styles.statsContainer}>
        {statsData.map((item, index) => (
          <div key={index} className={styles.statItem}>   
            <div className={styles.iconWrapper}>{item.icon}</div>
            <div className={styles.statText}>
              <h3 className={styles.value}>
                <CountUp end={item.value} duration={3} separator="," />{item.suffix}
              </h3>
              <p className={styles.label}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className={styles.testimonialSection}>
        <p className={styles.subheading}>Testimonial</p>
        <h2 className={styles.heading}>Creating a Community of Lifelong Learners.</h2>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.quote}>{testimonial.quote}</p>
              <h4 className={styles.name}>{testimonial.name}</h4>
              <p className={styles.title}>{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default StatsAndTestimonials;
