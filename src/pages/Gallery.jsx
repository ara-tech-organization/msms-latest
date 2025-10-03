import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryPics from '../components/gallery/GalleryPics';
import Footer from '../components/Footer';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <section data-aos="fade-up">
        <GalleryHero />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <GalleryPics />
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
