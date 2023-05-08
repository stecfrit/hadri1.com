import { useState } from "react";

import Window from "./components/Window";

// JSON
import projects from "./projects.json";

function App() {
  // useStates
  const [selectedProj, setSelectedProj] = useState(0);

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
    <div id="main">
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
      <Window idProp={"tile"} />
      <Window idProp={"buttons"} hideButtons={true} title={"actions"} />
    </div>
  );
}

export default App;
