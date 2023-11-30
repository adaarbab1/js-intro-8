/* Task 1
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal"
*/

function noSpace (str) {
    return str.split(' ').join('');
}

console.log (noSpace(''));
console.log (noSpace('Javascript')); // Javascript
console.log (noSpace('    Hello   ')); // Hello
console.log (noSpace(' Hello World   ')); // HelloWorld
console.log (noSpace('Tech Global')); // TechGlobal


/* Task 2
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/
function replaceFirstLast (str) {
    var FirstLast = str.trim();
    if (FirstLast.length < 2) return "";
    let First = FirstLast[0];
    let Middle = FirstLast.slice (1, FirstLast.length -1);
    let Last = FirstLast.slice(-1);
    return `${str.slice(-1)}${Middle}${First}`;
}

console.log(replaceFirstLast("")); //  ->  ""
console.log(replaceFirstLast("Hello")); //  ->  "oellH"
console.log(replaceFirstLast("Tech Global")); //  -> "lech GlobaT"
console.log(replaceFirstLast("A")); //  -> ""
console.log(replaceFirstLast("    A      ")); //  -> "")


/* Task 3
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/

function hasVowel (str) {
    const vowel = 'aeoui';
    for (const elements of str)
    if (vowel.includes(elements.toLowerCase())) return true;
    else return false
}

console.log (hasVowel (''));
console.log (hasVowel ('Javascript'));
console.log (hasVowel ('Tech Global'));
console.log (hasVowel ('1234'));
console.log (hasVowel ('ABC'));

/* Task 4
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.

*/

function checkAge (number) {
    let yearofBirth = 2023 - number;
    if (yearofBirth < 16) console.log ('AGE IS NOT ALLOWED');
    else if (yearofBirth < 120) console.log ('AGE IS ALLOWED');
    else console.log ('AGE IS NOT VALID');
}

console.log (checkAge (2015)); // AGE IS NOT ALLOWED
console.log (checkAge (2007)); //AGE IS ALLOWED
console.log (checkAge (2050)); // AGE IS NOT ALLOWED
console.log (checkAge (1920)); // AGE IS ALLOWED
console.log (checkAge (1800)); // AGE IS NOT VALID

/* Task 5
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/

function averageOfEdges (num1, num2, num3) {
    let min = Math.min (num1, num2, num3);
    let max = Math.max (num1, num2, num3);
    return ((max + min) / 2);
}

console.log (averageOfEdges(0, 0, 0));
console.log (averageOfEdges(0, 0, 6));
console.log (averageOfEdges(-2, -2, 10));
console.log (averageOfEdges(-3, 15, -3));
console.log (averageOfEdges(10, 13, 20));


/* Task 6
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###"
*/

function noA(arr) {
    const arr1 = [];
    for(const a of arr) {
        if(a.toLowerCase().includes('a')) arr1.push('###');
        else arr1.push(a);
    }
    console.log(arr1);
}
console.log (noA(["javascript", "hello", "123", "xyz"]));
console.log (noA(["apple", "123", "ABC", "javascript"]));
console.log (noA(["apple", "abc", "ABC", "Alex", "A"]));


/* Task 7
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
*/

function no3and5 (array) {
    const ar = [];
    for(const a of array) {
        if(a % 3 === 0 && a % 5 === 0) ar.push(101);
        else if(a % 3 === 0) ar.push(100);
        else if(a % 5 === 0) ar.push(99);
        else ar.push(a);
    }
    console.log(ar);
}

console.log (no3and5([7, 4, 11, 23, 17]));
console.log (no3and5([3, 4, 5, 6]));
console.log (no3and5([10, 11, 12, 13, 14, 15]));


/* Task 8
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.

*/

function countPrimes (array) {
    let count = 0;
  array.forEach((num) => {
    if (num < 2) return count;
    if (num === 2 || num === 3) count++;
    if (num % 2 === 0 || num % 3 === 0) return count;

    let a = 5;
    while (a < num) {
      if (num %  a === 0) return count;
      a += 2;
    }

    count++;
  });
  return count;
};

console.log (countPrimes([-10, -3, 0, 1])); // 0
console.log (countPrimes([7, 4, 11, 23, 17])); // 4
console.log (countPrimes([41, 53, 19, 47, 67])); // 5

/* Task 9
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
*/

function removeDubplicates (array) {
    const result = [];
    for (const arr of array) {
        if (arr !== result) result.push(arr);
        return result
    }
}

console.log (removeDubplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log (removeDubplicates([1, 2, 5, 2, 3]));
console.log (removeDubplicates([0, -1, -2, -2, -1]));
console.log (removeDubplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log (removeDubplicates(["1", "2", "3", "2", "3"]));

/* Task 10
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
*/

function isDateFormatValid (str) {
    let str1 = str.trim().split("/");
  if (
    str1[0].length === 2 &&
    str1[0] <= 12 &&
    str1[1].length === 2 &&
    str1[2].length === 4
  )
    return true;
  else return false;
};

console.log (isDateFormatValid(""));
console.log (isDateFormatValid("15/30/2020"));
console.log (isDateFormatValid("10-30-2020"));
console.log (isDateFormatValid("10.30.2020"));
console.log (isDateFormatValid("5/30/2020"));
console.log (isDateFormatValid("05/30/2020"));
console.log (isDateFormatValid("10/2/2020"));
console.log (isDateFormatValid("10/02/2020"));

/* Task 11
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
*/

function secondMax (array) {
    if (array.length === 1) return array[0];
  let maxNumber = Math.max(...array);
  let array2 = array.filter((number) => number !== maxNumber);
  return Math.max(...array2);
};

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // 	-> 7
console.log(secondMax([3, 4, 5, 6])); //	-> 5
console.log(secondMax([10])); //		-> 10


/* Task 12
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number
*/

function secondMin (array) {
    if (array.length === 1) return array[0];
    let maxNumber = Math.min(...array);
    let array2 = array.filter((number) => number !== maxNumber);
    return Math.min(...array2);
};

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMin([3, 4, 5, 6])); // 4
console.log(secondMin([10])); // 10


/*  Task 13
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.

*/

function mostRepeated (array) {
    if(array.length === 1) return array[0];
    
}

console.log (mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log (mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log (mostRepeated([10]));
console.log (mostRepeated(["Tech Global"]));


const singer = {
    eat: function () {
        console.log ('EAT');
    },
    sleep: function () {
        console.log ('SLEEP');
    },
    walk: function () {
        console.log ('WALK')
    },
    sing: function () {
        console.log ('SING')
    }
}
