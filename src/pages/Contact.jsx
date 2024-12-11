import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/Contact.css";
import { useNavigate } from 'react-router-dom';

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
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
    postData('http://localhost:3000/contact-us-via-mail', formData)
    .then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Navbar />
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
              <a href="tel:+123456789" className="contact-link">+123 456 789</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                +123 456 789
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@example.com" className="contact-link">
                info@example.com
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
