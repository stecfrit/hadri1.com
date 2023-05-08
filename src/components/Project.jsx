import React from "react";

function Project({
  projects: projects,
  selectedProj: selectedProj,
  setSelectedProj: setSelectedProj,
}) {
  return (
    <>
      <h2>{projects[selectedProj].name} </h2>
      <p>{projects[selectedProj].description}</p>
      {projects[selectedProj].tech.map((thing, index) => (
        <p key={index}>-&gt; {thing}</p>
      ))}
      <a href={projects[selectedProj].link} target="_blank">
        link: {projects[selectedProj].link}
      </a>
    </>
  );
}

export default Project;
