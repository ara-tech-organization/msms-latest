import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    phone: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/NewMorningStarEnquiry',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 123',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log(result);

      if (!result.error) {
        setModalMessage('Email sent successfully');
        setShowModal(true);
        setFormData({ name: '', emailAddress: '', phone: '' });
      } else {
        setModalMessage(result.message || 'Something went wrong');
        setShowModal(true);
      }
    } catch (error) {
      console.error('API error:', error);
      setModalMessage('Failed to send. Please try again later.');
      setShowModal(true);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
        <div className={styles.topContent}>
          <div className={styles.leftPanel}>
            <div className={styles.infoContent}>
              <h2>Get in Touch</h2>
              <p className={styles.description}>
                Contact Morning Star Matriculation School, Thanjavur for admissions, academic inquiries, and assistance—our team is ready to support you.
              </p>

              <div className={styles.infoCard}>
                <div className={styles.infoBlock}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <p className={styles.label}>Our Address</p>
                    <p className={styles.bold}>
                      2667, Rajagopalasamy Kovil Street,<br /> Thanjavur, Tamil Nadu 613009
                    </p>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <FaClock className={styles.icon} />
                  <div>
                    <p className={styles.label}>Hours Of Operation</p>
                    <p className={styles.bold}>Mon - Fri: 9.00am to 5.00pm</p>
                    <p className={styles.subNote}>[2nd Sat Holiday]</p>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <FaPhoneAlt className={styles.icon} />
                  <div>
                    <p className={styles.label}>Contact</p>
                    <p className={styles.bold}>97896 22422<br />morningstartnj@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialIcons}>
                <FaFacebookF />
                <FaInstagram />
                <FaPinterestP />
                <FaTwitter />
              </div>
            </div>
          </div>

          <div className={styles.rightPanel}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label>Name*</label>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <label>Email Address*</label>
              <input
                type="email"
                placeholder="Email"
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
              />

              <label>Phone*</label>
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>

              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>

        <div className={styles.iframeWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2195833836645!2d79.1291681759657!3d10.794487231440126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac7673135d339%3A0x4807ede4c712a54a!2sMorning%20Star%20Matriculation%20School%2C%20Thanjavur!5e0!3m2!1sen!2sin!4v1750066459289!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalBox}>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contactus;
