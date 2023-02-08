import React from "react";
import { Animals } from "./Animals";

function App() {
  const title = "";

  const background = <img className="background" src="src/assets/1166781.webp" alt="ocean" />;
  const animalFacts = (
    <div>
      <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
      {background}
    </div>
  );

  return <div>{animalFacts}</div>;
}

export default App;
