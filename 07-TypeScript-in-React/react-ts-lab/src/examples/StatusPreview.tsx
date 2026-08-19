import { useState } from "react";

const StatusPreview = () => {
  // Begrenzung auf die 3 Werte durch TypeScript
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  return (
    <section>
      <h3>Union State</h3>
      <p>Status: {status}</p>
      <button type="button" onClick={() => setStatus("success")}>
        Success
      </button>
    </section>
  );
};
export default StatusPreview;
