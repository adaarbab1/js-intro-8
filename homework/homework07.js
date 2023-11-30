/* Task 1
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

function hasUpperCase (str) {
    return /[A-Z]/.test(str);
}

console.log (hasUpperCase("javascript")); // false
console.log (hasUpperCase("John")); // true
console.log (hasUpperCase("125.0")); // false
console.log (hasUpperCase("")); // false

/* Task 2
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

function noDigit (str) {
    const removed = str.replace (/[0-9]/g, '!')
    return removed;
}

console.log (noDigit("")); // 
console.log (noDigit("Javascript")); // Javascript
console.log (noDigit("123Hello")); // !!!Hello
console.log (noDigit("123Hello World149")); //!!!Hello World!!!
console.log (noDigit("123Tech456Global149")); // !!!Tech!!!Global!!!

/* Task 3
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

function noVowel (str) {
    const noVowel = 'aeiouAEIOU';
    return str.split('').filter(char => !noVowel.includes(char)).join('');
}

console.log (noVowel ("TechGlobal"));
console.log (noVowel ("AEOxyz"));


/* Task 4
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

function no13 (arr) {
   return arr.map(element => element  !== 13 ? element : 0);
    
}
console.log (no13 ([1, 2, 3, 4]));
console.log (no13 ([13, 2, 3]));
console.log (no13 ([13, 13, 13 , 13, 13]));
console.log (no13 ([]));

/* Task 5
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/

function middleInt (num1, num2, num3) {
    const numbers = [num1, num2, num3]
    numbers.sort ((a, b) => a - b);
    return numbers [1];
}

console.log (middleInt (1, 2, 2)); // 2
console.log (middleInt (5, 5, 8)); // 5
console.log (middleInt (5, 3, 5)); // 5
console.log (middleInt (1, 1, 1)); // 1
console.log (middleInt (-1, 25, 10)); // 10

/* Task 6
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

function sumOfDigits (str) {
        let sum = 0
        for(const char of str){
            if('0123456789'.includes(char)){
                sum += Number(char)
            }
        }
        return sum;
    }  

console.log (sumOfDigits("Javascript"));
console.log (sumOfDigits("John's age is 29"));
console.log (sumOfDigits("$125.0"));
console.log (sumOfDigits(""));


/* Task 7
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([]
*/

function arrFactorial (arr) {
    const replaceFactorials = (num) => {
        if (num === 0 || num === 1) return 1;
        return num * replaceFactorials (num-1);
    };

    return arr.map (num => replaceFactorials(num));

};

console.log (arrFactorial([1, 2, 3 ,4]));
console.log (arrFactorial([0, 5]));
console.log (arrFactorial([5 , 0, 6]));
console.log (arrFactorial([]));


/* Task 8
/*
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") --> [ 'ab', '123', '$%c%' ]
*/

function categorizeCharacters (str) {
    const characters = [];
    const digits = [];
    const special = [];
    for(char of str){
        if(char >= 'a' && char <= 'z')characters.push(char);
        else if(char >= '0' && char <= '9') digits.push(char);
        else special.push(char)
        
    }
    return [characters.join(''), digits.join(''), special.join('')]

}

console.log (categorizeCharacters("1234"));
console.log (categorizeCharacters("abc123$#%"));
console.log (categorizeCharacters("12ab$%3c%"));