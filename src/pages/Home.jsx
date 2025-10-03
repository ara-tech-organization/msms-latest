import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ChooseUs from '../components/home/ChooseUs';
import Footer from '../components/Footer';
import Facilities from '../components/home/StaffPortalSection';
import FaqAccordion from '../components/home/Faq';
import CoreValues from '../components/home/CoreValues';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>🌟 Morning Star Matriculation School – Thanjavur</title>
        <meta
          name="description"
          content="Shaping young minds with values, knowledge, and creativity. MSMS offers holistic education, modern facilities, and dedicated teachers to build confident, future-ready students."
        />
      </Helmet>

      <Header />
      <main>
        <section data-aos="fade-up">
          <HeroSection />
        </section>
        <section data-aos="fade-up">
          <AboutSection />
        </section>
        <section data-aos="fade-up">
          <Facilities />
        </section>
        <section data-aos="fade-up">
          <CoreValues />
        </section>
        <section data-aos="fade-up">
          <ChooseUs />
        </section>
        <section data-aos="fade-up">
          <FaqAccordion />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;