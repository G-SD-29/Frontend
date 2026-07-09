// # Functions

// #### Part 1: Function Declarations

// 1.  **Declare a function with no parameters that outputs something to the console.**

//     - Declare a function named `greet` that logs "Hello, World!" to the console.
//     - Call the function.
// # Function Declaration und Hoisting
// * Function Declarations werden vor der Ausfuehrung registriert; deshalb funktioniert der Aufruf vor der Definition.
greet();

function greet() {
  console.log('Hallo von einer function declaration');
}

// # Parameter, Argumente und Rueckgabewerte
// * Der Parameter ist der Platzhalter in der Funktion; das Argument ist der konkrete Wert beim Aufruf.
function square(parameter) {
  return parameter * parameter;
}
const squaredNumber = square(5); // Argument
console.log(squaredNumber);

console.log(square(10));
console.log(square(999));
console.log(square(Infinity));

// # Function Expression
// * Eine Function Expression ist ein Funktionswert in einer Variable und wird erst nach dieser Zeile nutzbar.
// ! Ein Aufruf vor der `const`-Zuweisung wuerde fehlschlagen.
const greetExpression = function () {
  console.log('Hallo von einer function expression');
};
greetExpression();

const squaredExpression = function (stegosaurus) {
  return stegosaurus * stegosaurus;
};
console.log(squaredExpression(8));

// # Arrow Function
// * Arrow Functions sind besonders kompakt, wenn eine Funktion nur einen Wert berechnet.
const greetExpressionArrow = (stegosaurus) => {
  return stegosaurus * stegosaurus;
};
// * Shorthand: Bei genau einem Ausdruck kann das `return` implizit sein.
const greetExpressionArrowShort = (stegosaurus) => stegosaurus * stegosaurus;

// 2.  **Declare a function with one parameter that returns something.**

//     - Declare a function named `square` that takes a number as a parameter and returns its square.
//     - Call the function with the argument `5`, store the result in a variable, and output it to the console.

// 3.  **Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly.**

//     - Declare a function named `getDayName` that takes a number (0-6) as a parameter and returns the name of the day.
//     - Use a switch statement to determine the day name.
//     - Call the function with the argument `3`, store the result in a variable, and output it to the console.

// # Rueckgabe aus Kontrollfluss
// * `return` beendet die Funktion sofort; in diesem `switch` braucht jeder Treffer deshalb kein zusaetzliches `break`.
function getDayName(dayNumber) {
  // const getDayNameExpression = function (dayNumber) {
  switch (dayNumber) {
    case 0: {
      return 'Monday';
    }
    case 1: {
      return 'Tuesday';
    }
    case 2: {
      return 'Wednesday';
    }
    case 3: {
      return 'Thursday';
    }
    case 4: {
      return 'Freitag';
    }
    case 5: {
      return 'Saturday';
    }
    case 6: {
      return 'Sunday';
    }
    default: {
      // ! Der `default`-Fall macht ungültige Eingaben sichtbar statt still `undefined` zurueckzugeben.
      return 'Invalid day number. Must be 0-6';
    }
  }
}

const todayName = getDayName(6);
console.log(todayName);

// #### Part 2: Function Expressions

// 1.  **Repeat the above steps using function expressions assigned to variables.**
//     - Rewrite the `greet` function as a function expression assigned to a variable named `greetExpression`.
//     - Rewrite the `square` function as a function expression assigned to a variable named `squareExpression`.
//     - Rewrite the `getDayName` function as a function expression assigned to a variable named `getDayNameExpression`.

// #### Discussion:

// - Discuss the difference between function declarations and function expressions.
