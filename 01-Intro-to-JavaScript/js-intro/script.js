// //ouput
// console.log('hello world');

// //variables
// const lastName = 'Karlsen "Mr."';
// let city = 'Berlin';
// city = 'Madrid';
// let City = 'Cologne';
// // var street = 'Lindenstrasse';
// // street = 'lindenallee';

// /*
// salfdk
// salfjas
// slakfjsal
// */

// //try - catch
// try {
// 	throw new Error('Error happend');
// } catch (error) {
// 	console.log(error.message);
// }

// //datatypes
// console.log(`Hello ${lastName}`);

// const age = 30;
// console.log(lastName + city);

// console.log(age + 50);

// const isMarrie = false;

// let items = [1, 2, 3, 4, 5, 6, 'a', true];
// console.log(items);

// const person = {
// 	firstName: 'Karl',
// 	age: 20,
// 	city: 'Berlin',
// };

// // operators

// const result = 5 + 5;
// console.log(result);

// console.log(10 % 3);

// console.log(5 % 2);

// let a = 10;

// a += 5;
// a = a + 5;

// a--;

// // function

// // function declaration
// function greet(person = 'Guest') {
// 	console.log(`Hello ${person}`);
// }
// function addNumbers(a, b = 0) {
// 	return a + b;
// }

// addNumbers(10);
// const resultAdd = addNumbers(5, 5);
// console.log(resultAdd);

// function printNumbers(...numbers) {
// 	console.log(numbers);
// }

// printNumbers(22, 23, 3, 13, 34, 531, 452, 3253, 24);

// //function expression
// const resultGreet = greet();
// console.log(resultGreet);
// greet('Sarah');
// greet();
// greet();
// greet();
// greet();

// const square = function (number) {
// 	return number * number;
// };

// const resultSquared = square(5);

// // arrow function

// const square2 = (number) => number * number;

// const greet2 = () => 'hello';

// //comparisons
// console.log('5' !== 5);
// console.log('5' + 5);
// console.log(5 + '5');
// /*
// >
// >=
// */

// conditioals

// let age = 20;

// if (age > 18) {
// 	console.log('hello');
// } else if (age > 15) {
// 	console.log('ciao');
// } else {
// 	console.log('salut');
// }

// const weekday = 0;

// switch (weekday) {
// 	case 0:
// 		console.log('monday');
// 	case 1:
// 		console.log('tuesday');
// 		break;
// 	case 3:
// 		console.log('wednesday');
// 		break;
// 	default:
// 		console.log('not a valid input');
// }

// const text = 2 > 3 ? 'weird case' : 'everything is normal';

// // loops

// // for loop
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// //while loop

// let sum = 0;

// while (sum < 30) {
// 	console.log('hello');
// 	sum += 5;
// }

// do {
// 	console.log('ich laufe mindestens einmal');
// } while (false);

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < items.length; i++) {
// 	if (items[i] === 5) {
// 		continue;
// 	}
// 	console.log(items[i]);
// }

let age = 20;

if (true || false) {
	let age = 5;
	age++;
}

// function addNumbers(a, b) {
// 	let age = 5;
// 	age++;
// 	return a + b;
// }

// addNumbers(5, 5);
console.log(age);
