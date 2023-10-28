// Task 1

let rNum1  = Math.floor(Math.random() * 100) +1;
let rNum2  = Math.floor(Math.random() * 100) +1;
let rNum3  = Math.floor(Math.random() *100) +1; 
if (sum = (rNum1+rNum2+rNum3)/3 >= 50) console.log (true);
else console.log (false);

if (sum = (20+70+25)/3 >= 50) console.log (false); // Test data 1
if (sum = (65+80+90)/3 >= 50) console.log (true); // Test data 2


// Task 2  Probably this is not the right solution, but I tried. I will look into this later as well.

let Num1 = Math.floor(Math.random() * 3) +1;
let Num2 = Math.floor(Math.random() * 3) +1;
let Num3 = Math.floor(Math.random() * 3) +1;

if (Num1 !== Num2 !== Num3) console.log ("NO MATCH");
else if (Num1 === Num2 || Num1 === Num3 || Num2 === Num3) console.log ("DOUBLE MATCH");
else console.log ("TRIPLE MATCH");

// Task 3

function hasA(str) {
    if (str.includes ('a') || str.includes ('A')) return true;
    else return false;
}
console.log (hasA("Tech"));
console.log (hasA("Global"));
console.log (hasA(""));
console.log (hasA("Apple"));


// Task 4

function doubleOrTripleWord (str1) {
    if (str1.length %2 == 0) return str1.repeat(3);
    else return str1.repeat(2)
}
console.log (doubleOrTripleWord("Tech"));
console.log (doubleOrTripleWord("Apple"));
console.log (doubleOrTripleWord(""));
console.log (doubleOrTripleWord(" "));
console.log (doubleOrTripleWord("1"));
console.log (doubleOrTripleWord("22"));

// Task 5 

function firstWord (str2) {
   return (str2.split (' ') [0])
}

console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));

// Task 6

function lastWord (str3) {
    var s3 = str3.split (" ");
    return s3[s3.length -1];
 }
 
 console.log(lastWord("Hello World"));
 console.log(lastWord("I like JavaScript"));
 console.log(lastWord("Hello"));
 console.log(lastWord(""));
 console.log(lastWord(" "));
 

 // Task 7 

 function firstlastWord (str4) {
    var s4 = str4.split (" ")
    return (str4.split (' ') [0] + s4[s4.length - 1]);
}


 console.log (firstlastWord ("Hello World"));
 console.log (firstlastWord ("I like JavaScrip"));
 console.log (firstlastWord ("Hello"));
 console.log (firstlastWord (""));
 console.log (firstlastWord (" "));


 // Task 8

 function startVowel (str5) {
    if (str5.startsWith('a', 'e', 'i', 'u', 'A', 'E', 'I', 'O', 'U')) return true
    else false
 }

 console.log(startVowel("Hello"));
 console.log(startVowel("Apple"));
 console.log(startVowel("orange"));
 console.log(startVowel(""));
 console.log(startVowel(" "));
 console.log(startVowel("123"));

 // Task 9

 function swap4(str6) {
    let firstLastChar = str6.split ('');
    firstLastChar[1] = str6 [str6.length -4];
    firstLastChar [firstLastChar.length -4] = str6 [1];
 }

 console.log (swap4 ('abc'));
 console.log (swap4 ('JavaScript'));
 console.log (swap4 ('TechGlobal'));
 console.log (swap4 (''));
 console.log (swap4 (' '));
 console.log (swap4 ('Apple'));

// Task 10

function swapFirstLastWord (arg) {
if (arg.length <=1) {
    return arg;
}
FLWord = arg.substring (1, arg.length -1);
return (arg.charAt(arg.length -1)) + FLWord + arg.charAt(0);
}

console.log (swapFirstLastWord("Hello World"));
console.log (swapFirstLastWord("I like JavaScript"));
console.log (swapFirstLastWord("foo bar foo bar"));
console.log (swapFirstLastWord(""));
console.log (swapFirstLastWord(" "));
console.log (swapFirstLastWord("Hello"));
console.log (swapFirstLastWord("Hello    "));