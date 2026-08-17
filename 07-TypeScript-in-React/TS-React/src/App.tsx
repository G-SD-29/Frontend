import { useState } from "react";
import ExhibitCard from "./components/ExhibitCard.tsx";
import Container from "./components/Container.tsx";
import type { Exhibit } from "./types/exhibit.ts";

// Startdaten für die erste Anzeige im Museum-Frontend.
// Damit kann die UI sofort mit Beispiel-Ausstellungen gerendert werden.
const initialExhibit: Exhibit[] = [
  {
    id: 1,
    title: "Blue Morning",
    artist: "Mina Cole",
    kind: "painting",
    year: 2021,
  },
  {
    id: 2,
    title: "Quiet Form",
    artist: "Noah Reed",
    kind: "sculpture",
  },
];

function App() {
  // Der Zustand hält die komplette Liste der Ausstellungen.
  // Bei Updates wird mit setExhibits ein neues Array erzeugt.
  const [exhibits, setExhibits] = useState<Exhibit[]>(initialExhibit);

  // Sichtoptionen steuern UI-Verhalten, z. B. ob Jahreszahlen angezeigt werden.
  const [viewOptions, setViewOptions] = useState({ showYears: true });

  // Die Auswahl speichert die ID der aktuell markierten Ausstellung oder null.
  const [selectId, setSelectId] = useState<number | null>(null);

  // Der aktuell ausgewählte Eintrag wird aus der Liste abgeleitet.
  const selectedExhibit = exhibits.find((exhibit) => exhibit.id === selectId);

  // Demo-Funktion, die der App eine zusätzliche Ausstellung hinzufügt.
  // Sie verhindert doppelte IDs, damit die Liste konsistent bleibt.
  const addDemoExhibit = () => {
    const newExhibit: Exhibit = {
      id: 3,
      title: "Paper Horizon",
      artist: "Lea Novak",
      kind: "sculpture",
      year: 2024,
    };
    setExhibits((currentExhibits) =>
      currentExhibits.some((exhibit) => exhibit.id === newExhibit.id)
        ? currentExhibits
        : [...currentExhibits, newExhibit],
    );
  };

  return (
    <Container style={{ maxWidth: "40rem", margin: "0 auto" }}>
      <h1>Museum Desk</h1>

      <button type="button" onClick={addDemoExhibit}>
        Ausstellung ergänzen
      </button>

      <button
        type="button"
        onClick={() =>
          setViewOptions((currentOptions) => ({
            ...currentOptions,
            showYears: !currentOptions.showYears,
          }))
        }
      >
        {viewOptions.showYears ? "Jahre ausblenden" : "Jahre anzeigen"}
      </button>

      <button type="button" onClick={() => setSelectId(null)}>
        Auswahl aufheben
      </button>

      <p>Interne Übersicht der aktuellen Ausstellungen</p>
      <p>
        {selectedExhibit
          ? `ausgewählt: ${selectedExhibit.title}`
          : `keine Ausstellung ausgewählt`}
      </p>

      {exhibits.map((exhibit) => (
        <ExhibitCard
          key={exhibit.id}
          exhibit={exhibit}
          showYear={viewOptions.showYears}
          onSelect={setSelectId}
        />
      ))}
    </Container>
  );
}

export default App;
