function firstPos (arr) {
    for (const x of arr) {
        if (x > 0) {
            return x;

        }
    }
}

console.log (firstPos([0, 3, -9,  5, 8]));
console.log (firstPos([-2, 0, -7, 10, -5]));
console.log (firstPos([1, 2, 3, -2]));

function lastNeg (arr) {
    for (let i = arr.length - 1; i >=0; i--){
        if (arr[i] < 0) return [arr [i]];

    }
}
console.log (lastNeg([0, 3, -9,  5, 8]));
console.log (lastNeg([-2, 0, -7, 10, -5]));
console.log (lastNeg([1, 2, 3, -2]));