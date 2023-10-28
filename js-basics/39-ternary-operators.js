
/*
Game club

People who have a name starting with J can be part of this Game Club

John -> 'You can join the club'
Alex -> 'Sorry! You are out!'
*/


let name = "John"; 
if (name[0] === 'J'){
    console.log ('You can join the club')
}

else {
    console.log ('Sorry! You are out')
}

// Short if-else
if (name.toUpperCase()[0] === 'J') console.log ('You can join the club');
else console.log ("Sorry! You are out");

// Ternary solution

let result = name.toUpperCase() [0] === 'J' ? 'You can join the club' : "Sorry! You are out";
console.log (result);

// Another ternary way

name[0] === 'J' || name[0] === 'j' ? console.log ('You can join the club') : console.log ('Sorry! You are out');

/*
Naming a baby
 
boy = Sam
girl = Julie

*/

let gender = 'M'; // will be either F or M

let baby_name1 = gender  === 'F' ? 'Julie' : 'Sam';

let baby_name = gender === 'M' ? 'Sam' : 'Julie';

console.log (baby_name);


gender === 'M' ? console.log ('Sam') : console.log ('Julie');

if (gender === 'M') console.log ('Sam')
else console.log ('Julie')

// Having ternary result in the console.log ()

console.log (gender === 'M' ? 'Sam' : 'Julie');


let num = Math.floor(Math.random() * 11) -5; /// this returns a random number between -5 and 5

console.log(`The random number is = ${num}.`);

if (num >0) console.log ('Positive');
else if (num <0) console.log ('Negative');
else console.log ('Zero');

// Without stroing in a container - variable 

num >0 ? console.log ('Positive') : num < 0 ? console.log ('Negative') : console.log ('Zero');


// Storing result in a variable and then printing it out
let result1 = num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';
console.log(result1);

