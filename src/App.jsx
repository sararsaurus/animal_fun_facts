import React from "react";
import { Animals } from "./Animals";

function App() {
  const party = document.getElementById("party");

  const reset = () => {
    document.getElementById("title").innerHTML = "Click on an animal!";
    document.body.style.background = "initial";
    party.style.background = "initial";
    party.style.transform = "scale(1)";
    party.style.transition = "transform 0.25s ease";
    document.getElementById("fact").innerHTML = "";
  };

  const displayFactAndColor = (e) => {
    // Get a random fact
    const selectedAnimal = e.target.alt;
    const animalInfo = Animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;
    // Bells and whistles
    if (selectedAnimal == "dolphin") {
      document.getElementById("title").innerHTML = "DOLPHIN!!!!";
      document.body.style.backgroundImage = "url('src/assets/ocean1.jpeg')";
      party.style.transform = "scale(1)";
      party.style.transition = "transform 0.25s ease";
    } else if (selectedAnimal == "lobster") {
      document.getElementById("title").innerHTML = "LOBSTER!!!!";
      party.style.background = "orange";
      party.style.transform = "scale(.5)";
      party.style.transition = "transform 0.25s ease";
    } else {
      document.getElementById("title").innerHTML = "STARFISH!!!!";
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
      <h1 className="title" id="title">
        {title || "Click on an animal!"}
      </h1>
      <div className="background" id="background">
        <p className="text" id="fact"></p>
        <div className="animals" id="party">
          {images}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {animalFacts}{" "}
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
