import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutHero from '../components/about/Hero';
import Header from '../components/Header';
import AboutUs from '../components/about/AboutUs';
import StatsCounter from '../components/about/Counter';
import Courses from '../components/about/Courses';
import Instructors from '../components/about/Instructors';
import Footer from '../components/Footer';

const About = () => {
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
        <AboutHero />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <AboutUs />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <StatsCounter />
      </section>

      <section data-aos="fade-up" data-aos-delay="600">
        <Courses />
      </section>

      <section data-aos="fade-up" data-aos-delay="800">
        <Instructors />
      </section>

      <Footer />
    </>
  );
};

export default About;
