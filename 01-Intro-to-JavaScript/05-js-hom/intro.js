const myNumbers = [1, 2, 3, 4, 5];

function log(el, idx, arr) {
	// arr.push('e');
	console.log(el);
	console.log(idx);
	console.log(arr);
}

// foreach
// const result = myNumbers.forEach(log);
// console.log(result);
// console.log(myNumbers);
//

// for (let i = 0; i < myNumbers.length; i++) {
// 	console.log(myNumbers[i]);
// }

// map

function multiplyBy2(el, idx, arr) {
	return el * 2;
}

// const result2 = myNumbers.map(multiplyBy2);
// const result2 = myNumbers.map((el, idx, arr) => el * 2);
// console.log(result2);

// const result3 = [];

// for (let i = 0; i < myNumbers.length; i++) {
// 	result3.push(myNumbers[i] * 2);
// }

// find

// const found = myNumbers.find((el) => el > 3);
// console.log(found);

//filter
// const found2 = myNumbers.filter((el) => el > 3);
// console.log(found2);

// some
// const checked = myNumbers.some((el) => el > 1);
// console.log(checked);

// every

// const checked2 = myNumbers.every((el) => el > 0);
// console.log(checked2);

//reduce

// const sum = myNumbers.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// }, 0);

// console.log(sum);

const books = [
	{ title: 'The Hobbit', genre: 'Fantasy', price: 10 },
	{ title: 'Dune', genre: 'Sci-Fi', price: 15 },
	{ title: 'Fahrenheit 451', genre: 'Sci-Fi', price: 20 },
];

books.forEach((el) => console.log(el.title));

const sciFiBooks = books.filter((el) => el.genre === 'Sci-Fi');
console.log(sciFiBooks);

const fantasyExists = books.some((el) => el.genre === 'Fantasy');
console.log(fantasyExists);

const totalCost = books.reduce((acc, curr) => {
	return acc + curr.price;
}, 0);

console.log(totalCost);

const booksWithAuthor = books.map((el) => ({ ...el, author: 'unkown' }));

console.log(booksWithAuthor);
console.log(books);
