/*
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/



let min1 = 1, min2 = 26, min3 = 51, min4 = 76;
let max1 = 25, max2 = 50, max3 = 75, max4 = 100;

const randomNumber1 = (Math.floor(Math.random () * (max1 - min1 +1)) + min1);
const randomNumber2 = (Math.floor(Math.random () * (max2 - min2 +1)) + min2);
const randomNumber3 = (Math.floor(Math.random () * (max3 - min3 +1)) + min3);
const randomNumber4 = (Math.floor(Math.random () * (max4 - min4 +1)) + min4);

const absDiff1 =randomNumber4 - randomNumber1;
const absDiff2 = randomNumber3 - randomNumber2;
const aveNumber = (randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4) / 4;

console.log (absDiff1);
console.log (absDiff2);
console.log(aveNumber);