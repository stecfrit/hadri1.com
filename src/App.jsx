import { useState } from "react";

import Window from "./components/Window";

// JSON
import projects from "./projects.json";

function App() {
    // useStates
    const [selectedProj, setSelectedProj] = useState(0);
    const [tileMode, setTileMode] = useState("projects");

    console.log(tileMode);

    // return (
    //   <div id="main">
    //     <Title />
    //     <About />
    //     <Projects
    //       projects={projects}
    //       selectedProj={selectedProj}
    //       setSelectedProj={setSelectedProj}
    //     />
    //     <Project
    //       projects={projects}
    //       selectedProj={selectedProj}
    //       setSelectedProj={setSelectedProj}
    //     />
    //     <Links />
    //     <Tile />
    //     <Buttons />
    //   </div>
    // );
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
            <Window idProp={"buttons"} hideButtons={true} title={"actions"} />
            <div className="hider left"></div>
            <div className="hider right"></div>
        </div>
    );
}

export default App;
