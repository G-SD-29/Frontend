// Type Alias für die Ausstellungen, sprich der Vertrag für die Werte
export type Exhibit = {
  id: number;
  title: string;
  artist: string;
  // literal union = |
  kind: "painting" | "sculpture";
  // Fragezeichen = optional
  year?: number;
};
