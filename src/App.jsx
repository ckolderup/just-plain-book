import { useState } from "react";
import { random as stockRandom, XORShift } from "random-seedable";
import { lines } from "./lines.json";
import "./App.css";

function getBook(seed) {
  const random = seed ? new XORShift(seed) : stockRandom;
  return {
    seed: random.seed,
    choices: [
      random.choice(lines[0]),
      random.choice(lines[1]),
      random.choice(lines[2]),
      random.choice(lines[3]),
    ],
  };
}

function App() {
  const [book, setBook] = useState(getBook());

  function refresh() {
    setBook(getBook());
  }

  function redirect() {
    window.location.href = "https://justplainwrong.buzzsprout.com/";
  }

  function share() {
    var inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand("copy");
    inputc.parentNode.removeChild(inputc);
    alert('copied to clipboard!');
  }

  function styleCap(text) {
    // per word
    return text.split(" ").map((word, idx) => {
      if (word.length < 3) {
        return <>{(idx > 0) && " "}<span className='cursive small'>{word}</span></>
      } else {
        return (
          <>
            {idx > 0 && " "}
            <span className='cursive'>{word.slice(0, 1)}</span>
            {word.slice(1)}
          </>
        );
      }
    });
  }

  return (
    <div className='App center'>
      <div className='book'>
        <div className='plate'>
          <h1>
            {styleCap('The')}{" "}
            {styleCap('Amish')}{" "}
            {styleCap(book.choices[0])}'s{" "}
            {styleCap(book.choices[1])}{" "}
            {styleCap(book.choices[2])}{" "}
            {styleCap(book.choices[3])}
          </h1>
          <h2 className='cursive'>The Mennobrarians</h2>
        </div>
      </div>
      <div className='buttons'>
        <button onClick={refresh}>Refresh</button>
        <button onClick={redirect}>Podcast</button>
      </div>
    </div>
  );
}

export default App;
