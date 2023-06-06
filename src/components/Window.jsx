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
    idProp,
    projects,
    selectedProj,
    setSelectedProj,
    hideButtons,
    title,
    tileMode,
    setTileMode,
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
            content = (
                <Tile
                    projects={projects}
                    selectedProj={selectedProj}
                    tileMode={tileMode}
                    setTileMode={setTileMode}
                />
            );
            break;
        case "buttons":
            content = <Buttons tileMode={tileMode} setTileMode={setTileMode} />;
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
                <button
                    className="close"
                    onClick={() => {
                        close(idProp);
                    }}
                ></button>
                <button
                    className="minimize"
                    onClick={() => {
                        minimize(idProp);
                    }}
                ></button>
                <button className="expand"></button>
            </div>
        );
    }

    const minimize = (idProp) => {
        document.getElementById(idProp).classList.toggle("minimized");
    };
    const close = (idProp) => {
        document.getElementById(idProp).classList.toggle("closed");
    };
    const expand = (idProp) => {
        document.getElementById(idProp).classList.toggle("expanded");
    };

    // Content
    return (
        <div id={idProp} className="window">
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
