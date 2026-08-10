// // Customer ist Typ-Alias, also der Name der erwarteten Objektform
// type Customer = {
// // jedes Customer Objekt muss eine Property name mit dem Typ string besitzen
//     name: string; 
// // und eine Methode namens sendEmail die einen string erhält und keinen Wert zurückgibt (void)
//     sendEmail(message: string): void;
// };

// function sendInvoice(customer: Customer) {
//   customer.sendEmail("Your invoice is ready");
// }

// const customer = {
//   name: "Ada Lovelace",
// // diese Methode erfüllt den sendEmail-Teil des Customer-Vertrags
//   sendEmail(message:string) {
//     console.log(`Email sent to ${this.name}: ${message}`)
//   }
// };

// sendInvoice(customer);

// // die Annotation : string legt den erlaubten Typ der Variable fest.
// let invoiceNumber: string = "42";
// // number verletzt diesen Vertrag und wird von TypeScript markiert
// invoiceNumber = 42;

// // : string gilt auch für jede spätere Zuweisung an language
// let language = "TypeScript";
// language = 42; // Type 'number' is not assignable to type 'string'


// console.log(language.toUpperCase());

// // nach dem Doppelpunkt steht jeweils der erlaubte Typ der Variable
// // explizite Annotation: wir schreiben den Typ selbst hin
// let nameA: string = "Ada";
// let age: number = 28;
// let isActive: boolean = true;

// // Type Inference: TypeScript leitet die Typen aus den eindeutigen Initialwerten ab.
// let city = "London";
// let score = 42;
// let isFinished = false;

// // Typen sind bekannt -> Editor bietet passende Methoden an
// console.log((city.padEnd(10, ".")))
// console.log((score.toPrecision(1)))


// // ohne Parametertyp weiß TypeScript unter strict nicht, was value sein soll
// function printValue(value) {
//     console.log(value);
// }
// // Parameter 'value' implicitly has an 'any' type

// const numberA = 1;
// const numberB = 2;
// // a und b dürfen ausschließlich number-Werte erhalten
// // : number hinter der Parameterliste beschreibt den Rückgabewert
// function addNumbers(a: number, b:number):number {
// // dadurch ist + hier eindeutig eine mathematische Addition
//   return a + b;
// }
// console.log(addNumbers(numberA, numberB));

// // void bedeutet: die aufrufende Stelle erhält keinen nutzbaren Rückgabewert
// function logData(): void {
//     console.log("It's today");
// }
// logData()

// function isOldEnough(age: number):string {
//     if (age >= 18) {
//         return ("You are old enough.");
//     } else {
//         return ("You are too young.");
//     }
// }

// // die Signatur beschreibt sowohl Input als auch Output
// function greet(name: string):string {
//     return `Hello, ${name}`;
// }
// // weil greet einen string zurückgibt, wird message ebenfalls als string abgeleitet
// const message = greet("Ada");