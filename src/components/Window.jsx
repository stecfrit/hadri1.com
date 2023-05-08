import React from "react";

// Components
import Title from "./Title";
import About from "./About";
import Projects from "./Projects";
import Project from "./Project";
import Tile from "./Tile";
import Links from "./Links";
import Buttons from "./Buttons";

function Window({
  idProp: idProp,
  projects: projects,
  selectedProj: selectedProj,
  setSelectedProj: setSelectedProj,
  hideButtons: hideButtons,
  title: title,
}) {
  // Which Window to open
  let content;
  switch (idProp) {
    case "title":
      content = <Title />;
      break;
    case "about":
      content = <About />;
      break;
    case "projects":
      content = (
        <Projects
          projects={projects}
          selectedProj={selectedProj}
          setSelectedProj={setSelectedProj}
        />
      );
      break;
    case "project":
      content = (
        <Project
          projects={projects}
          selectedProj={selectedProj}
          setSelectedProj={setSelectedProj}
        />
      );
      break;
    case "tile":
      content = <Tile />;
      break;
    case "buttons":
      content = <Buttons />;
      break;
    case "links":
      content = <Links />;
      break;
  }

  // Hide or show the window buttons
  let buttons;
  if (!hideButtons) {
    buttons = (
      <div className="window-buttons">
        <button className="close"></button>
        <button className="minimize"></button>
        <button className="expand"></button>
      </div>
    );
  }

  // Content
  return (
    <div id={idProp}>
      <div className="container">
        <div className="header">
          <h3>{title ? title : idProp}.exe</h3>
          {!hideButtons ? buttons : ""}
        </div>
        <div className="body">{content}</div>
      </div>
    </div>
  );
}

export default Window;
