//1)
const numbers = [4, 8, 15, 16, 23, 42];

//2)
const gt20 = numbers.some((el) => el > 20);
console.log(gt20);

//3)
const lt50 = numbers.every((el) => el < 50);
console.log(lt50);

//4)
const students = [
	{ name: 'Alice', age: 25, passed: true },
	{ name: 'Bob', age: 22, passed: false },
	{ name: 'Charlie', age: 27, passed: true },
	{ name: 'David', age: 20, passed: true },
];

//5)
const someoneFailed = students.some((el) => el.passed == false);
console.log(someoneFailed);

//6)
const allOver18 = students.every((student) => student.age > 18);
console.log(allOver18);
