import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/Contact.css";
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout';

const Contact = () => { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function postData(url , data ) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  // Example usage:
 

  const handleSubmit = (e) => {
    e.preventDefault();
    postData('https://api-j970.onrender.com/contact-us-via-mail', formData)
    .then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <section className="contact">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            />
            <button type="submit">Send Message</button>
          </form>

          {/* Contact Details */}
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+254 796354505" className="contact-link">0796354505</a>
            </p>
            <p>
    <strong>Whatsapp:</strong>{' '}
    <a href="tel:+254796354505" className="contact-link">0796354505</a>
  </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@econjia.com" className="contact-link">
              info@econjia.com
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/econjia?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/eco-njia-consultancy-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/eco-njia-consultancy-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570796610040&mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
