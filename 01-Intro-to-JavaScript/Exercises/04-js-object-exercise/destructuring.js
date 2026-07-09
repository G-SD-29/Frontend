const fruits = ['apple', 'banana', 'cherry', 'date'];

const [fruit1, fruit2] = fruits;
// const fruitA = fruits[0];
// const fruitB = fruits[1];

const [fruitA, , fruitC] = fruits;
console.log(fruitA);
console.log(fruitC);

// Initial object
const realPerson = {
	name: 'John Doe',
	age: 30,
	address: {
		city: 'New York',
		zip: '10001',
	},
};

const { name, age } = person;
console.log(name);
console.log(age);

// Initial function
function displayPerson({ name, age }) {
	console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(realPerson);
