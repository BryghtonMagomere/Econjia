import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SustainableProductsPage.css';
import Layout from '../components/layout';

const SustainableProducts = () => {
  return (
    <>
      <div className="sustainable-products-page">
        {/* Header Section */}
        <header className="header">
          <h1>Sustainable Products</h1>
          <p className="intro-text">
            As the world becomes more environmentally conscious, the demand for sustainable products has skyrocketed. From reusable bags to eco-friendly cleaning supplies, these products are shaping the future of consumption and helping reduce waste. Businesses and consumers alike are making choices that not only serve their immediate needs but also protect the planet.
          </p>
        </header>

        {/* The Rise of Sustainable Consumer Products Section */}
        <section className="section">
          <h2>The Rise of Sustainable Consumer Products</h2>
          <p>
            Sustainable products are designed with the environment in mind. They minimize waste, reduce pollution, and are often made from renewable or recycled materials. This shift in consumer behavior is fueled by:
          </p>
          <ul>
            <li><strong>Innovation:</strong> Companies are finding new ways to create eco-friendly alternatives to everyday products.</li>
            <li><strong>Demand:</strong> Shoppers are willing to pay more for products that align with their values.</li>
          </ul>
        </section>

        {/* How Sustainable Products Reduce Waste Section */}
        <section className="section">
          <h2>How Sustainable Products Reduce Waste</h2>
          <p>
            Sustainable products tackle waste at its source. For example:
          </p>
          <ul>
            <li><strong>Reusable Items:</strong> Products like water bottles, shopping bags, and straws replace single-use plastics.</li>
            <li><strong>Compostable Materials:</strong> Packaging made from biodegradable materials reduces landfill waste.</li>
            <li><strong>Upcycled Products:</strong> Items created from recycled or repurposed materials give new life to old resources.</li>
          </ul>
        </section>

        {/* Eco-Njia’s Sustainable Offerings Section */}
        <section className="section">
          <h2>Eco-Njia’s Sustainable Offerings</h2>
          <p>
            At Eco-Njia Consultancy, we are proud to contribute to this green revolution by offering sustainable products that align with our mission to build a greener, more equitable future. Our product line includes:
          </p>
          
          {/* Products List with Images */}
          <div className="products-grid">
            <div className="product-card">
              <h3>Sustainably Sourced Tea</h3>
              <p>Our tea blends come from ethical farms that prioritize environmental and social responsibility.</p>
            </div>
            <div className="product-card">
              <h3>Bamboo Toothbrushes and Earbuds</h3>
              <p>Bamboo is a renewable resource, making these products an excellent alternative to plastic ones.</p>
            </div>
            <div className="product-card">
              <h3>Journals with Sustainable Living Prompts</h3>
              <p>These journals inspire users to adopt greener habits and make sustainable living part of their daily routine.</p>
            </div>
          </div>
        </section>

        {/* Environmental Benefits Section */}
        <section className="section">
          <h2>Environmental Benefits</h2>
          <ul>
            <li><strong>Reduction in Plastic Waste:</strong> Bamboo products replace plastic items that take centuries to decompose.</li>
            <li><strong>Support for Ethical Practices:</strong> By choosing sustainably sourced tea, consumers support farmers who care for the land and their communities.</li>
            <li><strong>Awareness and Action:</strong> Our journals encourage users to live more sustainably.</li>
          </ul>
        </section>

        {/* Emerging Trends in Sustainability Section */}
        <section className="section">
          <h2>Emerging Trends in Sustainability</h2>
          <ul>
            <li><strong>Circular Economies:</strong> Clothing brands offer repair services and second-hand options.</li>
            <li><strong>Zero-Waste Lifestyles:</strong> People are striving to produce no waste at all by composting and avoiding disposable packaging.</li>
            <li><strong>Eco-Friendly Tech:</strong> Solar-powered gadgets and biodegradable electronics are gaining popularity.</li>
            <li><strong>Local Sourcing:</strong> Consumers are supporting local businesses to reduce the carbon footprint of transportation.</li>
          </ul>
        </section>

        {/* The Future Is Green Section */}
        <section className="cta-section">
          <h2>The Future Is Green</h2>
          <p>
            The rise of sustainable products signals a shift toward more responsible consumption. By choosing eco-friendly alternatives, consumers are playing a key role in reducing waste and conserving resources. Businesses like Eco-Njia are leading the way, proving that sustainability is not only achievable but also beneficial for everyone.
          </p>
          <p>
            Let’s embrace sustainable products and build a brighter, greener future—one choice at a time.
          </p>
          {/* CTA Button */}
          <a 
  href="https://api.whatsapp.com/send?phone=254796354505&text=Hello%20Eco-Njia%2C%20I%20would%20like%20to%20order%20your%20products!" 
  className="cta-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Order Our Products
</a>
        </section>
      </div>
    </>
  );
};

export default SustainableProducts;
