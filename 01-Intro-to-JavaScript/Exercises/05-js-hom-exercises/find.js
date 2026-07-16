//1)
const numbers = [10, 20, 30, 40, 50];

//2)
const gt25 = numbers.find((el) => el > 25);
console.log(gt25);

//3)
const people = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 35 },
	{ name: 'David', age: 40 },
];

//4)
const charlie = people.find((el) => el.name === 'Charlie');
console.log(charlie);
