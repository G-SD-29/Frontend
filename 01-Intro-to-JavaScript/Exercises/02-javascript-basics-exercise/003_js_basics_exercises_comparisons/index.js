// # Comparisons

// # Gleichheit und Typumwandlung
// * Das Hauptkonzept ist der Unterschied zwischen lockerem Vergleich mit Umwandlung und strengem Vergleich ohne Umwandlung.
// Strict vs Simple Equality and Inequality
console.log('5 == "5":', 5 == '5'); // Simple Equality, should be true // coerces types
// ! In echtem Code ist `===` meistens sicherer, weil keine versteckte Typumwandlung passiert.
console.log('5 === "5":', 5 === '5'); // Strict Equality, should be false // Typen sind verschieden

// 1.  **Task Overview**:

//     - Use the following values for comparisons: `5`, `'5'`, `10`, `'10'`, `true`, `false`.
//     - Perform comparisons using both simple and strict equality and inequality operators.
//     - Compare values to determine if they are greater than, less than, greater than or equal to, or less than or equal to each other.

// 2.  **Specific Tasks**:

//     - Compare `5` and `'5'` using simple and strict equality.
//     - Compare `10` and `'10'` using simple and strict inequality.
console.log(10 != '10'); // false
console.log(10 !== '10'); // true

// # Größer/Kleiner-Vergleiche
// * Bei Zahl gegen Zahlen-String versucht JavaScript wieder eine numerische Umwandlung.
//     - Check if `5` is greater than `3` and if `'5'` is greater than `'3'`.
console.log(5 > 3); // true
console.log('5' > 4); // true (coerces string "5" zu einer number)

//     - Evaluate whether `10` is less than `20` and if `'10'` is less than `'20'`.
//     - Determine if `5` is greater than or equal to `5` and if `'5'` is greater than or equal to `5`.
//     - Assess whether `10` is less than or equal to `20` and if `'10'` is less than or equal to `'20'`.

// 3.  **Output**:

//     - Print each result to the console with a descriptive message, so you know which comparison is being displayed.

// ! String gegen String wird zeichenweise nach UTF-16-Codierung verglichen, nicht als normale Zahl.
console.log('2' > '10'); // true
console.log('12' > '2'); // false
