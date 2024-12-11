import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <section className="blog">
        <h2 className="blog-title">Our Blog</h2>
        <iframe
          src="https://rustyfingers33.home.blog/"
          className="blog-iframe"
          title="Rustyfingers Blog"
          frameBorder="0"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
