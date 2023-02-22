import React from "react";
import { Animals } from "./Animals";

function App() {
  // console.log(Animals);
  // Animals is an object
  const displayFact = (e) => {
    // console.log(e.target);
    // visually checking what we're doing
    const selectedAnimal = e.target.alt;
    // read more and fill in about e.target
    const animalInfo = Animals[selectedAnimal];
    // access data.config
    // console.log(animalInfo);
    // practice copying an object in the console. This console.log gave us animalInfo and then we can right-click and "copy object" and then we could experiment with it in a console. We set it to a variable first and then essentially can make it work like the rails console.
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
    // pulling a random fact
    const funFact = animalInfo.facts[optionIndex];
    // picking fact that was grabbed on line 14
    document.getElementById("fact").innerHTML = funFact;
    // console.log(document);
    // gives us the DOM -- it is finding something in the DOM that has the id of "fact"
    // .innerHTML is adding the html to be funFact, which needs to be randomly generated
  };

  const changeColor = (e) => {
    const selectedAnimal = e.target.alt;

    if (selectedAnimal == "dolphin") {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "initial";
    }
  };

  const title = "";

  const images = [];
  for (const animal in Animals) {
    // try to refactor as .map
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={Animals[animal].image}
        aria-label={animal}
        role="button"
        // onClick={displayFact}
        onClick={changeColor}
      />
    );
  }

  const animalFacts = (
    <div>
      <h1 className="title">{title || "Click on an animal!"}</h1>
      <div className="background">
        <p className="text" id="fact"></p>
        <div className="animals">{images}</div>
      </div>
    </div>
  );

  return <div>{animalFacts}</div>;
}

export default App;

// https://reactjs.org/docs/events.html
// https://www.google.com/search?q=react+e.target.value&oq=react+e.target&aqs=chrome.0.0i512j69i57j0i512l8.2430j0j7&sourceid=chrome&ie=UTF-8
// https://rossbulat.medium.com/react-native-working-with-objects-aff45bff6832
// https://djoech.medium.com/functional-vs-class-components-in-react-231e3fbd7108#:~:text=A%20functional%20component%20is%20just,which%20returns%20a%20React%20element.%5C
