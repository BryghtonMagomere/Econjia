import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Blog.css";

const Blog = () => {
  const blogSections = [
    {
      title: "Sustainability Tips",
      description: "Discover tips for sustainable living, from reducing waste to saving energy.",
      image: "https://th.bing.com/th/id/R.60e31a90d2c2498e7416d7e3e1056907?rik=Y3q8nIt7i09L9w&pid=ImgRaw&r=0",
      socialLinks: {
        facebook: "https://facebook.com/sustainability",
        instagram: "https://instagram.com/sustainability",
        youtube: "https://youtube.com/sustainability",
      },
      articles: [
        {
          title: "5 Simple Ways to Reduce Plastic Waste",
          content: "Learn how small changes in your daily life can drastically reduce your plastic consumption.",
          link: "https://recyclenation.com/2017/11/5-simple-ways-to-reduce-plastic-waste/#:~:text=5%20Simple%20Ways%20to%20Reduce%20Plastic%20Waste%201,Recycle%20your%20plastics.%20...%205%20Speak%20out.%20",
        },
        {
          title: "Energy-Saving Tips for Your Home",
          content: "Discover energy-efficient habits and tools to lower your bills and your carbon footprint.",
          link: "https://www.bhg.com/home-improvement/green-living/energy-efficient/home-energy-savings/",
        },
      ],
    },
    {
      title: "EcoNjia Updates",
      description: "Get the latest updates on our projects, events, and initiatives.",
      image: "https://th.bing.com/th/id/R.5b1c86760c4ecd29ceff11321a5f6d77?rik=zgn4Q%2fRlnIeuBw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1752519.jpg&ehk=BJPBuvYsb5r2%2fjyEmqpZkaAuBYITsemQyHsT%2bOWFzEY%3d&risl=&pid=ImgRaw&r=0",
      socialLinks: {
        facebook: "https://facebook.com/econjia",
        instagram: "https://instagram.com/econjia",
        youtube: "https://youtube.com/econjia",
      },
      articles: [
        {
          title: "New Recycling Initiative Launch",
          content: "We’ve partnered with local schools to launch a new recycling program.",
          link: "https://example.com/econjia/recycling-initiative",
        },
        {
          title: "Upcoming Sustainability Workshop",
          content: "Join our hands-on workshop to learn practical sustainability skills.",
          link: "https://example.com/econjia/workshop",
        },
      ],
    },
    {
      title: "Client Stories",
      description: "Inspiring stories of businesses and communities embracing sustainability.",
      image: "https://ejqczs4xhji.exactdn.com/wp-content/uploads/2023/01/Magazine-1024-x-768-Lifestyle-Blogs-in-Darwin-Australia.jpg?strip=all&lossy=1&ssl=1",
      socialLinks: {
        facebook: "https://facebook.com/clientstories",
        instagram: "https://instagram.com/clientstories",
        youtube: "https://youtube.com/clientstories",
      },
      articles: [
        {
          title: "How GreenTech Transformed Their Business",
          content: "GreenTech shares their journey towards a greener future.",
          link: "https://example.com/client-stories/greentech",
        },
        {
          title: "Community Gardening Project Brings Hope",
          content: "This urban gardening project has brought fresh produce and hope to underserved communities.",
          link: "https://example.com/client-stories/community-garden",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="blog">
        <h2 className="blog-title">Our Blog</h2>
        <div className="blog-container">
          {blogSections.map((section, index) => (
            <div key={index} className="blog-card">
              <img src={section.image} alt={section.title} className="blog-card-image" />
              <div className="blog-card-content">
                <h3 className="blog-card-title">{section.title}</h3>
                <p className="blog-card-description">{section.description}</p>
                <div className="blog-card-articles">
                  {section.articles.map((article, i) => (
                    <div key={i} className="blog-article">
                      <h4>{article.title}</h4>
                      <p>{article.content}</p>
                      <a href={article.link} target="_blank" rel="noopener noreferrer" className="blog-article-link">
                        Read More
                      </a>
                    </div>
                  ))}
                </div>
                <div className="blog-card-links">
                  <a href={section.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={section.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={section.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
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
