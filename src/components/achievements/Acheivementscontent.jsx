import React from "react";
import styles from "./Acheivementscontent.module.css";
import circleHighlight from '../../assets/images/circle.png';

const Acheivementscontent = () => {
  return (
    <section className={styles.achievementsSection}>
      <div className={styles.content}>
         <span className={styles.label}>CHECK OUT OUR ACHIEVEMENTS</span>
          <h2 className={styles.title}>
                       Celebrating Academic <span className={styles.highlight}>Excellence<img src={circleHighlight} alt="circle highlight" /></span><br />
                    </h2>
        {/* <h2 className={styles.heading}>Celebrating Academic Excellence</h2> */}
        <p className={styles.description}>
          Morning Star Matriculation School consistently sets benchmarks in both academic and co-curricular excellence, standing out as a leader among educational institutions.
        </p>
        <ul className={styles.list}>
          <li>✅ 100% Pass Rate in board examinations for the past [X] consecutive years</li>
          <li>🥇 Top District Ranks and recipients of state and national-level scholarships</li>
          <li>🧪 Winners in inter-school science expos, math olympiads, and cultural events</li>
          <li>📱 Smart Classrooms with advanced digital learning tools in every room</li>
          {/* <li>Certified smart classrooms equipped with digital learning tools in every classroom.</li> */}
          <li>🏅 National-Level Sports Achievements – medals in athletics, kabaddi, chess, and more</li>
          <li>🎓 Strong Alumni Network – MSMS graduates placed in top colleges across India and abroad</li>
          <li>🌱 Community Outreach Programs promoting leadership, sustainability, and social responsibility</li>
        </ul>
      </div>
      <div className={styles.imageWrapper}>
        <img src="./images/msms achievements.webp" alt="MSMS Achievements" className={styles.image} />
      </div>
    </section>
  );
};

export default Acheivementscontent;
