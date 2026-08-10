// // Funktion erwartet Objekt mit der sendEmail Methode
// // JavaScript prüft das jedoch nicht vor der Ausführung
// function sendInvoice(customer) {
//   customer.sendEmail("Your invoice is ready");
// }

// // sendEmail fehlt absichtlich
// const customer = {
//   name: "Ada Lovelace",
// };

// // Fehler wird bei Aufruf erst sichtbar
// sendInvoice(customer);

// // Wert beginnt als String, JavaScript erlaubt später trotzdem einen number-Wert
// let invoiceNumber = "42";
// invoiceNumber = 42;

// let language = "JavaScript";
// language = 42;
// // erst diese Operation zeigt zur Laufzeit, dass 42 keine String-Methode besitzt.
// console.log(language.toUpperCase());

// const numberA = "1";
// const numberB = "2";
// function addNumbers(a, b) {
//   return a + b;
// }

// console.log(addNumbers(numberA, numberB));
