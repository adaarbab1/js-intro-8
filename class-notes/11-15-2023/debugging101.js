// just a snippet file

function addNumbers (a, b) {
    const sum = a * b;
    return sum;
}

addNumbers (10, 5); // 15

function OnlyEvenNumers (num) {
    if (num % 2 === 0 ) {
        console.log ('Yes it is even!')
    } else {
        console.log ('No, its not even');
    }
}

OnlyEvenNumers (10); //
OnlyEvenNumers (7); //


function countNum (num) {
    console.time()
    for (let i = 0; i < num; i++) {
        console.log (i);
    }
    console.timeEnd()
}

