let str =  'first of first';
str.includes ('f'); // true
str.indexOf ('f') // 0
str.lastIndexOf ('f'); // 9

str.includes ('first'); // true
str.indexOf ('first'); // 0 
str.lastIndexOf ('first'); // 9

str.includes ('abc'); // false
str.indexOf ('abc'); // -1
str.lastIndexOf ('abc'); // -1


let s1 = 'Tech', s2 = 'Global';

console.log (s1+s2);
console.log (s1.concat(s2));
console.log (`${s1}${s2}`);


let str1 = 'TechGlobal';
console.log (str1.slice(0,4)); // Tech
console.log  (str1.slice(4)); // Global
console.log  (str1.slice(-3)); // bal
console.log  (str1.slice(-2, -4)); // " "
console.log  (str1.slice(-4, -2)); // ob

