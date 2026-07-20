// // function constructors
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;

// 	this.describe = function () {
// 		return `${this.name} is ${this.age} years old`;
// 	};
// }

// Person.prototype.describe = function () {
// 	return `${this.name} is ${this.age} years old`;
// };

// let alice = new Person('Alice', 25);
// let sarah = new Person('Sarah', 30);
// console.log(alice.describe());
// console.log(sarah.describe());
// console.log(alice);
// console.log(sarah);

// //
// class Human {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	describe() {
// 		return `${this.name} is ${this.age} years old`;
// 	}
// }

// let bob = new Human('Bob', 30);
// console.log(bob.describe());

// console.log(bob);

// console.log(this);

// function addNumbers(a, b) {
// 	console.log(this);
// 	return a + b;
// }

// addNumbers();

// let karl = {
// 	name: 'Karl',
// 	greet: () => {
// 		console.log(this?.name);
// 	},
// 	hobbies: ['coding', 'reading', 'swimming'],

// 	listHobbies: function () {
// 		this.hobbies.forEach((hobby) => {
// 			console.log(`My name is ${this?.name} and I like ${hobby}`);
// 		});
// 	},
// };

// karl.greet();

// karl.listHobbies();

class Character {
	#name;
	#health;
	#strength;

	constructor(name, health, strength) {
		this.#name = name;
		this.#health = health;
		this.#strength = strength;
	}

	getName() {
		//
		return this.#name;
	}

	getHealth() {
		return this.#health;
	}

	takeDamage(damage) {
		this.#health -= damage;
		if (this.#health < 0) {
			this.#health = 0;
		}
	}

	attack(target) {
		target.takeDamage(this.#strength);
	}
}

const characterOne = new Character('Karl', 100, 50);
const characterTwo = new Character('Jane', 100, 75);

characterOne.attack(characterTwo);

console.log(characterTwo.getHealth());

class Wizard extends Character {
	#mana;

	constructor(name, health, strength, mana) {
		super(name, health, strength);
		this.#mana = mana;
	}

	getMana() {
		return this.#mana;
	}

	greet() {
		return 'I can do magic';
	}
}

const wizardOne = new Wizard('Harald', 200, 100, 50);
console.log(wizardOne.greet());
console.log(characterOne);
console.log(wizardOne);
