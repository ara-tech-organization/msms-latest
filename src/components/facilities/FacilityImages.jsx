import React from "react";
import styles from "./FacilityImages.module.css";

const images = [
  { src: "./images/computer lab.jpg", title: "Computer Lab" },
  { src: "./images/lab.jpg", title: "Science Lab" },
  { src: "./images/library.jpg", title: "Library" },
  { src: "./images/smart class rooms.jpg", title: "Smart Classrooms" },
  { src: "./images/Carrom.jpg", title: "Carrom" },
  { src: "./images/Dance.jpg", title: "Dance" },
  { src: "./images/keyboard.JPG", title: "Keyboard" },
  { src: "./images/Karate.jpg", title: "Karate" },
  { src: "./images/Guitar.jpg", title: "Guitar" },
  { src: "./images/Archery.jpg", title: "Archery" },
  { src: "./images/Shotput.jpg", title: "Sports" }, // Uncomment if needed
  { src: "./images/Chess.JPG", title: "Chess" },
  { src: "./images/gal-2.jpg", title: "Indoor Games" },
  { src: "./images/Vocal.jpg", title: "Vocals" },
  { src: "./images/Dance1.JPG", title: "Dance"}
];


const FacilityImage = () => {
  return (
    <div className={styles.gallery}>
  {images.map((img, index) => (
    <div key={index} className={styles.card}>
      <img src={img.src} alt={img.title} className={styles.image} />
      <div className={styles.title}>{img.title}</div>
    </div>
  ))}
</div>
  );
};

export default FacilityImage;
