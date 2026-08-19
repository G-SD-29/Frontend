import { useState } from "react";

const GuestList = () => {
  // TypeScript kennt durch das Generic trotz [] den Elementtyp string.
  const [guests, setGuests] = useState<string[]>([]);

  const handleAddGuest = () => {
    // Das neue Array enthält die bisherigen Gäste und einen neuen Wert.
    setGuests((currentGuests) => [...currentGuests, "Grace"]);
  };

  return (
    <section>
      <h3>State mit leerem Array</h3>
      <button type="button" onClick={handleAddGuest}>
        Gast hinzufügen
      </button>
      <p>Gäste: {guests.join(", ") || "noch keine"}</p>
    </section>
  );
};

export default GuestList;
