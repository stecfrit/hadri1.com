import React from "react";

function Tile({ projects, selectedProj, tileMode, setTileMode }) {
    console.log(tileMode);
    switch (tileMode) {
        case "hello":
            return (
                <>
                    <h2 className="hello">hello world!</h2>
                </>
            );
        case "projects":
            return (
                <>
                    <img
                        className="project-image"
                        src={
                            "./projects/" + projects[selectedProj].preview_image
                        }
                        alt="project image"
                    />
                </>
            );
        default:
            return;
    }
}

export default Tile;
