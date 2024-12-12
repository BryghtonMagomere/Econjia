import React from "react";
import "../styles/Hero.css";
import Heroimage from "./../assets/hero.avif";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={Heroimage} alt="Sustainability" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Eco-Njia Consultancy</h1>
            <p>
              EcoNjia Consultancy is your partner in creating a sustainable future. We provide  tailored solutions in sustainability consulting, science communication, training, waste recycling, and eco-friendly product design.
            </p>
            <p>
              Our holistic approach integrates sustainable practices into daily life and business operations, fostering positive environmental and societal impact.
            </p>
            <button className="hero-button" onClick={()=> navigate("/about")}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
