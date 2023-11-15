// Array methods recap

const fruit = ['Apple', 'Banana', 'Cherry', 'Kiwi'];

// 0, 1, 2 [?]

// find index of Cherry

let index = fruit.indexOf('Cherry');
console.log (index);

const fruits2 =  ['Apple', 'Banana', 'Cherry', 'Kiwi', 'Cherry'];
let lindex = fruits2.lastIndexOf ('Cherry');
console.log (lindex);

// How would you create your own sort method?

console.log (fruit.sort());

// map - returns an new array

const nums = [1, 2, 3]; // => double this arrat => [2, 4, 6]

let doubleNums = [];
for (let i = 0; i < nums.length; i++) {
    doubleNums.push(nums[i] * 2);
}
console.log (doubleNums); // [ 2, 4, 6 ]

const doubleTheNum = (num) => num * 2; // use before initilization
const dblNums = nums.map(doubleTheNum);
