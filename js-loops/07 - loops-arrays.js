
// Output all these names to the console - separate lines

for (let i = 0; i <= names.length-1; i++) {
    console.log (names[i]);
}

let name = 'Suzanne';

for (let i = 0; i <=name.length-1; i++){
    console.log(name[i]);
}


// IT IS PREFFERED TO USE for...of loop instead of for loop
// John is a name of names
// Jane is a name of names
// Alex is a name of names
// Max is a name of names
const names = ['John', 'Jane', 'Alex', 'Max'];

for (let name of names) {
    console.log(name);
}

for (let uCase of names) {
    console.log(uCase.toUpperCase());
}
let countJ = 0
for (var i = 0; i <= names.length-1; i++) {
    if (names[i][0] === 'J') countJ++
    }
    console.log(`There are ${countJ} names starts with letter 'J'`);

for (const name of names) {
    if (name[0] === 'J') countJ++;
}
console.log(`There are ${countJ} names starts with letter 'J'`);

