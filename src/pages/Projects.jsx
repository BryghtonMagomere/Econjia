import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Projects.css";
import Heroimage1 from "./../assets/kids.jpg";
import Heroimage2 from "./../assets/kids2.jpg";
import Heroimage3 from "./../assets/mtaani.jpg";
import Heroimage5 from "./../assets/mtaani3.jpg";
import Heroimage6 from "./../assets/mtaani4.jpg";
import Layout from "../components/layout";

const projectsData = [
  {
    title: "Kids Educational Workshops on Sustainability",
    description: "Empowering children with knowledge about sustainability practices.",
    image: Heroimage1,
  },
  {
    title: "Workshops Empowering Students and Professionals",
    description: "Workshops empowering students and professionals with sustainable practices.",
    image: Heroimage2,
  },
  {
    title: "Community Waste Management Program",
    description: "Collaborating with communities to improve recycling rates.",
    image: Heroimage6,
  },
  {
    title: "Collaborative Waste Management Initiatives",
    description: "Working with communities to enhance sustainability through recycling.",
    image: Heroimage3,
  },
  {
    title: "Plastic Recycling Campaign",
    description: "Advocating for effective recycling techniques and upcycling.",
    image: Heroimage5,
  },
];

const Projects = () => {
  return (
   <Layout>
    <section className="projects">
        <h1 className="projects-title">Our Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
   </Layout>
  );
};

export default Projects;
