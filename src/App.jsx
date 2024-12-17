import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import EcoNjiaUpdates from './pages/EcoNjiaUpdates';
import Blog from './pages/Blog';
import SustainabilityTips from './pages/SustainabilityTips';
import ScienceCommunication from './pages/ScienceCommunication';
import BlogDetails from './pages/blogDetails';
import SustainableProducts from './pages/SustainableProductsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:name" element={<BlogDetails />} />
        <Route path="/projects" element={<Projects />} />  
        <Route path="/sciencecommunication" element={<ScienceCommunication />} />
        <Route path="/econjiaupdates" element={<EcoNjiaUpdates />} />
        <Route path="/sustainabilityTips" element={<SustainabilityTips />} />
        <Route path="/sustainableproducts" element={<SustainableProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
