//1)
const numbers = [1, 2, 3, 4, 5];

//2)
numbers.forEach((el) => console.log(el));

//3)
let sum = 0;

numbers.forEach((el) => (sum += el));
console.log(sum);

//4)
const squaredNumbers = [];

numbers.forEach((el) => squaredNumbers.push(el * el));
console.log(squaredNumbers);
