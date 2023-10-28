/*Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 

Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'abcd';
console.log (`The first 2 characters are = ${s4.slice(0, 2)}`);
console.log (`The last 2 characters are  = ${s4.slice(-2)} `);
console.log (`The other characters are = ${s4.slice()}`);

let s1 ='JavaScipt';

console.log (`The first 2 characters are = ${s1.slice(0, 2)}`);
console.log (`The last 2 characters are  = ${s1.slice(-2)} `);
console.log (`The other characters are = ${s1.slice(2, s1.length -2)}`);


let test1 = "";
console.log(test1.startsWith("xx"), test1.endsWith("xx"));

let test2 ="red";
console.log(test2.startsWith("xx"), test2.endsWith("xx"));

let test3 = 'green';
console.log(test3.startsWith("xx"), test3.endsWith("xx"));

let test4 = "xxbluexx";
console.log(test4.startsWith("xx"), test4.endsWith("xx"));


/*
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 


*/

str5 = "";
str6 = " ";
str7 = "I like Apple";
str8 = "Apple like I";
str9 = "JavaScript is nice to learn";
str10 = "learn is nice to JavaScript"

function first_last (str) {
    const first = str.slice(0, str.indexOf (''));
    const last = str.slice(str.lastIndexOf (" ") + 1);
    const middle = str.slice (str.indexOf(" "), str.lastIndexOf (" ") +1);

    console.log (last + middle + first);

    const fIdx = str.indexOf(' ');
    const lIdx = str.lastIndexOf (' ');

    console.log (str.slice(lIdx + 1) + str.slice (fIdx, lIdx + 1) + str.slice (0, fIdx));
}

first_last (str5);
first_last (str6);
first_last (str7);
first_last (str8);
first_last (str9);
first_last (str10);

