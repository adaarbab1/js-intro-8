const numbers = [3, 4, 7, 3, 2, 2, 7];

let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log ('Sum:', sum);
console.log ('Average:', sum / numbers.length);

let sumOfEvenIndex = 0;
for (let i = 0; i <= numbers.length -1; i++) {
    if (i % 2 === 0) sumOfEvenIndex += numbers [i];
}

console.log (sumOfEvenIndex);

const nums = [3, 4, 7, 3, 2]; // 42 * 12
// Find the multiplication of all numbers         -> 504

let product = 1;

for (const num of nums) {
    product *= num;
}

console.log (product);

let productOfOddIndex = 1;
for (let i = 0; i < numbs.length; i++) {
    if (i % 2 !== 0) productOfOddIndex *= numbs [i];
}

console.log (productOfOddIndex);