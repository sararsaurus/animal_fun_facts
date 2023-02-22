import React from "react";
import { Animals } from "./Animals";

function App() {
  const displayFactAndColor = (e) => {
    const selectedAnimal = e.target.alt;
    const animalInfo = Animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;

    if (selectedAnimal == "dolphin") {
      document.body.style.backgroundColor = "purple";
    } else if (selectedAnimal == "lobster") {
      document.getElementById("party").style.backgroundColor = "orange";
    } else {
      document.body.style.backgroundColor = "initial";
      document.getElementById("party").style.backgroundColor = "initial";
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
