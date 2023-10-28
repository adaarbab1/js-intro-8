let =  name = 'Alex';

let size = name.length;
console.log('The string characters =' + size);

console.log(name.length);
console.log (typeof name.length); // number

console.log(name [2]);
// How to get specific characters from a string

let thirdChar = name [2];
let firstChar  = name [0];
console.log (thirdChar); //e
console.log (firstChar); //A

console.log(name[3]); // x

// Getting the last character from a string dynamically

let lName = 'Smith';
console.log (lName [4]); //

console.log(lName[lName.length -1]);


// charAt() function can also be used to get specific character from a string by gibing an index as an argument
let city  = 'Chicago';
console.log(city[2]);
console.log(city.charAt(2));

// The difference between [index] and charAt [index]

console.log(city[7]);
console.log(city.charAt(7));


// charCodeAt () ----> it returns the ASCII representation from the given character

let country = 'Canada';
console.log (country.charCodeAt(1));

console.log (typeof country.charCodeAt (12));

console.log(typeof country[5]); // string
console.log(typeof country[15]); // undefined

