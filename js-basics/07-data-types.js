// strings which is used to store text data
// strings can be stored in single or double quotes


let myName = 'John';
let myCity = 'Chicago';
let mySchool = 'TechGlobal';

console.log(myName);
console.log (typeof myName);

let ssn = "000-00-0000"
let phoneNumber = "(312)000-0000";

console.log (typeof ssn);
console.log (typeof phoneNumber);

// numbers
// we store in variables without any signle or double quotes


let age = 45;

console.log(age); //45
console.log (typeof age); 

let years = 2023;

let balance = 100.5
console.log (balance); // 100.5
console.log (typeof balance); //number


// We can write some message to clearly output oyr date to console

let fullName = 'John Doe'
let favNumber = 7;
let dailyExpense = 65.75

console.log('The full name of the person is = ' + fullName);
console.log('The favorite number of the person is = ' + favNumber);
console.log('Daily expense of the person is = ' + dailyExpense);


// boolean

let b1 5 > 3; // true
let b2 =  5*2 =  10; // true

let b3 = 10 <7 ; // false
let b4 = 5 >=5; // true 

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

// 4. undefined

let var1;
let var2 = undefined;

console.log(var1); // undefined
console.log(var2); // undefined

console.log(typeof var1);
console.log(typeof var2);


// 5. null is used to state that the variable does not point to any data or value

let var3 =  null;
console.log (var3);
console.log (typeof null);

// BigInteger

let number = 91234567891234568;

console.log (number); 

let number2 = 91234567891234568n;
console.log(number2);
console.log (typeof number2); // bigint


let number3 = BigInt ('91234567891234568');
console.log (number3);
console.log (typeof number3);

let maxSafeNumber = Number.MAX_SAFE_INTEGER;
let minSafeNumber = Number.MIN_SAFE_INTEGER;

console.log(maxSafeNumber);
console.log (minSafeNumber);




