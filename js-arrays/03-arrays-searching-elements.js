const fruits = ['Kiwi', 'Apple', 'Orange', 'Papaya', 'Cherry', 'Apple'];

// includes () method

console.log(fruits.includes ('Apple')); // true
console.log(fruits.includes ('apple')); // false

// check if the array has both 'Kiwi' and "Watermelon" -> false

console.log(fruits.includes('Kiwi') && fruits.includes('Watermelon')); // false

// check if the array has 'Grapes' or 'Strawberry' - > false

console.log(fruits.includes('Grapes') || fruits.includes ('Strawbery')); // false

// indecOf() method

console.log (fruits.indexOf('Apple')); // 1
console.log (fruits.lastIndexOf('Apple')); // 5

console.log (fruits.indexOf('Orange')); // 2
console.log (fruits.lastIndexOf('Orange')); // 2

console.log (fruits.indexOf('Grapes')); // -1
console.log (fruits.lastIndexOf('Strawberry')); // -1

// What are the index of "Kiwi" and "Orange"

console.log(fruits.indexOf('Kiwi'), fruits.indexOf('Orange')); // 0 2


// check if this array contains element 20  -> 
// if it contains 20, print '20 is here' otherwise print '20 is not here'

const numbers = [10, 20, 30];
if (numbers.includes(20)) console.log ('20 is here');
else console.log ('20 is not here');

// Other old way of using

if (numbers.indexOf(20) >= 0) console.log ('20 is here');
else console.log ('20 is not here');

if (numbers.indexOf(20) !== - 1) console.log ('20 is here');
else console.log ('20 is not here');








