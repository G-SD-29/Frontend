export {};
let value: unknown = "Hello";
const greeting = value as string;

console.log(greeting.toUpperCase());

// 2 Syntax Möglichkeiten
// const first = <string>value;
const second = value as string;

// keine Konvertierung
// unknown lässt uns jeden möglichen Wert speichern
const valueN: unknown = 42;
const text = valueN as string;
// console.log(text.toUpperCase());
// Anwendung crasht, da wir eine string Methode auf eine Zahl anwenden

// // DOM-Elemente präzisieren
// const input = document.querySelector("input");

// if (input instanceof HTMLInputElement) {
//     input.value = "Ada";
// }

// JSON bzw. externe Daten
type Post = {
  id: number;
  title: string;
};
// keine echte Validierung!
// const response = await fetch("api/posts");
// const posts = (await response.json()) as Post[];

// undefined = Wert nicht gesetzt oder Property fehlt
// null = Wert ist bewusst nicht gesetzt

let username: string | null = null;

type User = {
  name: string;
  contact: {
    email: string;
    phoneNumber?: string;
  };
  address?: {
    street: string;
    zipCode: string;
  };
};

const user: User = {
  name: "Ada",
  contact: { email: "ada@example.com" },
};

const street = user.address?.street ?? "Street not provided";

console.log(user.contact.email);
// console.log(user.address.street); // cannot read properties of undefined
console.log(user.address?.street);
