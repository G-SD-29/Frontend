function Counter({ title, count, setCount }) {
  return (
    <article className="counter-card">
      <h2>{title}</h2>
      {/* count ist eine Prop. Counter zeigt den Wert nur an. */}
      <p className="counter-value">{count}</p>

      <div className="counter-actions">
        {/* setCount ist ebenfalls eine Prop. Counter ruft die Funktion nur auf. */}
        <button type="button" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>
    </article>
  );
}

export default Counter;
