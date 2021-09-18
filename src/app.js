import { useState } from "react";
import "./styles.css";

var animals = {
  "🐷": "Pig",
  "🦓": "Zebra",
  "🦄": "Unicorn",
  "🐫": "Camel",
  "🐵": "Monkey",
  "🐶": "Dog",
};
var animalsKeys = Object.keys(animals);
// console.log(animalsKeys);
export default function App() {
  const [userInputMeaning, setUserInputMeaning] = useState("");

  function emojiInput(event) {
    var inputEmoji = event.target.value;
    var meaning = animals[inputEmoji];
    if (meaning === undefined) {
      meaning = "Not found in Database, please select from the given below";
    }
    setUserInputMeaning(meaning);
  }

  function clickEmojiHandler(animal) {
    var meaning = animals[animal];
    setUserInputMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> The Animals </h1>
      <input onChange={emojiInput} />
      <h2>{userInputMeaning}</h2>
      <h2>What we have</h2>
      {animalsKeys.map(function (keys) {
        return (
          <span
            onClick={function () {
              clickEmojiHandler(keys);
            }}
          >
            {keys}
          </span>
        );
      })}
    </div>
  );
}
