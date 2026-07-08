// # Conditionals

// 1.  Define a variable `temperature` and set it to any integer to represent the temperature in degrees Celsius.
// 2.  Use `if/else` to advise wearing a coat if the temperature is below 15 degrees.
// 3.  Use `if/else if/else` to give advice based on three temperature ranges:
//     - Below 15 degrees: suggest a coat.
//     - Between 15 and 25 degrees: suggest a sweater.
//     - Above 25 degrees: suggest a t-shirt.
// 4.  Use a `switch` statement to provide advice based on specific temperatures (just a few for example): 10, 20, and 30 degrees.
// 5.  Print the results for each task to the console.

// Play with different values for `temperature` and different scenarios!

// # Entscheidungswert
// * Eine zentrale Variable steuert alle folgenden Verzweigungen; ändere sie, um andere Pfade zu testen.
const temperature = 10;

// # if/else für zwei Pfade
// * `if/else` modelliert eine Entscheidung, bei der genau einer von zwei Blöcken ausgeführt wird.
if (temperature < 15) {
  console.log('Es ist kalt, zieh eine Jacke an.');
} else {
  console.log('Es ist nicht zu kalt, keine Jacke nötig.');
}

// # Ternary Operator
// * Der ternary operator ist sinnvoll, wenn aus einer Bedingung direkt ein einzelner Ausdruck entsteht.
console.log(
  temperature < 15
    ? 'Es ist kalt, zieh eine Jacke an.'
    : 'Es ist nicht zu kalt, keine Jacke nötig.',
);
// condition > if condition is true/truthy : else

// # if/else-if/else für Bereiche
// * Bei mehreren Bereichen gewinnt der erste passende Zweig; die Reihenfolge der Bedingungen ist daher wichtig.
if (temperature < 15) {
  console.log('Es ist kalt, zieh eine Jacke an.');
} else if (temperature <= 25) {
  console.log('Es ist mild, ein Pullover reicht.');
} else {
  console.log('Es ist warm, ein T-Shirt reicht.');
}

// # switch für konkrete Werte
// * `switch` passt gut, wenn ein Wert gegen feste Fälle verglichen wird.
switch (temperature) {
  // temperature === 10
  case 10: {
    console.log('Sehr kalt, unbedingt eine Jacke anziehen.');
    // ! `break` verhindert, dass JavaScript in den nächsten `case` weiterläuft.
    break;
  }
  case 20: {
    console.log('Angenehm, ein Pullover reicht.');
    break;
  }
  case 30: {
    console.log('Ziemlich warm, T-Shirt ist perfekt.');
    break;
  }
  default: {
    console.log('Keine spezifische Empfehlung für diese Temperatur.');
  }
}
