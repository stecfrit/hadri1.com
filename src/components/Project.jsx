import React from "react";

function Project({
  projects: projects,
  selectedProj: selectedProj,
  setSelectedProj: setSelectedProj,
}) {
  return (
    <>
      <h2>{projects[selectedProj].name}</h2>
      <p>{projects[selectedProj].description}</p>
      <a href={projects[selectedProj].link} target="_blank">{projects[selectedProj].link}</a>
    </>
  );
}

export default Project;
