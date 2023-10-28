

let ranNum = Math.floor(Math.random() *5)-2;
console.log(`THe random number is ${ranNum}`);

if(ranNum < 0) {
    console.log('The number is NEGATIVE');
}
else if (ranNum >0) {
    console.log('The number is POSITIVE');
}
else {
    console.log ('The number is ZERO')
}
console.log ("result");


let months = Math.floor(Math.random() *12)+1;
console.log(`The random number is ${months}`);
if(months === 12 || months ===1 || months === 2) {
    console.log('It is Winter');
}
else if (months === 3 || months === 4 || months === 5) {
    console.log('It is Spring');
}
else if (months === 6 || months === 7 || months === 8) {
    console.log ('It is Summer')
}
else {
    console.log ('It is Fall')
}
