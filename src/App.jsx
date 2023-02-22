import React from "react";
import { Animals } from "./Animals";

function App() {
  const displayFactAndColor = (e) => {
    const selectedAnimal = e.target.alt;
    const animalInfo = Animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;

    const lobster = document.getElementById("party");

    if (selectedAnimal == "dolphin") {
      document.body.style.backgroundColor = "purple";
      lobster.style.transform = "scale(1)";
      lobster.style.transition = "transform 0.25s ease";
    } else if (selectedAnimal == "lobster") {
      lobster.style.backgroundColor = "orange";
      lobster.style.transform = "scale(.5)";
      lobster.style.transition = "transform 0.25s ease";
    } else {
      document.body.style.backgroundColor = "initial";
      lobster.style.backgroundColor = "initial";
      lobster.style.transform = "scale(1)";
      lobster.style.transition = "transform 0.25s ease";
    }
  };

  const title = "";

  const images = [];
  for (const animal in Animals) {
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={Animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={displayFactAndColor}
      />
    );
  }

  const animalFacts = (
    <div>
      <h1 className="title">{title || "Click on an animal!"}</h1>
      <div className="background">
        <p className="text" id="fact"></p>
        <div className="animals" id="party">
          {images}
        </div>
      </div>
    </div>
  );

  return <div>{animalFacts}</div>;
}

export default App;
