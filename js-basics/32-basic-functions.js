/*
Write a function called isPositive that takes an argument and returns true if the arg is positive, and false otherwise.

isPositive(5)   -> true
isPositive(0)   -> false
isPositive(-7)   -> false
isPositive(15)   -> true
isPositive(123)   -> true

Positive numbers are the numbers greater than zero
Negative numbers are the numbers less than zero
Zero is not a negative or a positive number, it is neutral
*/

function isPositive(arg) {
    return arg > 0;
}

console.log(isPositive(5));
console.log(isPositive(17));
console.log(isPositive(150));
console.log(isPositive(0));
console.log(isPositive(-15));


/*
Write a function called isNegative that takes an argument and returns true if the arg is negative, and false otherwise.

isNegative(5)   -> false
isNegative(0)   -> false
isNegative(-7)   -> true
isNegative(15)   -> false
isNegative(123)   -> false

Positive numbers are the numbers greater than zero
Negative numbers are the numbers less than zero
Zero is not a negative or a positive number, it is neutral

Positive: number > 0
Negative: number < 0
Neutral: number === 0
*/

function isNegative(arg) {
    return arg < 0;
}

console.log(isNegative(5));
console.log(isNegative(0));
console.log(isNegative(-7));
console.log(isNegative(15));
console.log(isNegative(123));

/*
Write a functions called getFirstChar that takes an argument and returns the first character from the argument

getFirstChar("Hello")       -> "H"
getFirstChar("12345")       -> "1"
getFirstChar("")            -> undefined
getFirstChar("   ")         -> " "
*/

function getFirstChar(arg) {
    return (arg[0]);
}

console.log(getFirstChar("Hello"));
console.log(getFirstChar('12345'));
console.log(getFirstChar(""));
console.log(getFirstChar("    "));


function getLastFirstChar(arg) {
    return (arg[0] +arg[arg.length-1]);
}

console.log(getLastFirstChar("Hello"));
console.log(getLastFirstChar('12345'));
console.log(getLastFirstChar(""));
console.log(getLastFirstChar("    "));
console.log(getLastFirstChar("a"));

function average5(x, y, z, a, b) {
    return (x + y + z + a + b ) / 5;
}

console.log(average5 (1, 2, 3, 4, 5));
console.log(average5 (3, 7, 10, 5, 5));

