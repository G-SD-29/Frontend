export {};

// Type Narrowing

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// printValue(2000);

function printLength(value?: string): void {
  if (value !== undefined) {
    console.log(value.length);
  } else {
    console.log("Test");
  }
}
// printLength("");

// equality narrowing
function compare(first: string | number, second: string | boolean): void {
  // (type und value müssen identisch sein)
  if (first === second) {
    console.log(first.toUpperCase());
  }
}

// compare("one", "one");

// in-Operator

type Dog = { bark: () => void };
type Cat = { meow: () => void };
type Pet = Dog | Cat;

// cat dog Objekte
const dog: Dog = {
  bark: () => console.log("Woof!"),
};

const cat: Cat = {
  meow: () => console.log("Meow!"),
};

function speak(pet: Pet): void {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// speak(dog);
// speak(cat);

// discriminated unions

type OnlineEvent = {
  kind: "online";
  meetingUrl: string;
};

type OnsiteEvent = {
  kind: "onsite";
  address: string;
};

type EventLocation = OnlineEvent | OnsiteEvent;

// kind ist das discriminant Feld und enthält unterschiedliche Werte
function printLocation(location: EventLocation): void {
  if (location.kind === "online") {
    console.log(location.meetingUrl);
  } else {
    console.log(location.address);
  }
}

// instanceof
function logDateOrString(value: Date | string): void {
  if (value instanceof Date) {
    console.log(value.toLocaleDateString("de-De"));
  } else {
    console.log(value.trim());
  }
}

// custom type predicates

// vehicle is Car beschreit was als true-Rückgabewert ausgegeben werden soll
// function isCar(vehicle: Vehicle) vehicle is Car {
//     return "drive" in vehicle;
// }

// Enums
// nicht mit node ausführen sondern erst
// npm i tsx und dann npx tsx dateiname.ts

function turn(direction: string): void {
  if (direction === "left") {
    console.log("Turning left");
  }
}

// ohne Werte fängt die Aufzählung bei 0 an
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let move: Direction = Direction.Up;

// string enmus
enum EventStatus {
  Draft = "draft",
  Published = "published",
  Cancelled = "cancelled",
}

function logStatus(status: EventStatus): void {
  console.log(`Current status: ${status}`);
}
logStatus(EventStatus.Draft);
