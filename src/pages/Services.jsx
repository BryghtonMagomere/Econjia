import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Services.css";
import Layout from "../components/layout";

const servicesData = [
  {
    title: "Sustainability, ESG, and CSR Consulting",
    description:
      "Transforming strategies for a sustainable future by embedding sustainability, integrating ESG, and designing impactful CSR programs.",
    image: "/images/sustainability.jpg", // Replace with a valid local or hosted image
    details: [
      "Sustainability Strategies: Tailored frameworks aligned with SDGs and ESG reporting guidelines (e.g., GRI, SASB).",
      "ESG Integration: Risk assessment, KPI development, and crafting comprehensive ESG strategies.",
      "CSR Program Design: Creating impactful initiatives to strengthen community ties.",
      "Sustainability Reporting: Developing reports that showcase progress and commitment.",
    ],
  },
  {
    title: "Science Communication",
    description:
      "Simplifying science and amplifying impact by bridging the gap between sustainability research and public understanding.",
    image: "/images/science-communication.jpg", // Replace with a valid local or hosted image
    details: [
      "Clear Communication: Translating complex data into engaging formats.",
      "Educational Content Development: Inspiring learning through blogs, infographics, and workshops.",
      "Public Engagement: Promoting sustainable practices via webinars and events.",
    ],
  },
  {
    title: "Sustainability Training",
    description:
      "Empowering individuals and businesses to adopt greener practices through interactive and actionable training programs.",
    image: "/images/sustainability-training.jpg", // Replace with a valid local or hosted image
    details: [
      "Customized Workshops: Addressing carbon footprint reduction and circular economy principles.",
      "Capacity-Building: Enhancing sustainability literacy of employees.",
      "Train-the-Trainer Programs: Equipping leaders with the tools to educate others.",
    ],
  },
  {
    title: "Waste Recycling",
    description:
      "Turning waste into opportunity by promoting innovative waste management solutions and advocating for circular economies.",
    image: "https://img.freepik.com/free-photo/recycle-symbol-surrounded-with-waste-items-brown-wooden-textured-background_23-2147817222.jpg?t=st=1733519739~exp=1733523339~hmac=99cc6c78bbabc9debc58643efb2c66a0d076dddec65b2025a950652ec1b43682&w=1800", // Replace with a valid local or hosted image
    details: [
      "Recycling Partnerships: Offering efficient recycling solutions.",
      "Waste Education: Educating on waste segregation and upcycling.",
      "Circular Economy Advocacy: Helping organizations transition to circular models.",
    ],
  },
];



const Services = () => {
  return (
   <Layout>
    <section className="services">
        <h1 className="services-title">Our Services</h1>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
   </Layout>
  );
};

export default Services;
