import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from '../contact.module.css'; // Import styles from CSS module

const Contact = () => {
  return (
    <div className={styles.contactContainer}> {/* Use styles from the imported module */}
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <p className={styles.contactDescription}>
        Have questions? Reach out via email at{" "}
        <strong className={styles.contactEmail}>contact@travelblog.com</strong>
      </p>

      {/* Contact Form */}
      <form className={styles.contactForm}>
        <div className={styles.formField}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.inputField}
          />
        </div>
        <div className={styles.formField}>
          <input
            type="email"
            placeholder="Your Email"
            className={styles.inputField}
          />
        </div>
        <div className={styles.formField}>
          <textarea
            placeholder="Your Message"
            rows={4}
            className={styles.inputField}
          ></textarea>
        </div>
        <button className={styles.submitButton}>Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/" className={styles.socialIcon}>
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com/" className={styles.socialIcon}>
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" className={styles.socialIcon}>
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/" className={styles.socialIcon}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
