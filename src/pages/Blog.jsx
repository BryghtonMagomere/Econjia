import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Blog.css";
import Layout from "../components/layout";
import { Truncate } from "../utils/trancate";
import Comm from './../assets/COMM.jpg'
import Ecg from './../assets/ECG.jpg'
import GreenWorld from './../assets/GREENWORLD.jpg'
import Product from './../assets/PRODUCT.jpg'
import { Communication, Products } from "../utils/images";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogArticles = [
    {
      title: "What on God’s Green Earth is Sustainability?",
      category: "Sustainability Tips",
      content: `
        Discover actionable steps for sustainable living, from reducing plastic use to composting.
        Sustainability begins with small, intentional daily choices that create a ripple effect.
      `,
      link: "/SustainabilityTips",
      image: Ecg,
    },
    {
      title: "The Role of ESG and CSR in Building a Greener Future",
      category: "EcoNjia Updates",
      content: `
        Understand how businesses can embrace ESG (Environmental, Social, Governance) and CSR (Corporate Social Responsibility)
        to create positive environmental and social impacts.
      `,
      link: "/EcoNjiaUpdates",
      image: GreenWorld,
    },
    {
      title: "Is Science the Solution?",
      category: "Science Communication",
      content: `
        Learn how effective science communication bridges the gap between research and action.
        Eco-Njia's initiatives empower individuals and communities to act on sustainable practices.
      `,
      link: "/sciencecommunication",
      image: Communication,
    },
    {
      title: "The Future of Sustainable Products",
      category: "Sustainable Products",
      content: `
        Explore emerging trends in eco-friendly consumer products and their role in reducing waste.
        Eco-Njia offers bamboo products, sustainable tea, and journals for mindful living.
      `,
      link: "/sustainableproducts",
      image: Products,
    },
  ];

  return (
    
    <Layout>
       <section className="blog">
        <h1 className="blog-title">Eco-Njia Blog</h1>
        <p className="blog-intro">
          Dive into our latest articles, tips, and updates for a sustainable future. Explore our categories below!
        </p>

        <div className="blog-container">
          {blogArticles.map((article, index) => (
            <div key={index} className="blog-card">
              <img src={article.image} alt={article.title} className="blog-card-image" />
              <div className="blog-card-content">
                <div style={{ height:"75px"}}>
                <h2 className="blog-card-title">{article.title}</h2>
                </div>
             
                <p className="blog-card-category">{article.category}</p>
                <p className="blog-card-description">{Truncate(article.content,100)}</p>
                <Link to={`/blog/${article.title.replace(/\s+/g, '-').toLowerCase()}`}  className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="iframe-section">
          <h2 className="iframe-title">Rustyfingers Blog</h2>
          <iframe
            src="https://rustyfingers33.home.blog/"
            className="blog-iframe"
            title="Rustyfingers Blog"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
