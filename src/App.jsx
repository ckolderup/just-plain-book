import { random as stockRandom, XORShift } from "random-seedable";
import { lines } from "./lines.json";
import "./App.css";

function App() {
  const params = window.location.search;
  const seed = new URLSearchParams(params).get("s");
  const random = seed ? new XORShift(seed) : stockRandom;

  return (
    <div className='App center'>
      <div className='book'>
        <div className='plate'>
          <h1>
            The Amish {random.choice(lines[0])}'s {random.choice(lines[1])}{" "}
            {random.choice(lines[2])} {random.choice(lines[3])}
          </h1>
          <h2>The Mennobrarians</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
