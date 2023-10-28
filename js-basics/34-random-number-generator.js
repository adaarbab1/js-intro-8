

function getRandomNumber (num1, num2) {
    const min = Math.min (num1, num2);
    const max = Math.max (num1, num2);

    return Math.floor(Math.random ()* (max - min + 1)) + min;
}

console.log (getRandomNumber (5, 7));
console.log (getRandomNumber (15, 17));

  