import { useState } from "react";
import { useNavigate } from "react-router";

function ContactPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/request-sent");
  }

  return (
    <main>
      <h1>Plan your journey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email adress
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <button type="submit">Send request</button>
      </form>
    </main>
  );
}

export default ContactPage;
