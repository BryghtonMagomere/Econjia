import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/EcoNjiaUpdates.css";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

const EcoNjiaUpdates = () => {
  return (
   <>
    <section className="updates">
        <div className="container">
          <h1 className="updates-title">EcoNjia Updates: ESG & CSR</h1>
          <p className="updates-intro">
            Discover the importance of ESG (Environmental, Social, Governance) and CSR (Corporate Social Responsibility) in building a greener, fairer future.
          </p>

          {/* ESG Section */}
          <div className="updates-section">
            <h2 className="section-title">What is ESG?</h2>
            <p className="section-description">
              ESG is a framework that helps businesses and investors consider their environmental, social, and governance impacts.
            </p>
            <ul className="updates-list">
              <li><strong>Environmental:</strong> How does the business impact the planet (e.g., reducing waste, saving energy)?</li>
              <li><strong>Social:</strong> How does the business treat employees, customers, and communities?</li>
              <li><strong>Governance:</strong> Are decisions ethical, transparent, and inclusive?</li>
            </ul>
          </div>

          {/* CSR Section */}
          <div className="updates-section">
            <h2 className="section-title">What is CSR?</h2>
            <p className="section-description">
              CSR means Corporate Social Responsibility. It’s about businesses taking responsibility for their societal and environmental impact.
            </p>
            <p className="section-details">
              Companies practicing CSR often focus on community support, reducing pollution, and creating programs for social or environmental causes.
            </p>
          </div>

          {/* Importance Section */}
          <div className="updates-section">
            <h2 className="section-title">Why Do ESG and CSR Matter?</h2>
            <p className="section-description">
              Both ESG and CSR are about creating a sustainable and equitable future. Businesses that adopt these principles:
            </p>
            <ul className="updates-list">
              <li>Reduce their negative environmental impact.</li>
              <li>Build trust with customers by showing care beyond profits.</li>
              <li>Attract investors who value sustainability and ethics.</li>
            </ul>
          </div>

          {/* Actionable Tips */}
          <div className="updates-section">
            <h2 className="section-title">How to Implement ESG and CSR?</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h3>For Businesses</h3>
                <ul>
                  <li>Adopt green practices like renewable energy and recycling.</li>
                  <li>Support communities by donating to local causes or sponsoring events.</li>
                  <li>Be transparent with goals and progress.</li>
                  <li>Engage employees in sustainability efforts.</li>
                </ul>
              </div>
              <div className="tip-card">
                <h3>For Individuals</h3>
                <ul>
                  <li>Support ethical brands that value sustainability.</li>
                  <li>Adopt green habits like reducing, reusing, and recycling.</li>
                  <li>Advocate for change in your workplace or community.</li>
                  <li>Educate yourself and others about sustainability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <h2>A Greener Future Is Possible</h2>
            <p>
              By embracing ESG and CSR, we can protect the environment, build stronger communities, and create a sustainable future for generations to come.
            </p>
            <Link to="/contact" className="cta-button">Get Started Today</Link>
          </div>
        </div>
      </section>
   </>
  );
};

export default EcoNjiaUpdates;
