/*  Task 1
Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0 */
let numbers  = [-45, 0, 0, 34, 5, 67];
const countPos = numbers.reduce ((counter, curr) => curr > 0 ? counter + 1 : counter, 0);
console.log (countPos); // 3

let numbers1 = [-23, -4, 0, 2, 5, 90, 123];
const countPos1 = numbers1.reduce ((counter, curr) => curr > 0 ? counter + 1 : counter, 0);
console.log (countPos1); // 4

let numbers2 = [0, -1, -2, -3];
const countPos2 = numbers2.reduce ((counter, curr) => curr > 0 ? counter + 1 : counter, 0);
console.log (countPos2); // 0 


/* Task 2 
Requirement:
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
*/

let str  = "TechGlobal is a QA bootcamp";
let countA = 0;

for(let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === 'a') countA++;
}

// countA("QA stands for Quality Assurance")  -> 5

console.log(countA); // 4

let str1  = "QA stands for Quality Assurance";
let countA1 = 0;

for(let i = 0; i < str1.length; i++) {
    if(str1[i].toLowerCase() === 'a') countA1++;
}

console.log(countA1); // 5

// countA("Cypress")  -> 0 

let str2  = "Cypress";
let countA2 = 0;

for(let i = 0; i < str2.length; i++) {
    if(str2[i].toLowerCase() === 'a') countA2++;
}

console.log(countA2); // 0 

/* Task 3

Requirement: 
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0 
*/

function countVowels(str) {
    let vowelCount = 0; 
    if(str.includes('AEIOUaeiou')) vowelCount++;
}                            


console.log(countVowels("Hello"));           		// 2
console.log(countVowels("Hello World")); 	    	// 3
console.log(countVowels("JavaScript is fun")); 		// 5
console.log(countVowels(""));                  // 0

/* Task 4
Requirement: 
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0 
*/

function countConsonants(str) {
    let consonantCount = 0;
    for (const letter of str) {
        if (!'AEIOUaeiou'.includes(letter)) consonantCount++;
    }
    return consonantCount;
}
console.log(countConsonants('Hello')); // 3
console.log(countConsonants('Hello World')); // 8
console.log(countConsonants('JavaScript is fun')); // 12
console.log(countConsonants('')); // 0

/* Task 5
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.  -> 6 
countWords("1 2 3 4") -> 4

*/
function countWords (str) {
    return str.trim().split(' ').length;
    }

console.log (countWords ('JavaScript is fun')); // 3
console.log (countWords ('Cypress is an UI automation tool')); // 6
console.log (countWords ('1 2 3 4')); // 4

/* Task 6
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

function factorial (numb) {
    let factorialNumb = 1;
    for (i = numb; i >= 2; i--) {
        factorialNumb *= i;
    }
return factorialNumb;
}

console.log (factorial(5)); //120
console.log (factorial(4)); // 24
console.log (factorial(0)); // 1
console.log (factorial(1)); // 1

/* Task 7
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/

function isPalindrome(str) {
    if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) return true;
    else return false;
}

console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Kayak")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); // true

/* Task 8
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])  -> 4
countMultipleWords([ ]) -> 0
*/

function countMultipleWords (arr) {
    let countMultipleWords = 0;
    for (const element of arr) {
        if (element.trim().includes(' ')) {
            countMultipleWords++;
        }
    }
    return countMultipleWords;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])); // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])); // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); // 4
console.log(countMultipleWords([ ])); // 0

/* Task 9
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/

function count3OrLess (str) {
    let count3OrLess = 0;
    let arg = str.trim().split (' ')
    for (element of arg) {
        if (element === '') return 0;
        if (element.length <= 3) count3OrLess++
    }
    return count3OrLess;
}

console.log (count3OrLess('Hello')); // 0
console.log (count3OrLess('Hi John')); // 1
console.log (count3OrLess('JavaScript is fun')); // 2
console.log (count3OrLess('My name is John Doe')); // 3
console.log (count3OrLess('')); // 0


/* Task 10
Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.

Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

function isPrime (num) {
    if (num <= 1) return false
    for (i = 2; i < num.length; i++) {
        if (num % 1 === 0) {
            return false
        }
    }
    return true
}


console.log (isPrime (5)); // true
console.log (isPrime (2)); // true
console.log (isPrime (29)); // true
console.log (isPrime (-5)); // false
console.log (isPrime (0)); // false
console.log (isPrime (1)); // false


/* Task 11
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]

*/

function add (arr1, arr2) {
    const newArr = [];
    for(const arr of arr1) {
        for(const array of arr2) {
            newArr.push(arr + array);
        }
    }
    return newArr;
}

console.log (add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log (add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log (add([-5, 6, -3, 11], [5, -6, 3, -11]));


/* Task 12
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello World" 
removeExtraSpaces("     JavaScript is          fun")  -> "JavaScript is fun”
removeExtraSpaces("") 
*/

function removeExtraSpaces (str) {
    return str.split(' ').filter(x => x).join('')
};

console.log (removeExtraSpaces("Hello"));
console.log (removeExtraSpaces("      Hello    World     "));
console.log (removeExtraSpaces("JavaScript is          fun"));
console.log (removeExtraSpaces(""));



/* Task 13
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/

function findClosestTo10 (arr) {
    let findClosestTo10 = 0;

    for (i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - 10) < Math.abs(findClosestTo10 - 10)) {
            findClosestTo10 = arr[i]
        }

    }
    return findClosestTo10;
}


console.log(findClosestTo10([10, -13, 5, 70, 15, 57])) // 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])) // 8
console.log(findClosestTo10([0, -1, -2])) // 0 


/* Task 14
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.

*/

function isEmailValid(str) {
    let isValid = true;
    let countSpecChar = 0;
    let atSymbolIndex = str.indexOf("@");
    let dotSymbolIndex = str.indexOf(".");

    if (str.length < 0 && str.includes(" ")) isValid = false;
    if (
      str.slice(0, atSymbolIndex).length < 2 ||
      str.slice(str.lastIndexOf("@") + 1, dotSymbolIndex).length < 2 ||
      str.slice(dotSymbolIndex).length < 2
    )
      isValid = false;
    for (let i = 0; i < str.length; i++) {
      const l = str[i];
      if (l === "@") countSpecChar++;
    }
    return countSpecChar === 1 && isValid;
  }
  console.log(isEmailValid("")); // -> false
  console.log(isEmailValid("@gmail.com")); //  -> false
  console.log(isEmailValid("johndoe@yahoo")); //  -> false
  console.log(isEmailValid("johndoe@.com")); // -> false
  console.log(isEmailValid("johndoe@@gmail.com")); //  -> false
  console.log(isEmailValid("a@outlook.com")); // -> false
  console.log(isEmailValid("johndoe@a.com")); // -> false
  console.log(isEmailValid("johndoe@gmail.com")); // -> true)
  
  /* Task 15
  Write a function named as isPasswordValid() which takes a 
  string email as an argument and returns true if the password 
  is valid or returns false otherwise when invoked.
  NOTE: A VALID PASSWORD:
  •should have length of 8 to 16 (both inclusive).
  •should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
  special char.
  •should NOT have any space.
  
   */

    function isPasswordValid(str) {
        if (str.length < 8 || str.length > 16 || str.includes(" ")) return false;
    let digit = "1234567890";
    let specChar = "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/\\";
    let countDigit = 0;
    let countUpperCase = 0;
    let countLowerCase = 0;
    let countSpecChar = 0;
  
    for (const l of str) {
      if (digit.includes(l)) {
        countDigit++;
        continue;
      }
      if (specChar.includes(l)) {
        countSpecChar++;
        continue;
      }
      if (l.includes(l.toUpperCase())) {
        countUpperCase++;
        continue;
      }
      if (l.includes(l.toLowerCase())) {
        countLowerCase++;
        continue;
      }
    }
    return (
      countDigit >= 1 &&
      countLowerCase >= 1 &&
      countSpecChar >= 1 &&
      countLowerCase >= 1
    );
  }
  
  console.log(isPasswordValid("")); //  -> false
  console.log(isPasswordValid("abcd")); //  -> false
  console.log(isPasswordValid("abcd1234")); //  -> false
  console.log(isPasswordValid("Abcd1234")); //  -> false
  console.log(isPasswordValid("Chicago12345US!#$%")); //  -> false
  console.log(isPasswordValid("Abcd1234$")); //  -> true
  console.log(isPasswordValid("Chicago123$")); //  -> true
  console.log(isPasswordValid("Test1234#")); //  -> true)