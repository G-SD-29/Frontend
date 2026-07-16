// Objekt erstellen
const firstPerson = {
	firstName: 'Karl',
	age: 30,
	friends: ['Hannah', 'John'],
	location: {
		city: 'berlin',
	},
	// greet: () => console.log('hey'),
	email: 'karl@example.org',
};

console.group('\naccess');
// Auf Werte im Objekt zugreifen
const myKey = 'firstName';

console.log(firstPerson.firstName);
console.log(firstPerson['firstName']);
console.log(firstPerson[myKey]);

console.log(firstPerson.friends[0]);
console.log(firstPerson.location.city);
console.groupEnd();

// Werte überschreiben oder hinzufügen
firstPerson.firstName = 'Karla';
firstPerson.isMarried = true;
console.log(firstPerson.firstName);

// Methode des Objekts aufrufen
// firstPerson.greet();

// Key-Value Paar lösen
// delete firstPerson.location;
console.log(firstPerson.location);

// Destructuring
const firstName = firstPerson.firstName;
const { firstName: personName } = firstPerson;
console.log('person:', personName);

const myFriends = [
	{ firstName: 'Hannah', age: 20 },
	{ firstName: 'Karla', age: 50 },
];
const [firstFriend, secondFriend] = myFriends;

const {
	location: { city },
} = firstPerson;

// eigebaute Objekte
const alphabet = ['a', 'b', 'c', 'd'];

const index = Math.floor(Math.random() * alphabet.length);
console.log(alphabet[index]);
console.log(new Date().getMonth());
console.log(new Date().getDay());
console.log(Object.entries(firstPerson));

// Objekte kopieren
// const secondPerson = firstPerson;
const secondPerson = structuredClone(firstPerson);
// spread operator
// const secondPerson = { ...firstPerson, age: 100, pets: ['dog', 'cat'] };

secondPerson.firstName = 'John';
console.log(secondPerson.firstName);
console.log(firstPerson.firstName);

firstPerson.location.city = 'cologne';

console.log(firstPerson.location.city);
console.log(firstPerson.location.city);
console.log(secondPerson.pets);
console.log(firstPerson.pets);

// rest operator
const { email, ...persona } = firstPerson;
console.log(firstPerson.email);
console.log(persona.email);
function addNumbers(a, b, ...numbers) {
	console.log(a);
	console.log(b);
	console.log(numbers);
}

addNumbers(1, 2, 3, 4, 5, 6);

const myArray = [1, 2, 3, 4, 5];
const mySecondArray = structuredClone(myArray);

myArray[0] = 20;

console.log(myArray);
console.log(mySecondArray);
