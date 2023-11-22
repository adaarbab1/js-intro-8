/*
Create a class called Cat
Create a constructor which takes below information and defines template to create many objects from the class
name, color, age
Create 2 functions as below
makesSound() -> 'MEOW'
eat() -> 'EAT'
sleep() -> 'SLEEP'

class = blueprint or template
Class is a blueprint from where many object can be instantiated

object = instances
Objects are the instances of a class
*/

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    makeSound() {
        console.log('MEOW');
    }
    eat() {
        console.log('EAT');
    }
    sleep() {
        console.log('SLEEP');
    }
}

// Creating objects from the Cat class 
/*
cat1 -> Simba, Orange, 1
cat2 -> Lucy, White, 2
cat3 -> Oliver, Brown, 3
*/
const cat1 = new Cat('Simba', 'Orange', 1);
const cat2 = new Cat('Lucy', 'White', 2);
const cat3 = new Cat('Oliver', 'Brown', 3);

const cats = [cat1, cat2, cat3];

cats.forEach(cat => {
    console.log(cat);
    console.log('Name:', cat.name);
    console.log('Age:', cat.age);
    console.log('Color:', cat.color);
    cat.makeSound();
    cat.eat();
    cat.sleep();
    console.log('-----------------------');
});

// Store all the cat names in an array -> ['Simba', 'Lucy', 'Oliver']
console.log(cats.map(cat => cat.name)); // [ 'Simba', 'Lucy', 'Oliver' ]

// Store all the cats name that are older than 1 year -> [ 'Lucy', 'Oliver' ]
console.log(cats.filter(cat =>  cat.age > 1).map(cat => cat.name)); // [ 'Lucy', 'Oliver' ]