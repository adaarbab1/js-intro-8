console.log (3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false); 
console.log (!true && !false) || 5 * 2 === true * 10;
console.log ("3" * "5" >= 15 && true == 1 && "   " == false && "" === 0 );
console.log (!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5)) ;
console.log (!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1" );
console.log (true && false) || (10 + 5 === "15" && "apple" !== "orange");
console.log (!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false)); 
console.log ("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false); 
console.log (4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat");
console.log (20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true); 
console.log (!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10); 
console.log (5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true); 
console.log (10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true); 
console.log ("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0); 
console.log (5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1);
 


let num = Math.floor(Math.random() * 10);
if (num % 2 == 0) console.log ('true');
else console.log ('false');
console.log (num);

let num1 = Math.floor (Math.random () * 10);
if (num1 % 2 != 0) console.log ('true');
else console.log ('false');
console.log (num1);

let num2 = Math.floor (Math.random() * 5 ) -5;
if (num2 > 0 ) console.log ('true');
else console.log ('false');
console.log (num2);

let num3 = Math.floor (Math.random() * 5 ) -5;
if (num3 < 0 ) console.log ('true');
else console.log ('false');
console.log (num3);

let rNum = Math.floor(Math.random() * 50);
if (rNum % 7 == 0 ) console.log ('true');
else console.log ('false');
console.log (rNum);

let rNum1 = Math.floor(Math.random() * 10 );
let rNum2 = Math.floor(Math.random() * 10);
console.log (2 * 2 * 2);

let miles = Math.floor (Math.random() * 10) +1;
var kilometers = 2 * 1.6;
console.log (kilometers);

let kilogram = Math.floor(Math.random() * 100) +1;
var pounds  = 75 * 2.2;
console.log (pounds);

let rN = Math.floor(Math.random() * 3) + 1;
let rN1 = Math.floor(Math.random() * 3) + 1;
if (rN == rN1) console.log (true);
else console.log(false);

let age = Math.floor(Math.random() * 100) +1;
if (age >= 16) console.log (true);
else console.log(false);
console.log(age);

let greatest = Math.floor(Math.random() * 10) + 1;
let greatest1 = Math.floor(Math.random() * 10) + 1;
let greatest3 = Math.floor(Math.random() * 10) + 1;
console.log (greatest, greatest1, greatest3);
console.log (3 + 5 + 7) / 3;


let rNumber = Math.floor(Math.random() * 100) +1;
if (rNumber < 25) console.log ('1st quarter');
else if (rNumber < 50) console.log ('2nd quarter');
else if (rNumber < 75) console.log ('3rd quarter');
else  console.log ('4th quarter');
console.log (rNumber);

let rNumber2 = Math.floor(Math.random() * 100) +1;
if (rNumber2 < 50) console.log ('1st half');
else console.log ('2nd half');
console.log(rNumber2);

let numb1 = Math.floor(Math.random() * 10 )+1;
let numb2 = Math.floor(Math.random() * 10 )+1;
var product = (numb1 * numb2);
if (product % 2 != 0) console.log (true);
else console.log (false);
console.log(product);

function rectangleArea (x, y) {
    return x * y
}
console.log (rectangleArea(5,4));

function rectanglePerimeter (x, y) {
    return 2 *  (x + y)
}
console.log (rectanglePerimeter (5,4));

function squareArea (x) {
    return x * x
}
console.log (squareArea (5));

function doubleWord (text) {
    return text.repeat(2);
}

console.log (doubleWord("Global"));

function firstCharacter (str) {
    return str.charAt (0)
}
console.log (firstCharacter('Tech'));

function firstTwoCharacters (str) {
    return str.slice (0,2)
}
console.log (firstTwoCharacters('Tech'));

function lastCharacter (str) {
    return str.charAt (str.length-1)
}
console.log (lastCharacter('Tech'));

function lastTwoCharacters (str) {
    return str.slice (-2)
}
console.log (lastTwoCharacters('Tech'));

function firstLast (str) {
    return str [0] + str.slice (-1);
}
console.log (firstLast('Tech'));

function hasFive(str){
    if (str.length > 5) console.log (true)
    else (false)
}

console.log (hasFive('Global'));

function middle(str) {
    if (str.length % 2 != 0) 
      return str.substring((str.length / 2)+1, (str.length / 2)) 
    else if (str.length % 2 == 0) 
      return str.substring((str.length / 2)-1, (str.length / 2)+1)
  }

  console.log (middle ('Global'));

  function longer(str1, str2) {
    if(str1.length >= str2.length) console.log(str1);
    else console.log(str2);
  }
  console.log (longer ('Tech', 'Global'));

  function shorter (str1, str2) {
    if (str1.length <= str2.length) console.log (str1);
    else console.log (str2);
  }
  console.log (shorter ('Tech', 'Global'));

  function concat (str1, str2) {
    return str1.concat(str2)
  }

  console.log (concat('Tech', 'Global'));

  function startsVowel (str) {
    return 'aeiouAEIOU'.includes(str[0])
  }

  console.log (startsVowel('Tech'));


  function lastCharacter (str) {
    return str.charAt (str.length -1)
}
console.log (lastCharacter ("Tech"));
console.log (lastCharacter ("Global"));
console.log (lastCharacter ("  "));
console.log (lastCharacter ("123"));