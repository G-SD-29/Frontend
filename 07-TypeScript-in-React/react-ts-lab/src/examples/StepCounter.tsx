import { useReducer } from "react";

// TypeScript prüft den verwalteten State und jeden Reducer-Rückgabewert.
type CounterState = { count: number };
// TypeScript begrenzt dispatch auf diese drei erlaubten Befehle.
type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

// Parameter- und Rückgabetyp halten den Reducer im gemeinsamen Vertrag.
const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default: {
      // never macht beim Ergänzen einer Action einen vergessenen Fall sichtbar.
      const exhaustiveAction: never = action;
      throw new Error(`Unbekannte Action: ${exhaustiveAction}`);
    }
  }
};

const StepCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <section>
      <h3>Reducer</h3>
      <p>Zähler: {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        +1
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        -1
      </button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Zurücksetzen
      </button>
    </section>
  );
};

export default StepCounter;
