const array = ['Mouse', 'Laptop', 'Computer', 'Phone', 'Camera'];

// first

console.log(array[0]);

// last
console.log(array[3]);
console.log(array[array.length-1]); // Dynamic way to find the last element in an array


const car = {
    color: 'Black'
    year: 2020,
    make: 'Toyoya',
    model: 'Camry'
    price: 20000
};

const elements = ['Phone', 'Computer', 'Camera'];

console.log (elements);
console.log(elements[1]);

elemenets[2]='Webcam';
console.log(elements[2]);
console.log(elements);

//how many elements you have in the array - - size

console.log(elements.length);

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 18,
    program: 'Software Testing',
    schoolName: 'TechGlobal School'
};
console.log(student);

// retrieving the info: student ['age'] or student.age

 console.log(student.age);
 console.log(student['program']);
 console.log(student.schoolName);
 console.log(student['firstName']);
 console.log(student['lastName']);

// remove  a propery with its key-value
delete student.firstName;
delete student.lastName;
delete student['program'];


