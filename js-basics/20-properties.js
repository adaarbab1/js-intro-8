console.log (Number.MAX_SAFE_INTEGER); // can store numbers up to 16
console.log (Number.MIN_SAFE_INTEGER); // can store numbers up to - 16


console.log (Number.NEGATIVE_INFINITY); // -INFINITY
console.log (Number.POSITIVE_INFINITY); // INFINITY

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.NaN); // NaN



// Number functiond: Functions are specific components executed to perform task

console.log (1 + 2 );

console.log ('1' + 2); // '12'

let a =5, b = 10;

console.log (a + b);
console.log (a.toString()+ b); // '510'

console.log (a + b.toString()); // '510'

let i1 = 100.999, i2 = 10.499;

console.log (i1.toFixed()); // 101 truncating all the decimal part and rounding
console.log (i2.toFixed()); // 10

console.log (i1.toFixed(2)); //101.00
console.log (i2.toFixed(2)); // 10.50

console.log (i1.toPrecision(3)); // 101
console.log (i2.toPrecision(3)); // 10.5


// Converting other data types to numbers

let str = '10', number  = 1, myB = true, var1 = null, var2 = undefined;

console.log(str + number); // '101'
console.log (Number(str) + number); // 11
console.log (parseInt(str) + number); // 11

console.log (myB + number); // 1


// parseInt() vs parseFloat ()

let str1 = '10.5', str2 = '10';

console.log(Number(str1) + 1);
console.log(parseInt(str1) + 1);
console.log(parseFloat(str1) + 1);

console.log(Number(str2) + 1);
console.log(parseInt(str2) + 1);
console.log(parseFloat(str2) + 1);

// If you want to check if a number is safe or not | integer or not
// 10 -> sage integer, integer (whole number)
// 937378383399390202002020883 -> not a safe integer, integer

console.log(Number.isSafeInteger(10));
console.log(Number.isInteger(10));


console.log(Number.isSafeInteger(1044559696874747422));
console.log(Number.isInteger(1044559696874747422));