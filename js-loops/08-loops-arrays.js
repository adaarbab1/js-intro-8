/*
Assume you are given an array that stores numbers
Count how many positive numbers you have in the below array     -> 4
*/

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];



let divByFive = 0;
for (const number of numbers) {
    if (number % 5 == 0) divByFive++;

}
console.log (divByFive);


