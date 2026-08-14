export {};

function first<T>(values: T[]): T | undefined {
  return values[0];
}

// Type Inference beim Aufruf
const firstName = first(["Ada", "Grace"]);
console.log(firstName);
const firstNumber = first([90, 95]);
console.log(firstNumber);

// source of truth für Kalenderdaten
type CalendarEvent = {
  id: number;
  title: string;
  description: string;
  status: "draft" | "published" | "cancelled";
};

// Generischer Type Alias
// string ist der Default, wenn kein Type Argument eingesetzt wird
type ApiResponse<T = string> = {
  success: boolean;
  // T ist der Typ Platzhalter für data
  data: T;
  message?: string;
};

// CalendarEvent[] wird als Type Argument für T eingesetzt
const eventResponse: ApiResponse<CalendarEvent[]> = {
  success: true,
  data: [
    {
      // jedes Element muss den Vertrag von CalendarEvent erfüllen
      id: 1,
      title: "TypeScript Meetup",
      description: "Generics and Utility Types",
      status: "published",
    },
    {
      id: 2,
      title: "TypeScript Meetup 2",
      description: "Generics and Utility Types 2",
      status: "draft",
    },
  ],
};

console.log(eventResponse.data[0]?.title);

// Omit entfernt id; Partial macht die übrigen Properties optional
type Eventchanges = Partial<Omit<CalendarEvent, "id">>;

function updateEvent(id: number, changes: Eventchanges): void {
  console.log("Update", id, changes);
}

updateEvent(1, { title: "new title" });
updateEvent(2, { title: "new title 2" });

// function getLengthWithoutConstraint<T>(value: T): number {
//   return value.length;
// }

// extends verlangt mindestens eine numerische length-Property
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));
// getLength(123);

const textResponse: ApiResponse = {
  success: true,
  data: "Operation successful",
};

// console.log(textResponse.data);

// ? = optionale Eingabe Properties
type Settings = {
  darkMode?: boolean;
  language?: string;
};

// Optionalität wird durch Required<> entfernt
type InitializedSettings = Required<Settings>;
const settings: InitializedSettings = {
  darkMode: false,
  language: "de",
};

console.log(settings);

// Readonly macht alle CalendarEvent-Properties schreibgeschützt (aber nicht während in der Laufzeit!)
const lockedEvent: Readonly<CalendarEvent> = eventResponse.data[0];
console.log(lockedEvent.title);

// lockedEvent.title = "something";
// console.log(lockedEvent.title);

// Pick behält nur die genannten Keys
type EventCard = Pick<CalendarEvent, "id" | "title" | "status">;
type CreateEventInput = Omit<CalendarEvent, "id">;

const card: EventCard = {
  id: 1,
  title: "TypeScript Meetup",
  status: "published",
};

const newEvent: CreateEventInput = {
  title: "Utility Types Workshop",
  description: "Verträge aus vorhandenen Typen ableiten",
  status: "draft",
};
console.log(card, newEvent);

// Record<K, T>
// Indexed Access liest die Status-Union aus CalendarEvent aus
type EventStatus = CalendarEvent["status"];
// Record verlangt für jeden Status-Key genau einen String-Wert
type StatusLabels = Record<EventStatus, string>;

const statusLabels: StatusLabels = {
  draft: "Entwurf",
  published: "veröffentlicht",
  cancelled: "abgesagt",
};

console.log(statusLabels[card.status]);

// der Ausgangstyp erlaubt absichtlich auch fehlende Werte
type SelectedEventId = number | null | undefined;
// NonNullable entfernt null und undefined aus der Union
type LoadedEventId = NonNullable<SelectedEventId>;

function showSelectedEvent(id: SelectedEventId): void {
  // die Laufzeitprüfung entfernt null und undefined tatsächlich
  if (id == null) {
    console.log("No event selected");
    return;
  }

  // nach dem Narrowing erfüllt id den abgeleiteten Typ.
  const loadedId: LoadedEventId = id;
  console.log(`Selected event: ${loadedId}`);
}

showSelectedEvent(1);
showSelectedEvent(null);
