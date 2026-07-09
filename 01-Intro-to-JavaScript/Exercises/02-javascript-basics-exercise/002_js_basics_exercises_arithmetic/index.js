// # Arithmetic

// # Gemischte Typen beim Plus-Operator
// * `+` ist der Sonderfall: Sobald ein String beteiligt ist, kann daraus String-Verkettung statt Rechnung werden.
// 1.  **Addition with Mixed Types**

//     - Create a variable that stores a number.
//     - Create a variable that stores a string representation of a number.
//     - Add these two variables and print the result.
//     - Explain the output.

const num = 5;
const strNum = '3';
const text = 'hello';
console.log(num + strNum); // "53" - concatenation
// ! Explizite Umwandlung macht die Absicht sichtbar und verhindert versehentliche String-Ergebnisse.
console.log(num + Number(strNum)); // 8

console.log(num + text); // "5hello"

// # Numerische Operatoren mit Typumwandlung
// * `-`, `*`, `/` und `%` versuchen Strings in Zahlen umzuwandeln, weil sie keine String-Verkettung bedeuten.
// 2.  **Subtraction with Mixed Types**

//     - Using the same string and number variables, subtract the string from the number and print the result.
//     - Explain why the output differs from the addition.
console.log(num - strNum); // 2
// 3.  **Multiplication with a String**

//     - Multiply the string variable by a new number and print the result.
console.log(num * strNum); // 15
// ! Wenn die Umwandlung in eine Zahl scheitert, entsteht `NaN` statt eines brauchbaren Ergebnisses.
console.log(num * text); // NaN = Not a Number

// 4.  **Division by a String**

//     - Divide a number by the string variable and print the result.
console.log(num / strNum);
// 5.  **Modulus Operation**

//     - Use modulus on two number variables and print the result.
//     - Change one of the numbers to a string and perform the modulus operation again. Print the result.
console.log(num % strNum); // 2

// # Zusammengesetzte Ausdrücke
// * Klammern machen die Reihenfolge der Rechnung eindeutig und verhindern falsche Annahmen zur Operator-Priorität.
// 6.  **Perform a Series of Numeric Operations**

//     - Define several new numeric variables.
//     - Perform and print the result of each operation: addition, subtraction, multiplication, division, and modulus.
//     - For each operation, include at least one example that uses more than two numbers.

const a = 8;
const b = 3;
const c = 10;
console.log(a + b + c); // 21
console.log(((a + b) * c) / b - (a % b));

// ### Notes:

// - Consider what happens when operations are performed on different data types.
// - JavaScript performs type coercion in certain operations. Reflect on how this affects the results.
