import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/HomePage.css";

const servicesData = [
  {
    title: "Sustainability, ESG, and CSR Consulting",
    description: "Transforming strategies for a sustainable future by embedding sustainability.",
    image: "https://img.freepik.com/premium-photo/going-beyond-make-their-plans-work-shot-group-businesspeople-using-laptop-together-office_590464-4937.jpg?w=1800",
  },
  {
    title: "Science Communication",
    description: "Simplifying science and amplifying impact for public understanding.",
    image: "https://img.freepik.com/free-photo/laboratory-laboratories-conduct-experiments-chemical-laboratory-transparent-flasks-output-formulas_146671-18280.jpg?t=st=1733519524~exp=1733523124~hmac=832c03dc9e1f7826bb81ea13618dd8b61335163da05d8380b5c0a19f506894ba&w=1800",
  },
  {
    title: "Sustainability Training",
    description: "Empowering individuals and businesses with actionable training programs.",
    image: "https://img.freepik.com/free-photo/people-working-tech-brand-together_23-2150966123.jpg?t=st=1733519616~exp=1733523216~hmac=43d1006d6cb3341e88bf5011f3d5a8e588d0b5707331a9107f1399c0c3b2d36a&w=1800",
  },
  {
    title: "Waste Recycling",
    description: "Promoting innovative waste management solutions and circular economies.",
    image: "https://img.freepik.com/free-photo/recycle-symbol-surrounded-with-waste-items-brown-wooden-textured-background_23-2147817222.jpg?t=st=1733519739~exp=1733523339~hmac=99cc6c78bbabc9debc58643efb2c66a0d076dddec65b2025a950652ec1b43682&w=1800",
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="/services" className="read-more">
                  Read More <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
