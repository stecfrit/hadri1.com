import React from "react";

function Projects({
  projects: projects,
  selectedProj: selectedProj,
  setSelectedProj: setSelectedProj,
}) {
  return (
    <div id="projects">
      {projects.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Projects;
