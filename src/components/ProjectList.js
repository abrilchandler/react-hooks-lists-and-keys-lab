import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {ProjectList = projects.map((project => <p key={project.id}>{project.name}</p>))/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
