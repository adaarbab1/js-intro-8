let day = 2
// switch instead if else

switch (day) {
    case 0:
        console.log ('Sunday');
        break;
    case 1:
        console.log ('Monday');
        break;
    case 2:
        console.log ('Tuesday');
        break;
    case 3:
        console.log ('Wednesday');
        break;
    case 4:
        console.log ('Thursday');
        break;
    case 5:
        console.log ('Friday');
        break;
    case 6:
        console.log ('Saturday');
        break;
default:
}




/*
We will print the weekday or weekend based on the a number from 0 to 6

0   -> Weekend
6   -> Weekend
1   -> Weekday
.
.
.
5   -> Weekday
*/

let randomDay = 4;
if (randomDay === 0 || randomDay === 6) console.log ('Weekend');
else console.log ('Weekday');

switch (randomDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log ('Weekday');
        break;
    case 0:
    case 6:
        console.log ('Weekend');
        break;
}

let age = Math.floor(Math.random() * 100);
if (age <=20) console.log ('Young');
else if (age <= 55) console.log ('Adult');
else  console.log ('Senior');
console.log(`The age randomly genegerated is = ${age}`);

switch (true) {
    case age <=20:
        console.log('Young');
        break;
    case age <= 55:
        console.log ('Adult');
    default:
        console.log ('Senior');
}

