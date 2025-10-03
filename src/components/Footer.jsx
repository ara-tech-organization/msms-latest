import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <h2>Admissions Open for the Academic Year 2026–2027</h2>
        <p>
          Stay connected with Morning Star Matriculation School, Thanjavur for the latest news, updates, and enrollment details.
        </p>
        <div className={styles.subscribeForm}>
          {/* <input type="email" placeholder="Enter Email Address" /> */}
          <p>📚 Secure your child’s future with quality education.</p>
          <Link to="/contact">
            <button>👉 Enroll Now</button>
          </Link>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <img src="./images/msms logo.webp" alt="MSMS_Logo" className={styles.logoimage} />
          <h3 className={styles.schoolName}>MSMS</h3>
          <p>WHERE EVERY STUDENT THRIVES!</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/msmstj/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/msmstj/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="http://www.youtube.com/@MorningStarMatriculationSchool" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            {/* <li><a href="/"></a>Home</li> */}
            <li><a href="/about">About Us</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/achievements">Achievements</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacypolicy">Privacy Policy</a></li>
            {/* <li><a href="/facilities">Facilities</a></li> */}
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>School Hours</h4>
          <p><FaClock className={styles.clockIcon} /> 8 AM - 5 PM, Monday - Saturday</p>
          <p>Visit us at Thanjavur. Excellence starts here!</p>
          {/* <button className={styles.joinBtn}>Join Us Now</button> */}
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.centerGroup}>
          <div className={styles.centerText}>
            © {new Date().getFullYear()}
            <a href="https://discovertechnologies.co/" target="_blank" rel="noopener noreferrer">
              &nbsp;MSMS. All rights reserved. Website created by ARA Discover Technologies - A unit of  ARA Discoveries Pvt. Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
