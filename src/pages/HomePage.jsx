import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Communication, Consulting, Logo, Products, Recycling, Training} from './../utils/images'
import "../styles/HomePage.css";
import { Link } from 'react-router-dom';
// import Logo
const servicesData = [
  {
    title: "Sustainability, ESG, and CSR Consulting",
    description: "Transforming strategies for a sustainable future by embedding sustainability.",
    image: Consulting,
  },
  {
    title: "Science Communication",
    description: "Simplifying science and amplifying impact for public understanding.",
    image: Communication
  },
  {
    title: "Sustainability Training",
    description: "Empowering individuals and businesses with actionable training programs.",
    image: Training
  },
  {
    title: "Waste Recycling",
    description: "Promoting innovative waste management solutions and circular economies.",
    image: Recycling
    },
  {
    title: "Sustainable Living Products",
    description: "we offer a wide range of sustainable living products designed to help individuals and businesses reduce their environmental footprint.",
    image: Products

  },
];

const HomePage = () => {
  return (
    <div className="homepage">
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
          {/* <div className="readmore-container">
          <Link to={service.title ==="Sustainable Living Products"?"/our-products":"/services" }className="read-more">
              Read More <span className="arrow">→</span>
            </Link>
          </div> */}
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
