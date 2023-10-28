// Task 1

let str1 = '5', str2 = '2';

let num1 = parseFloat(str1);
let num2 =parseFloat (str2);

console.log(`The sum of ${str1} and ${str2} is = ${num1 + num2}`);
console.log(`The product of ${str1} and ${str2} is = ${num1 * num2}`);
console.log(`The division of ${str1} and ${str2} is = ${num1 / num2}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${num1 - num2}`);
console.log(`The remainder of ${str1} and ${str2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${num1 ** num2}`);

// Task 2

let s1 = '200', s2 = '-50';

let n1 = parseFloat (s1);
let n2 = parseFloat (s2);

console.log(`The greatest value is =  ${Math.max(n1, n2)}`);
console.log(`The smallest value is =  ${Math.min(n1, n2)}`);
console.log(`The average is =  ${(n1 + n2) / 2 }`); 
console.log (`The absolute difference is = ${Math.abs (n1 - n2)}`);


// Task 3

let min = 1;
let max = 50;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(`The absolute difference between numbers is = ${Math.abs (max - min)}`);

// Task 4

let r1 = 1;
let r2 = 50;

random = (Math.floor(Math.random () * (r2 - r1 + 1)) + r1);
console.log (random); // 5, 27, 13, 40, 8

console.log(Math.max(5, 27, 13, 40, 8)); // 40
console.log(Math.min(5, 27, 13, 40, 8)); // 5

// Task 5

rand1 = 50;
rand2 = 100;

console.log (`The number 1 = ${Math.floor(Math.random () * (rand2 - rand1 +1)) + rand1}`); // 50
console.log (`The number 2 = ${Math.floor(Math.random () * (rand2 - rand1 +1)) + rand1}`); // 73
console.log (`The number 3 = ${Math.floor(Math.random () * (rand2 - rand1 +1)) + rand1}`); // 77
console.log (`The sum of numbers = ${50 + 73 + 77}`); // 200

// Task 6

let numb1 = Math.floor(Math.random()*(100-1+1)+1);
let numb2 = Math.floor(Math.random()*(100-1+1)+1);
let numb3 = Math.floor(Math.random()*(100-1+1)+1);
result1 = numb1>25;
result2 = numb2>25;
result3 = numb3>25;
console.log(numb1,",",result1);
console.log(numb2,",",result2);
console.log(numb3,",",result3);

// Task 7

let name = 'David';
console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name.charAt(0)}`);
console.log (`The last character in the name is = ${name.charAt(name.length-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);






