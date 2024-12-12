import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Logo from "./../assets/logo.jpg";
import { Logotranspaent } from "../utils/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo-holder">
          <img
            src={Logotranspaent} 
            alt="EcoNjia Logo"
            className="logo"
          />
        </div>
        <Link to="/" className="brand-name">
          Eco-Njia Consultancy
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
