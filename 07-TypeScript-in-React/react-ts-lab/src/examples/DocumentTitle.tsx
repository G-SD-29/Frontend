import { useEffect, useState } from "react";

const DocumentTitle = () => {
  // TypeScript erlaubt für name string oder null;
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    document.title = name ? `Hallo, ${name}` : "Noch kein Name";
  }, [name]);
  return (
    <section>
      <h3>Effect im Browsertitel</h3>
      <button type="button" onClick={() => setName("Ada")}>
        Ada begrüßsen
      </button>
      <p>{name ? `Hallo, ${name}` : "Noch kein Name"}</p>
    </section>
  );
};

export default DocumentTitle;
