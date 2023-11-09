const arr1 = ['Apple', 'Orange', 'Pineapple'];

let str1 = arr1.toString();
let str2 = arr1.join();
console.log (str1); // Apple,Orange,Pineapple
console.log (str2); // Apple,Orange,Pineapple

// Apple - Orange - Pineappe
let str3 = arr1.join (' - ');
console.log (str3); // Apple - Orange - Pineapple

let str4 = arr1.join (' | ');
console.log(str4); // Apple | Orange | Pineapple



const arr2 = [1, 2, 3];
let str5 = arr2.join();
console.log (str5); // 1,2,3

let str6 = arr2.join(' === ')
console.log (str6); // 1 === 2 === 3


