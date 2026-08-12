// Arrays
// JavaScript erlaubt, dass wir den string in den number array einfügen
const scores = [95, 87, 100];
// scores.push("absent");

const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average);

// unsere bevorzuge Schreibweise
const eventRatings: number[] = [5, 4, 5];
const attendeeNames: string[] = ["Ada", "Grave", "Linus"];
// alternative Schreibweise mit generischem Array-Type
const flags: Array<boolean> = [true, false, true];

// Elementtyp gilt dann auch für Methoden
const cities: string[] = ["London", "Berlin"];
cities.push("Lisbon");

// Eingang string array wird zu number array (wir bekommen Zahlen zurück)
const lengths = cities.map((city) => city.length);

// Type Inference
const temperatues = [40, 35, 42];

// zukünftigen Elementtyp definieren bei leerem Array
const attendees: string[] = [];
attendees.push("Ada");

// Tuples
// Typen und Länge sind definiert
const attendee: [string, number] = ["Ada", 36];

console.log(attendee[0]);
console.log(attendee[1]);

// Tuples werden mit vielen Typen unübersichtlich
const eventTuple: [string, string, number, boolean] = [
  "TypeScript Meetup",
  "Berlin",
  80,
  true,
];

// Objects
// kein Vertrag -> wir würden in JavaScript keine Warnung erhalten und ein undefined zurückbekommen
// const userA = { name: "Ada", age: 36};
// const userB = { name: "Grace", };

// function printUser(user) {
//     console.log(`${user.name} is ${user.age} years old.`);
// }

// printUser(userA);
// printUser(userB);

const eventObject: { title: string; city: string; capacity: number } = {
  title: "TypeScript Meetup",
  city: "Berlin",
  capacity: 80,
};
// nicht existende Property wird von TypeScript erkannt
// eventObject.organizer = "WBS Coding School";

// ? erlaubt es uns Properties als optional zu setzen
// dadurch wird der Type von description zu string oder undefined
const eventDetails: { title: string; description?: string } = {
  title: "TypeScript Meetup",
};
// kann ohne Prüfung undefined sein
console.log(eventDetails.description?.toUpperCase());
// nullish coalescing durch ?? erlaubt es uns einen Ersatzwert auszugeben
// bei null oder undefined
console.log(eventDetails.description ?? "No description available");

// explizite Prüfung
if (eventDetails.description !== undefined) {
  console.log(eventDetails.description.toUpperCase());
} else {
  console.log("No description available");
}

// read-only Property
const eventMetadata: { readonly id: number } = {
  id: 1,
};

// eventMetadata.id = 2;

// Syntax Array of objects
const eventObjects: { title: string; capacity: number }[] = [
  { title: "TypeScript Meetup", capacity: 80 },
  { title: "React Workshop", capacity: 30 },
];

// mehrzeilige Type Literal
const detailedEvent: {
  id: number;
  title: string;
  capacity: number;
  description?: string;
  readonly slug: string;
} = {
  id: 1,
  title: "TypeScript Meetup",
  capacity: 80,
  slug: "typescript-meetup",
};

// Type Alias

// const eventA: {id: number; title: string; capacity: number } = {
//     id: 1,
//     title: "TypeScript Meetup",
//     capacity: 80,
// };

// const eventB: {id: number; title: string; capacity: number } = {
//     id: 2,
//     title: "React Workshop",
//     capacity: 30,
// };

// type mit wiederverwendebarem Namen CourseEvent
type CourseEvent = {
  id: number;
  title: string;
  capacity: number;
};
const eventA: CourseEvent = {
  id: 1,
  title: "TypeScript Meetup",
  capacity: 80,
};

const eventB: CourseEvent = {
  id: 2,
  title: "React Workshop",
  capacity: 30,
};
// Alias für array
type EventList = CourseEvent[];
const events: EventList = [eventA];
// Alias für tuple
type Coordinate = [number, number];
const berlin: Coordinate = [10, 20];

// Literal union type

// let status = "published";
type EventStatus = "published" | "cancelled";
let eventChange: EventStatus = "cancelled";

// Function types
type EventFilter = (event: CourseEvent) => boolean;
const hasCapacity: EventFilter = (event) => event.capacity > 0;

// Interfaces
interface User {
  name: string;
  email: string;
}
interface Admin extends User {
  role: "admin";
}

const admin: Admin = {
  name: "Sarah",
  email: "sarah@example.com",
  role: "admin",
};

// Declaration Merging
interface UserMerge {
  name: string;
}
interface UserMerge {
  email: string;
}

const ada: UserMerge = {
  name: "Ada",
  email: "ada@example.com",
};

// optionale Parameter (immer nach den required Parameter!)
function logMessage(message: string, userId?: number): void {
  if (userId !== undefined) {
    console.log(`${message} from user ${userId}`);
    return;
  }

  console.log(message);
}
logMessage("Hello", 1);

// Default-Parameter
function greetUser(name: string = "Guest"): void {
  console.log(`Welcome, ${name}!`);
}

greetUser();
greetUser("Ada");
