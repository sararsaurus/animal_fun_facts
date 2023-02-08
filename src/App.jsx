import React from "react";
import { Animals } from "./Animals";

function App() {
  const title = "";

  const images = [];
  for (const animal in Animals) {
    images.push(
      <img key={animal} className="animal" alt={animal} src={Animals[animal].image} ariaLabel={animal} role="button" />
    );
  }

  const animalFacts = (
    <div>
      <h1 className="title">{title === "" ? "Click an animal for a fun fact" : title}</h1>
      <div className="background">
        <div className="animals">{images}</div>
      </div>
    </div>
  );

  return <div>{animalFacts}</div>;
}

export default App;
