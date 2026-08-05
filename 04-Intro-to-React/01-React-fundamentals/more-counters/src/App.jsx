import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  // Drei Counter brauchen drei getrennte State-Paare.
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">useState Practice</p>
        <h1>More Counters!</h1>
        <p>Three counters. Three independent pieces of state.</p>
      </section>

      <section className="counter-grid" aria-label="Counters">
        {/* Jeder Counter bekommt seinen eigenen Wert und seine eigene Update-Funktion. */}
        <Counter
          title="Counter A"
          count={firstCount}
          setCount={setFirstCount}
        />
        <Counter
          title="Counter B"
          count={secondCount}
          setCount={setSecondCount}
        />
        <Counter
          title="Counter C"
          count={thirdCount}
          setCount={setThirdCount}
        />
      </section>
    </main>
  );
}

export default App;
