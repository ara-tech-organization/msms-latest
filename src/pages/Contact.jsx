import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import ContactHero from '../components/contact/ContactHero';
import Contactus from '../components/contact/ContactUs';
import Footer from '../components/Footer';

const Contact = () => {
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
        <ContactHero />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <Contactus />
      </section>

      <Footer />
    </>
  );
};

export default Contact;
