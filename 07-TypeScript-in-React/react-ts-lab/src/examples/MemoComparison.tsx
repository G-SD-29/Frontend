import { useCallback, useMemo, useState } from "react";

const MemoComparison = () => {
  const [count, setCount] = useState(0);
  // TypeScript kennt durch das Generic trotz [] den Elementtyp string.
  const [entries, setEntries] = useState<string[]>([]);

  // TypeScript inferiert doubled als number; das Caching wäre hier unnötig.
  const doubled = useMemo(() => count * 2, [count]);
  // TypeScript braucht den Parametertyp; Rückgabewert und Setter-Aufruf werden inferiert.
  const addEntry = useCallback((entry: string) => {
    setEntries((currentEntries) => [...currentEntries, entry]);
  }, []);

  return (
    <section>
      <h3>Memoization-Syntax</h3>
      <p>Doppelt: {doubled}</p>
      {/* Die Updater Function verwendet immer den neuesten Zählerstand. */}
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Erhöhen
      </button>
      <button type="button" onClick={() => addEntry(`Stand ${count}`)}>
        Eintrag merken
      </button>
      <p>{entries.join(", ")}</p>
    </section>
  );
};

export default MemoComparison;
