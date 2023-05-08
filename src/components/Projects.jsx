import React from "react";

function Projects({
  projects: projects,
  selectedProj: selectedProj,
  setSelectedProj: setSelectedProj,
}) {
  const handleProjClick = (e) => {
    setSelectedProj(e.currentTarget.dataset.id);
  };

  return (
    <>
      <h2>projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          data-id={index}
          onClick={(e) => {
            handleProjClick(e);
          }}
        >
          <p>-&gt; {project.name}</p>
        </div>
      ))}
    </>
  );
}

export default Projects;
