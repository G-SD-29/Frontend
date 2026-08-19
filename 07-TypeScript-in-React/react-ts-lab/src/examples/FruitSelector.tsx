import { useState, type ChangeEventHandler } from "react";

const FruitSelector = () => {
  const [fruit, setFruit] = useState("Apfel");

  // TypeScript verbindet Handler mit Selectvertrag
  const handleFruitChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFruit(event.currentTarget.value);
  };
  return (
    <section>
      <h3>Controlled Select</h3>
      <label htmlFor="fruit">Obst </label>
      <select id="fruit" value={fruit} onChange={handleFruitChange}>
        <option value="Apfel">🍎 Apfel</option>
        <option value="Banane">🍌 Banane</option>
        <option value="Kirsche">🍒 Kirsche</option>
      </select>
      <p>Auswahl: {fruit}</p>
    </section>
  );
};

export default FruitSelector;
