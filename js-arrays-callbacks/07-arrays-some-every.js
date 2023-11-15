const numbers = [ -5, 0, 5, 10, 23, -10];

// check if some elements are divisable by 5 -> true

const result1 = numbers.some(number => number % 5 === 0);
console.log (result1);

console.log (numbers.some(number=>number % 2 === 0));
console.log (numbers.some(number=>number % 2 !== 0));

console.log (numbers.every(number=>number < 0));
console.log (numbers.every(number=>number > 0));

const cities = ['Rome', 'Kyiv', 'Paris', 'Milan'];
// Check if every city has 4 or 5 letters   -> false

console.log (cities.every(city => city.length ===4 || city.length === 5)); // false

 