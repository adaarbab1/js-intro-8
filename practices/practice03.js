/*
Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
tripleWord("Tech") 	-> "TechTechTech"
tripleWord("Global") 	-> "GlobalGlobalGlobal"

*/

function tripleWord(word) {
    console.log(word.repeat(3));

};

tripleWord("Tech");
tripleWord ("Global");




/*Write a function named as celciusToFahrenheit() which takes a number to be considered as Celcius value and returns 
the Fahrenheit value when invoked.

Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the conversion from Celsius to 
Fahrenheit. 
    Multiply the Celsius temperature by 9.
    Divide the result by 5.
    Add 32 to the result.

Examples:
celciusToFahrenheit(20) 	-> 68
celciusToFahrenheit(25) 	-> 77
celciusToFahrenheit(0) 	    -> 32
celciusToFahrenheit(-10) 	-> 14

*/

function celciusToFahrenheit (celcius) {
    const fahrenheit = (celcius * 9) / 5 + 32;
    
    return fahrenheit;

}

console.log(celciusToFahrenheit(20)); 	
console.log(celciusToFahrenheit(25)); 	
console.log(celciusToFahrenheit(0)); 	    
console.log(celciusToFahrenheit(-10)); 



/*
Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle when invoked.

NOTE: Assume the sides of the rectangle are x and y.

Conversion Formula:
Area: x * y
Perimeter 2 * (x + y)

Examples:
rectangleArea(5, 4) 	-> 20
rectangleArea(3, 7) 	-> 21
rectangleArea(6, 10) 	-> 60

rectanglePerimeter(5, 4) 		-> 18
rectanglePerimeter(3, 7) 		-> 20
rectanglePerimeter(6, 10) 	    -> 32



*/

function rectangleArea (x, y) {
   return x * y;
}

console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));

function rectanglePerimeter1 (x, y) {
    return 2 * (x + y);
}

console.log(rectanglePerimeter1(5, 4));
console.log(rectanglePerimeter1(3, 7));
console.log(rectanglePerimeter1(6, 10));


function squareArea (x, x) {
    return (x * x);
}

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

function squarePerimeter(x, x) {
    return (4 * x);
}
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));