import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import AcademicHero from '../components/academics/AcademicHero';
import AcademicExcellence from '../components/academics/AcademicExcellence';
import Footer from '../components/Footer';

const Academic = () => {
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
        <AcademicHero />
      </section>

      <section data-aos="fade-up" data-aos-delay="300">
        <AcademicExcellence />
      </section>

      <Footer />
    </>
  );
};

export default Academic;
