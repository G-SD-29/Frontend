// # Variables and Scope

// #### Background:

// Variables in JavaScript can be declared using `var`, `let`, or `const`. Each has different implications for scope control and mutability:

// - `var` has function scope or global scope if declared outside any function. It can be re-declared and updated.
// - `let` has block scope (like within an `if` block or loop), cannot be re-declared within the same scope, but can be updated.
// - `const` also has block scope and cannot be re-declared or updated. It's perfect for declaring constants and for arrays or objects where contents might change but the reference does not.

// #### Task:

// 1.  **Global and Function Scope with `var`**:

//     - Declare a global variable using `var` and log it.
//     - Inside a function, declare another `var` variable with the same name but different value and log it within the function.
//     - Call your function.
//     - Log your global variable. Did it change? No! This is function scope!

// # Global Scope und Function Scope
// * Das Lernziel ist Sichtbarkeit: Diese Variable existiert außerhalb von Funktionen und Blöcken.
var myVar = 'I am global';

function testScope() {
  // * Diese gleichnamige `var` verdeckt die globale Variable nur innerhalb der Funktion.
  var myVar = 'I am function-scoped';
  console.log('Inside function:', myVar);
}

console.log('Vor Funktionsaufruf:', myVar);
testScope();
console.log('Nach Funktionsaufruf:', myVar);

// # Block Scope mit let und const
// * `let` und `const` sind nur innerhalb dieses Blocks sichtbar und schützen so vor Namenskonflikten.
if (true) {
  let blockLet = 'I am block-scoped (let)';
  const blockConst = 'I am also block-scoped (const)';
  // ! `var` ignoriert Block Scope und überschreibt hier die äußere `var`-Bindung.
  var myVar = 'I was re-declared in a block';
  console.log('Im Block:', blockLet);
  console.log('Im Block:', blockConst);
  console.log('Im Block:', myVar);
}

// # Auswirkung von var außerhalb des Blocks
// * Dieser Log zeigt den Gotcha: Der Block hat `myVar` verändert, obwohl er optisch wie ein eigener Bereich wirkt.
console.log('`var` außerhalb des Blocks:', myVar);

// 2.  **Block Scope with `let` and `const`**:

//     - Inside a block (use an `if` statement with a condition of `true`), declare variables using `let` and `const`. Try redeclaring them within the same block to observe errors.
//     - Try to log them inside and outside the `if` statement. What happens?

// 3.  **Redeclaration with `var`**:

//     - Try to redeclare your original global variable with `var` within the `if` block, log it in and outside the statement. What happens?

// 4.  **Usage of `const` for Arrays and Objects**:

//     - Declare an array and an object using `const`. Modify the contents of both and log their values before and after the changes.
//     - `const`is suggested for arrays and objects declaration since it's only the contents that change but not the reference!

// #### Discussion Points:

// - Discuss why `var` might lead to unexpected results when used in blocks.
// - Explain why `let` and `const` are generally safer to use for controlling scope.
// - Consider the mutability of arrays and objects declared with `const`.
