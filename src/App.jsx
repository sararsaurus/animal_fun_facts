import React from "react";
import { Animals } from "./Animals";

function App() {
  const displayFact = (e) => {
    const selectedAnimal = e.target.alt;
    const animalInfo = Animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;
  };

  const changeOverallBackgroundColor = (e) => {
    const selectedAnimal = e.target.alt;

    if (selectedAnimal == "dolphin") {
      document.body.style.backgroundColor = "purple";
    } else {
      document.body.style.backgroundColor = "initial";
    }
  };

  const changeImage = (e) => {
    const selectedAnimal = e.target.alt;

    if (selectedAnimal == "lobster") {
      document.getElementById("party").style.backgroundColor = "orange";
    } else {
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
        // onClick={displayFact}
        // onClick={changeOverallBackgroundColor}
        onClick={changeImage}
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
