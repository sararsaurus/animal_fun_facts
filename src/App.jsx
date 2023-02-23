import React from "react";
import { Animals } from "./Animals";

function App() {
  const displayFactAndColor = (e) => {
    const selectedAnimal = e.target.alt;
    const animalInfo = Animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    const funFact = animalInfo.facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;

    const images = document.getElementById("party");

    if (selectedAnimal == "dolphin") {
      document.getElementById("title").innerHTML = "DOLPHIN!!!!";
      document.body.style.backgroundColor = "purple";
      images.style.transform = "scale(1)";
      images.style.transition = "transform 0.25s ease";
      document.getElementById("ocean").style.visibility = "hidden";
    } else if (selectedAnimal == "lobster") {
      document.getElementById("title").innerHTML = "LOBSTER!!!!";
      images.style.backgroundColor = "orange";
      images.style.transform = "scale(.5)";
      images.style.transition = "transform 0.25s ease";
      document.getElementById("ocean").style.visibility = "hidden";
    } else {
      document.getElementById("title").innerHTML = "STARFISH!!!!";
      document.body.style.backgroundColor = "initial";
      images.style.backgroundColor = "initial";
      images.style.transform = "scale(1)";
      images.style.transition = "transform 0.25s ease";
      document.body.style = "#f3f3f3 url('public/octopus.jpeg') no-repeat right bottom";
      document.getElementById("ocean").style.visibility = "visible";
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
      {animalFacts}
      <img id="ocean" src="src/assets/ocean1.jpeg" alt="ocean" />
    </div>
  );
}

export default App;
