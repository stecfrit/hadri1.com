import { useState } from "react";

// Components
import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Tile from "./components/Tile";
import Links from "./components/Links";
import Buttons from "./components/Buttons";

// JSON
import projects from "./projects.json";

function App() {
  // useStates
  const [selectedProj, setSelectedProj] = useState(0);

  return (
    <div id="main">
      <Title />
      <About />
      <Projects
        projects={projects}
        selectedProj={selectedProj}
        setSelectedProj={setSelectedProj}
      />
      <Project
        projects={projects}
        selectedProj={selectedProj}
        setSelectedProj={setSelectedProj}
      />
      <Links />
      <Tile />
      <Buttons />
    </div>
  );
}

export default App;
