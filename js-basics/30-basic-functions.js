
// Kick off

console.log('Start the meeting');
console.log('Create a file');
console.log('Start coding');



function kickOff() {
    console.log('Start the meeting');
    console.log('Create a file');
    console.log('Start coding');
}

kickOff ();
kickOff();


// Create a function that outputs "Good Morning"

function greet() {
    console.log("Good morning");
}

greet();

// Create a function that takes an argument name and says "Hello name"

//sayHello ('Hana')  ---> "Hello Hana"
// sayHello ('Dylan') --- > "Hello Dylan"


sayHello('John'); // "Hello John"
sayHello('Alex'); // "Hello Alex"
sayHello('Suzanne'); // "Hello Suzanne"


function sayHello(name) {
    console.log(`Hello ${name}`);
}

// RETURN TYPE FUNCTION
// Create a function that takes 2 arguments and returns their sum

function sum (arg1, arg2) {
    console.log(arg1 + arg2);
}

sum(3, 5);
sum(1, 2);



function sum (a, b) {
    return a + b;
}

let result1 = sum(3, 5);
console.log(result1);
let result2 = sum(1, 2);
console.log(sum(1, 2));


// Write a function that takes 3 arguments and returns their product

// product (1, 2, 3)  --->6
// product (3, 7, 10)  --->210

function product (x, y, z) {
    let result = x * y * z;
    return result;
}

console.log(product (1, 2, 3));
console.log(product (3, 7, 10));



