import React from "react";

function Projects({
  projects: projects,
  selectedProj: selectedProj,
  setSelectedProj: setSelectedProj,
}) {
  const handleProjClick = (e) => {
    setSelectedProj(Number(e.currentTarget.dataset.id));
  };

  console.log("selectedProj: ", selectedProj);

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
          <p className={index === selectedProj ? "selected" : ""}>
            <span className="project-name">-&gt; {project.name}{project.new && <span className="new-tag"></span>}</span>
            <span className="tech-container">
              {projects[index].tech.map((thing, index) => (
                <span className="tech" key={index}>
                  {thing}
                </span>
              ))}
            </span>
          </p>
        </div>
      ))}
    </>
  );
}

export default Projects;
