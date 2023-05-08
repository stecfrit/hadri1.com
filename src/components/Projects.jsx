import React from "react";

function Projects({
  projects: projects,
  selectedProj: selectedProj,
  setSelectedProj: setSelectedProj,
}) {
  return (
    <>
      <h2>projects</h2>
      {projects.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
        </div>
      ))}
    </>
  );
}

export default Projects;
