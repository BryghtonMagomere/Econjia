import React from "react";
import Layout from "../components/layout";
import Heroimage1 from "./../assets/kids.jpg";
import Heroimage2 from "./../assets/kids2.jpg";
import Heroimage6 from "./../assets/mtaani4.jpg";
import "../styles/Projects.css";

const projectsData = [
  {
    title: "Kids' Educational Workshops on Sustainability",
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
];

const Projects = () => {
  return (
    <Layout>
      <section className="projects">
        <h1 className="projects-title">Our Projects</h1>
        <p className="projects-intro">
          Explore our initiatives aimed at creating a sustainable and eco-friendly future. From educating the next generation to collaborating with communities, our projects inspire positive change.
        </p>
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
