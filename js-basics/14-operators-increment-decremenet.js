/*
-- decrement
++ increment

They are used to increase or decrease the value of variable by 1.


*/

let num = 5;

num++;
console.log(num);

let num2 = 10;

num2--;
console.log(num2);

// post-icremenet vs pre-increment

let a = 5, b = 5;

let x = a++;

let y = ++b;

console.log(a);
console.log(x);

console.log(b);
console.log(y);


// loops

let number1 = 1, number2 = 3;

number1 += ++number2; //   4

let number3 = --number1; //  4

number3--; // 3 

console.log(number1);
console.log(number2);
console.log(number3);

