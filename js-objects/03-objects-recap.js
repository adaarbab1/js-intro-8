/*
Create a car object with below information
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'

    Output the object 
*/

const car = {
    color: 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'
};

car.color = 'black';

for (const variable in car) {
    console.log (car[variable]);
}