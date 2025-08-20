import projects from "../projects";
import React from "react";

const ProjectCards = () => {
 return (
    <>
    <h2 className="project-heading">Projects</h2>  
    <div className="projects-container" id="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub
            </a>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-link">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProjectCards;
