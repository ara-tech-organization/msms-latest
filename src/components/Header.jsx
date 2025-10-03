import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* ✅ Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span>
            <a href="tel:+919876543210">📞 +91 98765 43210</a>
          </span>
          <span>
            <a href="mailto:info@msmschool.edu.in">✉️ info@msmschool.edu.in</a>
          </span>
          <span>
            <a href="https://www.google.com/maps/place/Morning+Star+Matriculation+School,+Thanjavur/@10.7944873,79.1314642,814m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3baac7673135d339:0x4807ede4c712a54a!8m2!3d10.794482!4d79.1340391!16s%2Fg%2F11r9mmyt8?entry=ttu"
              target="_blank" rel="noopener noreferrer">
              📍 Rajagopalasamy Kovil Street, Thanjavur
            </a>
          </span>

        </div>
        <div className={styles.topRight}>
          <a href="https://www.instagram.com/msmstj/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/msmstj/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="http://www.youtube.com/@MorningStarMatriculationSchool" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a> */}
        </div>
      </div>

      {/* ✅ Main Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="/">
              <img src="/images/MSMS-Logo.png" alt="MSMS Logo" />
            </a>
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>About</NavLink>
              </li>
              <li>
                <NavLink to="/academics" className={({ isActive }) => (isActive ? styles.active : undefined)}>Academics</NavLink>
              </li>
              <li>
                <NavLink to="/achievements" className={({ isActive }) => (isActive ? styles.active : undefined)}>Achievements</NavLink>
              </li>
              <li>
                <NavLink to="/facilities" className={({ isActive }) => (isActive ? styles.active : undefined)}>Facilities</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => (isActive ? styles.active : undefined)}>Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>Contact</NavLink>
              </li>
              <li className={styles.ctaButton}>
                <NavLink to="/contact">Enroll Now</NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.hamburger} onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
