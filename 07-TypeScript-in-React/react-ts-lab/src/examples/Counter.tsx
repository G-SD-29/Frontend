import { useState } from "react";

const Counter = () => {
  // TypeScript inferiert aus 0: count und der Setter arbeiten mit number.
  const [count, setCount] = useState(0);

  return (
    <section>
      <h3>Inferred State</h3>
      <p>Zähler: {count}</p>
      {/* Die Updater Function verwendet immer den neuesten Zählerstand. */}
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Erhöhen
      </button>
    </section>
  );
};

export default Counter;
