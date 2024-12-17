import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/AboutUs.css";
import Layout from '../components/layout';

const AboutUs = () => {
  return (
    <Layout>
      <section className="about-us">
        <div className="about-container">
          {/* Our Story */}
          <div className="story-section">
            <h2 className="section-title">Our Story</h2>
            <p className="section-content">
              Eco-Njia Consultancy, founded by sustainability expert Njoki Kangethe, is dedicated to championing environmental stewardship and promoting a circular economy.
              Driven by a passion for sustainable change, EcoNjia helps businesses and communities transition to practices that promote environmental responsibility, social equity, and long-term sustainability.
              Our mission is to make sustainability not just an aspiration but a practical, accessible reality for all.
            </p>
          </div>

          {/* Meet the Founder */}
          <div className="founder-section">
            <img 
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1733433076~exp=1733436676~hmac=f4a88f8a13732e8ed38b6a69086037552ab3c664fa39102830b2e178c228550b&w=1060" 
              alt="Njoki Kangethe" 
              className="founder-image" 
            />
            <div className="founder-details">
              <p>
                Njoki Kangethe holds an MSc in Sustainable Development from UNESCO’s IHE Delft in the Netherlands and has extensive experience in the sustainability sector.
                She was part of the UN Sustainable Development Solutions Network (SDSN) LPF program and is in several notable networks such as the Change-makers’ Program of the International Sustainable Chemistry Collaborative Centre (ISC3) headquartered in Bonn, Germany.
              </p>
              <p>
                Njoki completed her sustainability consulting apprenticeship with the ESG Department of the Dutch Entrepreneurial Development Bank (FMO) and was part of the founding board of the USA-based waste management NGO, Waste-Free23 Organization.
                She loves the planet and people, her family and friends, hiking, tea… not exactly in that order!
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h2 className="section-title">Our Values</h2>
            <ul className="values-list">
              <li>Collaboration</li>
              <li>Community Focus</li>
              <li>Environmental Stewardship</li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <h2 className="section-title">Our Team</h2>
            <p>We will introduce the team members later next year.</p>
          </div>
        </div>
      </section>
    </Layout>
    );
};

export default AboutUs;
