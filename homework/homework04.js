/* Task 1:
Requirement:
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).

*/

for(let i = 0; i <= 100; i++) {
    if(i % 7 === 0) console.log(i); 
}

/* Task 2.
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
*/


for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0 ) console.log(i); 
}

/* Task 3.
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
*/
for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0 ) console.log(i); 
}

/* Task 4
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!! 
*/



let x = 0;
while (x <= 7) {
    console.log (`The square of of ${x} is ${Math.pow(x, 2)}`);
    x++
}

/* Task 5

Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive) */

let sum = 0;

for(let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum); 

/* Task 6

Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

*/

let num = Math.floor(Math.random() * 10) + 1;
function factorial(num) {  
    if (num === 0) {  
        return 1;  
    }  
    else {  
        return num * factorial( num - 1 );  
    }  
}  
  
console.log(factorial(num));

/* Task 7

Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it. */

let ranNum;
let attempt = 0;

do {
    ranNum = Math.floor(Math.random() * 100) + 1; 
    console.log(ranNum);
    attempt++;
} while (ranNum % 5 !== 0);

console.log(`The random number is  ${ranNum} and it took ${attempt} attempts to generate it.`);

/* Task 8
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically */

let country = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log (country);
console.log (country.sort());

/* Task 9 
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
*/


let cartoonDog =  ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log (cartoonDog);
if (cartoonDog.includes('Pluto')) console.log (true);

/* Task 10 

Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false 
*/

cartoonCat = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log (cartoonCat.sort());
if (cartoonCat.includes ('Garfield' && 'Felix')) console.log (true);
else (false);

/* Task 11
Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element 
*/

const numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);
let result = numbers.values();

for (let elements of result) {
    console.log(elements);
}


/* Task 12
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
*/

const objects = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"];
let countBP = 0;
let hasBookOrPen = 0;
for (let i = 0; i < objects.length; i++) {
  if (
    objects[i][0].toUpperCase() === "B" ||
    objects[i][0].toUpperCase() === "P"
  ) {
    countBP++;
  }
  if (
    objects[i].toLowerCase().includes("book") ||
    objects[i].toLowerCase().includes("pen")
  ) {
    hasBookOrPen++;
  }
}
console.log(`Elements starting with 'B' or 'P' = ${countBP}
Elements having 'book' or 'pen' = ${hasBookOrPen}`);

/* Task 12
Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
*/

const numbers1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers1);
let moreThan10 = 0;
let lessThan10 = 0;
let count10 = 0;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] === 10) count10++;
  if (numbers1[i] < 10) lessThan10++;
  if (numbers1[i] > 10) moreThan10++;
}
console.log(`Elements that are more than 10 = ${moreThan10}
Elements that are less than 10 = ${lessThan10}
Elements that are 10 = ${count10}`);

/* Task 14
Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
*/

const arr1 = [5, 8, 13, 1, 2];
const arr2 = [9, 3, 67, 1, 0];
const arr3 = [];
for (let i = 0; i < arr1.length; i++) {
  arr3.push(Math.max(arr1[i], arr2[i]));
}
console.log(`1st array is =  ${arr1}
2nd array is = ${arr2}
3rd array is =  ${arr3}`);

/* Task 15
 *Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
*/

function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
    return -1;
  }
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));

/* Task 16
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
*/

function getDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        if (!result.includes(arr[j])) result.push(arr[j]);
      }
    }
  }
  return result;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); //-[ 0, -7 ]
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

/* Task 17
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
 */

function reverseStringWords(str) {
  let arr1 = str.split(" ");
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let reversed = arr1[i].split("").reverse().join("");
    result.push(reversed);
  }
  return result.join(" ");
}
console.log(reverseStringWords("Hello World"));

/* Task 18
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
 */

function getEvens(num1, num2) {
  let result = [];

  if (num1 === num2 && num1 % 2 !== 0) return result;

  const minArg = Math.min(num1, num2);
  const maxArg = Math.max(num1, num2);

  if (minArg % 2 !== 0) {
    for (let i = minArg + 1; i <= maxArg; i += 2) result.push(i);
  }
  if (minArg % 2 === 0) {
    for (let i = minArg; i <= maxArg; i += 2) result.push(i);
  }
  return result;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

/* Task 19
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.
*/

function getMultipleOf5(num1, num2) {
  let result = [];
  if (num1 === num2 && num1 % 5 === 0) return [num1];

  if (num1 < 5 && num2 < 5) return result;

  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      if (i % 5 === 0) result.push(i);
    }
  }

  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      if (i % 5 === 0) result.push(i);
    }
  }
  return result;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5)); 
console.log(getMultipleOf5(5, 5)); 
console.log(getMultipleOf5(2, 4)); 

/* Task 20
Write a function named as fizzBuzz() which takes 2 number arguments and 
returns a string composed with below requirements when invoked.
•You need to find all the numbers within the range of given 2 numbers (both inclusive) and 
store them in a string from smallest to greatest number with a ' | ' separator for each number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
*/

function fizzBuzz(num1, num2) {
  let result = [];

  let startMin = Math.min(num1, num2);
  let endMax = Math.max(num1, num2);

  for (let i = startMin; i <= endMax; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result.join(" | ");
}
console.log(fizzBuzz(13, 18)); 
console.log(fizzBuzz(12, 5)); 
console.log(fizzBuzz(5, 5)); 
console.log(fizzBuzz(9, 6)); 