import { useState } from "react";

import Window from "./components/Window";

// JSON
import projects from "./projects.json";

function App() {
    // useStates
    const [selectedProj, setSelectedProj] = useState(0);
    const [tileMode, setTileMode] = useState("projects");

    console.log(tileMode);

    return (
        <div className="main">
            <Window idProp={"title"} title={"this-is-my-name"} />
            <Window idProp={"about"} />
            <Window
                idProp={"projects"}
                projects={projects}
                selectedProj={selectedProj}
                setSelectedProj={setSelectedProj}
            />
            <Window
                idProp={"project"}
                projects={projects}
                selectedProj={selectedProj}
                setSelectedProj={setSelectedProj}
                title={projects[selectedProj].moniker}
            />
            <Window idProp={"links"} hideButtons={true} />
            <Window
                idProp={"tile"}
                projects={projects}
                selectedProj={selectedProj}
                tileMode={tileMode}
                setTileMode={setTileMode}
            />
            <Window
                idProp={"buttons"}
                hideButtons={true}
                title={"actions"}
                tileMode={tileMode}
                setTileMode={setTileMode}
            />
            <div className="hider left"></div>
            <div className="hider right"></div>
        </div>
    );
}

export default App;
