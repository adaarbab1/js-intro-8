

let name = 'Alex';
if(name.toLowerCase()[0] === 'e') console.log (true);
else console.log(false);

function startE(str) {
    if(str.toLowerCase()[0] === 'e') return true;
    else return false;
}

console.log (startE('emily'));

/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'

*/

function fooBar (nStr) {
    if (nStr % 5 === 0) return 'foo';
    else if (nStr % 7 ===0) return 'bar';
    else if (nStr % 5 ===0 && nStr % 7 === 0) return 'foobar';
    return (nStr)
}

console.log (fooBar (2));
console.log (fooBar (3));
console.log (fooBar (5));
console.log (fooBar (10));
console.log (fooBar (14));
console.log (fooBar (0));
console.log (fooBar (35));
console.log (fooBar (70));


function getGrade (score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    
    return 'F';

}
console.log (getGrade(90));
console.log (getGrade(89));
console.log (getGrade(80));
console.log (getGrade(79));
console.log (getGrade(70));
console.log (getGrade(69));
console.log (getGrade(60));
console.log (getGrade(59));
console.log (getGrade(95));
console.log (getGrade(83));
console.log (getGrade(23));
console.log (getGrade(67));