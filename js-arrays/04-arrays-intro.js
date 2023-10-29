


// Spread Operator

const words = ['Hello', 'Hi', 'World']; 
const words2 = ['Good', 'Morning']; 
console.log (words); // // [ 'Hello', 'Hi', 'World' ]
console.log (words2); // [ 'Good', 'Morning' ]


console.log(words.concat(words2)); // [ 'Hello', 'Hi', 'World', 'Good', 'Morning' ]
console.log ([...words, ...words2]); // [ 'Hello', 'Hi', 'World', 'Good', 'Morning' ]

console.log ([...words2, ...words]); //[ 'Good', 'Morning', 'Hello', 'Hi', 'World' ]


const words3 = ['Sunday', ...words, 'Monday', ... words2];

// Find min and max numbers from the below array

const numbers = [5, 7, -2, 10];

let min = Math.min (...numbers);
let max = Math.max (...numbers);
console.log (min); // -2
console.log (max); // 10
