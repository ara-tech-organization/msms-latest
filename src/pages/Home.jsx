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
        <title>Morning Star Matriculation School | Best School in Thanjavur Since 1994</title>

        <meta
          name="description"
          content="Discover why Morning Star Matriculation School (MSMS) is recognized as the best school in Thanjavur. Academic excellence and holistic development since 1994."
        />
        <meta
          name="keywords"
          content="best school in Thanjavur, schools in  Rajagopalasamy Kovil Street, Thanjavur, top school near me, matriculation school Thanjavur, matriculation school in Thanjavur, education Thanjavur, admissions open Thanjavur school, Top 10 school in thanjavur"
        />

        {/* Open Graph Meta */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.msmstj.in/" />
        <meta property="og:title" content="Morning Star Matriculation School | Best School in Thanjavur" />
        <meta
          property="og:description"
          content="Join the best school in Thanjavur — Morning Star Matriculation School. Shaping future-ready leaders through academic excellence and holistic growth."
        />
        <meta
          property="og:image"
          content="https://www.msmstj.in/assets/images/msms-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.msmstj.in/" />
        <meta name="twitter:title" content="Morning Star Matriculation School | Best School in Thanjavur" />
        <meta
          name="twitter:description"
          content="Explore Morning Star Matriculation School, the best school in Thanjavur for students to grow academically, creatively, and personally."
        />
        <meta
          name="twitter:image"
          content="https://www.msmstj.in/assets/images/msms-og-image.jpg"
        />

        <link rel="canonical" href="https://www.msmstj.in/" />
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