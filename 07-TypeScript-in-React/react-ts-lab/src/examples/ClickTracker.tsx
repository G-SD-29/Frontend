import { useState, type MouseEventHandler } from "react";

const ClickTracker = () => {
  const [message, setMessage] = useState("Noch nicht geklickt.");

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setMessage(`Klick bei x=${event.clientX}`);
  };
  return (
    <section>
      <h3>Click Event</h3>
      <button type="button" onClick={handleClick}>
        Klick mich
      </button>
      <p>{message}</p>
    </section>
  );
};

export default ClickTracker;
