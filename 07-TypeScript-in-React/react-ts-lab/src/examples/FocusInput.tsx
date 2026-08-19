import { useRef } from "react";

const FocusInput = () => {
  // generic < > erlaubt uns hier den Input oder Null zu wählen
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <section>
      <h3>DOM Referenz</h3>
      <button type="button" onClick={handleFocus}>
        Eingabe fokussieren
      </button>
      <input ref={inputRef} placeholder="Fokus landet hier" />
    </section>
  );
};

export default FocusInput;
