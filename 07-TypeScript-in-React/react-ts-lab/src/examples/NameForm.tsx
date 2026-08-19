import { useState, type ChangeEventHandler } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  // TypeScript verbindet Handler mit Inputvertrag
  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.currentTarget.value);
  };

  return (
    <section>
      <h3>Controlled Inputs</h3>
      <input id="name" value={name} onChange={handleNameChange} />
      {name && <p>Hallo, {name}!</p>}
    </section>
  );
};

export default NameForm;
