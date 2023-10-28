/*
English exam

Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above - > pass
else > fail

*/

let english_exam_score; 

if (english_exam_score >= 60) {
    console.log ("Pass");
}

else {
    console.log ("Fail")
}

console.log ("Result of the test");

/*
Retirement age is 65

*/

let retirement_age = 70;

if (retirement_age >= 65) {
    console.log ('You can get retired')
}

else {
    console.log ('You can not get retired!!!')
}

console.log ("Result");


//

let number;

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}

console.log("result");


let number1 = Math.floor(Math.random() * 10); // 0 to 9 both inclusive
console.log(`The random number is ${number1}.`);
if(number1 % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}
if(number % 2 !== 0) {
    console.log('ODD');
}
else {
    console.log('EVEN');
}

let number2 = Math.floor(Math.random() * 2);
if (number2 === 0) {
    console.log ('The number is ZERO');
}
else {
    console.log ('The number is ONE');
}

console.log ("Result");




let num = Math.floor(Math.random() * 2);
console.log(`The random number is ${num}.`);
if(num === 0) {
    console.log('The number is ZERO');
}
else {
    console.log('The number is ONE');
}
// Other way
if(num === 1) {
    console.log('The number is ONE');
}
else {
    console.log('The number is ZERO');
}