import type { Exhibit } from "../types/exhibit.ts";

// Props für die Kartenansicht einer einzelnen Ausstellung.
// Jede Karte erhält die Daten des Objekts sowie eine Callback-Funktion für die Auswahl.
type ExhibitCardProps = {
  exhibit: Exhibit;
  showYear?: boolean;
  onSelect: (id: number) => void;
};

// Eine einzelne Ausstellung wird als Karte gerendert.
// Je nach Einstellung kann das Erscheinungsjahr ein- oder ausgeblendet werden.
const ExhibitCard = ({
  exhibit,
  showYear = true,
  onSelect,
}: ExhibitCardProps) => {
  return (
    <article>
      <h2>{exhibit.title}</h2>
      <p>{exhibit.artist}</p>
      <p>{exhibit.kind}</p>
      {showYear && exhibit.year !== undefined && <p>Jahr: {exhibit.year}</p>}
      <button type="button" onClick={() => onSelect(exhibit.id)}>
        auswählen
      </button>
    </article>
  );
};

export default ExhibitCard;
