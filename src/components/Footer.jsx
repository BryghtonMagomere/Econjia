import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="brand-name">Eco-Njia Consultancy</h2>
            <p className="brand-tagline">Empowering a sustainable future.</p>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:+254796354505">0796 354 505</a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{' '}
                <a href="tel:+254796354505">0796 354 505</a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@econjia.com">info@econjia.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/econjia" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/eco-njia-consultancy-ltd/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570796610040" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Eco-Njia Consultancy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
