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
      <p>{projects[selectedProj].link}</p>
    </>
  );
}

export default Project;
