// # Variables

// # Variablendeklaration
// * Das Lernziel ist die Wahl zwischen `let` für veränderbare Werte und `const` für stabile Bindungen.
// 1.  **Declare Variables with `let` and `const`:**

//     - Use `let` to declare a variable named `age` and assign it the value `25`.
let age = 25;
//     - Use `const` to declare a variable named `birthYear` and assign it the value `1999`.
const birthYear = 1999;
//     - Use `let` to declare a variable named `name` and assign it the value `"John Doe"`.
let studentName = 'John Doe';
//     - Use `const` to declare a variable named `isStudent` and assign it the value `true`.
const isStudent = true;

// # Werte neu zuweisen
// * Nur Variablen mit `let` können später auf einen neuen Wert zeigen.
// 2.  **Reassign Values:**

//     - Reassign the value of `age` to `26`.
age++;
// age = 26;
//     - Reassign the value of `name` to `"Jane Doe"`.
studentName = 'Jane Doe';
//     - Try to reassign the value of `birthYear` to `2000` and observe what happens.
// ! Eine `const`-Bindung neu zuzuweisen wirft einen Fehler und stoppt das Skript.
// birthYear = 2000;
//     - Try to reassign the value of `isStudent` to `false` and observe what happens.
// isStudent = false;

// # Werte sichtbar machen
// * Die Objekt-Schreibweise im Log zeigt gleichzeitig Namen und aktuelle Werte der Variablen.
// 3.  **Print Variables:**

//     - Use `console.log` to print the values of `age`, `birthYear`, `name`, and `isStudent`.
console.log({ age, studentName, birthYear, isStudent });

// # Veränderbarer Zustand
// * `favoriteColor` ist ein gutes Beispiel für einen Wert, der sich im Programmverlauf bewusst ändert.
// 4.  **Create and Modify a New Variable:**

//     - Use `let` to declare a variable named `favoriteColor` and assign it the value `"blue"`.
let favoriteColor = 'blue';
//     - Print the value of `favoriteColor`.
console.log({ favoriteColor });

//     - Reassign the value of `favoriteColor` to `"green"`.
favoriteColor = 'green';
//     - Print the new value of `favoriteColor`.
console.log({ favoriteColor });

const PI = 3.141_59;
const config = { apiBase: '/api' };

// * Ein Zähler startet oft mit `let`, weil sein Wert später schrittweise erhöht werden soll.
let counter = 0;
