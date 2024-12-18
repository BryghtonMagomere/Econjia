import React from "react";
import Layout from "../components/layout";
import Ecg from "./../assets/ECG.jpg";
import GreenWorld from "./../assets/GREENWORLD.jpg";
import { Communication, Products } from "../utils/images";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

const Blog = () => {
  const blogArticles = [
    {
      title: "What on God’s Green Earth is Sustainability?",
      category: "Sustainability Tips",
      content: `
        Discover actionable steps for sustainable living, from reducing plastic use to composting.
      `,
      link: "/SustainabilityTips",
      image: Ecg,
    },
    {
      title: "The Role of ESG and CSR in Building a Greener Future",
      category: "EcoNjia Updates",
      content: `
        Understand how businesses can embrace ESG (Environmental, Social, Governance) and CSR to create positive impacts.
      `,
      link: "/EcoNjiaUpdates",
      image: GreenWorld,
    },
    {
      title: "Is Science the Solution?",
      category: "Science Communication",
      content: `
        Learn how effective science communication bridges the gap between research and action.
      `,
      link: "/sciencecommunication",
      image: Communication,
    },
    {
      title: "The Future of Sustainable Products",
      category: "Sustainable Products",
      content: `
        Explore trends in eco-friendly consumer products and their role in reducing waste.
      `,
      link: "/sustainableproducts",
      image: Products,
    },
  ];

  return (
    <Layout>
      <section className="blog">
        <div className="blog-header">
          <h1 className="blog-title">Eco-Njia Blog</h1>
          <p className="blog-intro">
            Dive into our latest articles, tips, and updates for a sustainable future. Explore our categories below!
          </p>
        </div>

        <div className="blog-container">
          {blogArticles.map((article, index) => (
            <div key={index} className="blog-card">
              <img src={article.image} alt={article.title} className="blog-card-image" />
              <div className="blog-card-content">
                <p className="blog-card-category">{article.category}</p>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-description">{article.content.trim()}</p>
                <Link to={article.link} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Blog Section */}
        <div className="personal-blog-section">
          <p className="personal-blog-text">
            For a glimpse into my personal musings beyond sustainability and work, check out my lifestyle blog,{' '}
            <a href="https://rustyfingers33.home.blog/" target="_blank" rel="noopener noreferrer">
              https://rustyfingers33.home.blog/
            </a>. It’s where I share reflections on everyday life, passions, and the little moments that make life meaningful. 
            If you enjoy a mix of candid stories and lifestyle insights, I’d love for you to follow along!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
