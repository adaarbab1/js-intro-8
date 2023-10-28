/*
Find if sum of 2 random numbers is even or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
*/

let num1 = Math.floor(Math.random() *10 ) +1;
let num2 = Math.floor(Math.random() *10 ) +1;
if ((num1 + num2) % 2 == 0 ) console.log (true);
else console.log (false);