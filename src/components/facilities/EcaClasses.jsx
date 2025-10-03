import React from 'react';
import styles from './EcaClasses.module.css';
import {
  GiTheaterCurtains,   // Bharatham (Classical Dance Stage vibe) 🎯
  GiMusicalNotes,
  GiChessKing,
  GiBroadsword,
  GiHighKick,
  GiArcheryTarget,
  GiDiceSixFacesFive,
  GiPunchBlast,
  GiPianoKeys,
  GiPingPongBat,
  GiGuitar,
  GiCrafting,
  GiPaintBrush,
  GiMeditation
} from 'react-icons/gi';

const ecaClasses = [
  { title: 'Bharatham', icon: <GiTheaterCurtains /> },  // ✅ Classical Dance symbol
  { title: 'Western Dance', icon: <GiMusicalNotes /> },
  { title: 'Chess', icon: <GiChessKing /> },
  { title: 'Silambam', icon: <GiBroadsword /> },
  { title: 'Karate', icon: <GiHighKick /> },
  { title: 'Archery', icon: <GiArcheryTarget /> },
  { title: 'Carrom', icon: <GiDiceSixFacesFive /> },
  { title: 'Taekwondo', icon: <GiPunchBlast /> },
  { title: 'Keyboard', icon: <GiPianoKeys /> },
  { title: 'Table Tennis', icon: <GiPingPongBat /> },
  { title: 'Guitar', icon: <GiGuitar /> },
  { title: 'Art & Craft', icon: <GiCrafting /> },
  { title: 'Drawing', icon: <GiPaintBrush /> },
  { title: 'Yoga', icon: <GiMeditation /> }
];


const ECAClasses = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>MSMS ECA Classes</h2>
      <div className={styles.grid}>
        {ecaClasses.map((item, index) => (
          <div key={index} className={`${styles.card} ${styles[`color${index % 6}`]}`}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ECAClasses;
