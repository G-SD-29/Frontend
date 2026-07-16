//1)
const numbers = [1, 2, 3, 4, 5];

//2)
const doubledNumbers = numbers.map((el) => el * 2);
console.log(doubledNumbers);

//3)
const stringNumbers = numbers.map((el) => `Number: ${el}`);
console.log(stringNumbers);

//4)
const numberObjects = numbers.map((el) => ({ original: el, squared: el * el }));
console.log(numberObjects);
