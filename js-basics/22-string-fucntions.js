// createing a variable that stores string
let fname = "John";
let lname = "Doe";

console.log('The full name is' + fname + "  " + lname + "."); // 

console.log (`The full name is ${fname} ${lname}.` );


favBook = "JS Algorithms & Data Structure";
favColor = "Blue";
favNumber = 7;


console.log(`The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`);


// Interpolation

let quantity = 5; product = 'Pen', price = 2;

// I bought 5 Pen items for $10.

//console.log('I bought' + quantity + " " + product + ' items for $' + quantity * price + ".");

console.log(`I bought ${quantity} ${product} items for $${quantity * price}.`);
