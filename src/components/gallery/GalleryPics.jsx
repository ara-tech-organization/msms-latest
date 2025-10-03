import React, { useState } from 'react';
import styles from './GalleryPics.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const images = [
  './images/gal-1.jpg',
  './images/Expo.JPG',
  './images/gal-3.jpg',
  './images/gal-4.jpg',
  './images/gal-5.jpg',
  './images/gal-6.JPG',
  './images/gal-7.JPG',
  './images/gal-8.JPG',
  './images/gal-9.JPG',
  './images/gal-10.JPG',
  './images/gal-11.JPG',
  './images/Hindi.jpg',
  './images/Workshop.JPG',
  './images/TeachersDay.JPG',
  './images/DhamuWorkshop.JPG',
  './images/PongalCeleb.JPG',
  './images/RepublicDay.JPG',
  './images/Christmas.jpg',
  './images/Dance2.jpg',
  './images/Handwriting.jpg',
  './images/IndependanceDay.JPG',
  './images/FamilyDay.JPG',
  './images/PrizeDistribution.JPG',
  './images/FoodFestival.JPG'
];

const GalleryPics = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            onClick={() => openModal(index)}
            className={styles.galleryImg}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={`${styles.nav} ${styles.left}`} onClick={showPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            src={images[selectedIndex]}
            alt={`Selected ${selectedIndex}`}
            className={styles.modalImg}
          />
          <button className={`${styles.nav} ${styles.right}`} onClick={showNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <button className={styles.closeBtn} onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPics;
