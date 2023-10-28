let var1 = null || true;
console.log (var1); // true

let var2 = null ?? true;
console.log(var2); // true

let var3 = undefined || true;
console.log(var3);  // true

let var4 = underfined ?? true;
console.log(var4); // true


// DIFFERENCE

let var5 = 0 || 'Hello';
let var6 = 0 ?? 'Hello';

console.log(var5); // Hello
console.log(var6); // 0 