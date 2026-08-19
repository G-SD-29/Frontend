import { useEffect, useState } from "react";

const EscapeMessage = () => {
  const [message, setMessage] = useState("Noch keine Taste");

  // Dieser Effect registriert einen nativen Browser-Listener.
  useEffect(() => {
    // TypeScript verwendet hier den nativen Browser-Typ, nicht Reacts Eventtyp.
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMessage("Escape gedrückt");
    };

    // window erhält den Listener außerhalb von Reacts JSX-Eventsystem.
    window.addEventListener("keydown", handleEscape);
    // Das Cleanup verhindert, dass der Listener nach dem Unmount weiterläuft.
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return <p>{message}</p>;
};

export default EscapeMessage;
