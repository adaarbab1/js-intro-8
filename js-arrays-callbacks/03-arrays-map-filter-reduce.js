const numbers = [2, 5, 10, 7, 8, 1, 0]; 


// using map

const numbersMultipliedBy3 = numbers.map(number => number *3);
console.log (numbersMultipliedBy3);

const numbersEvenOrOdd = numbers.map (number => number % 2 === 0);
console.log (numbersEvenOrOdd);

// using filter
const evenNumbers = numbers.filter (number => number % 2 === 0);
console.log (evenNumbers); // [ 2, 10, 8, 0 ]

// using reduce

const sum = numbers.reduce ((current, total) => total += current, 0);
console.log (sum);

const countEven  = numbers.reduce ((curr, counter) => {
    if (curr % 2 === 0) return counter + 1;
    else return counter;
}, 0)


/* 
map   -> you return a new array having the same size with the original array but elements are replaced
filter   -> you return partial array and elements within that array matching a specific condition
reduce  -> visits each element in an array and returns a single result

Counting elements
    count evens -> 4
    count odd -> 3
    count numbers divisable by 3    -> 1
    count numbers divisable by 4    -> 2
    count numbers divisable by 5    -> 3

Finding specific element
    find the greatest number     ->10
    find the smallest number     ->0

Accumulate elemets
    find sum of numbers         -> 33
    find product of numbers     -> 0
    find average of the numbers -> 4.7

Filtering and grouping elements
    even numbers                -> [2, 10, 8, 0]
    odd numbers                -> [5, 7, 1]

Change all the elements
    multiply each element by 3;                         -> [6, 15, 30, 21, 24, 3, 0]
    true for even, false for odd                        -> [true, false, true, false, true, false, true]
 
*/