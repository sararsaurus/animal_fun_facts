import React from "react";
import { Animals } from "./Animals";

function App() {
  const title = "";
  const animalFacts = <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>;

  return <div>{animalFacts}</div>;
}

export default App;
