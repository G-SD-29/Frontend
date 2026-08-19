import { useState, type SubmitEventHandler } from "react";

const EmailForm = () => {
  const [message, setMessage] = useState("");

  // TypeScript soll prüft ob currentTarget ein Formular ist
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const emailValue = new FormData(event.currentTarget).get("email");
    setMessage(`${emailValue}`);
  };
  return (
    <section>
      <h3>Submit Event</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-Mail </label>
        <input id="email" name="email" type="email" />
        <button type="submit">Senden</button>
      </form>
      <p>{message}</p>
    </section>
  );
};

export default EmailForm;
