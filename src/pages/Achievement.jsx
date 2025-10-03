import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import AchievetHero from '../components/achievements/AchieveHero';
// import Contactus from '../components/contact/ContactUs';
import Footer from '../components/Footer';
import AcademicAchievements from '../components/achievements/AcademicAchievements';
import InstagramReels from '../components/achievements/InstagramReels';
import Acheivementscontent from '../components/achievements/Acheivementscontent';

const Achieve = () => {
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
        <AchievetHero />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <Acheivementscontent />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <AcademicAchievements />
      </section>

      <section data-aos="fade-up" data-aos-delay="600">
        <InstagramReels />
      </section>

      <Footer />
    </>
  );
};

export default Achieve;
