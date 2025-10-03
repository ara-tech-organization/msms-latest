import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import FacilityHero from '../components/facilities/FacilityHero';
import FacilitiesSection from '../components/facilities/FacilitiesSection';
import WorkProcess from '../components/facilities/WorkProcess';
import FacilityImage from '../components/facilities/FacilityImages';
import ECAClasses from '../components/facilities/EcaClasses';
import TransportFacilities from '../components/facilities/TransportFacilities';
import Footer from '../components/Footer';

const Facility = () => {
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
        <FacilityHero />
      </section>

      <section data-aos="fade-up" data-aos-delay="100">
        <FacilitiesSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <WorkProcess />
      </section>

      <section data-aos="fade-up" data-aos-delay="300">
        <ECAClasses />
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <TransportFacilities />
      </section>

      <section data-aos="fade-up" data-aos-delay="500">
        <FacilityImage />
      </section>

      <Footer />
    </>
  );
};

export default Facility;
