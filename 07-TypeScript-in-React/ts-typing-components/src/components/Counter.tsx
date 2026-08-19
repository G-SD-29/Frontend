// components/Counter.tsx
// This component should receive an `initialCount` number prop
// Pass that initial count as the initial value of a piece of state called count
// Render buttons to increase, decrease and reset
import { useState } from "react";
type CounterProps = {
  initialCount: number;
};

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Increase Counter
      </button>
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount - 1)}
      >
        Decrease Counter
      </button>
      <button type="button" onClick={() => setCount(initialCount)}>
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;
