function greet(){
    console.log('Hello world');
}

function greetTwo(){
    console.log("This is a second greeting");
}

// Call a function
greet();

greetTwo();

// Adding arguments in our function.

const add = function(a, b){
    return console.log('Addition: ', a + b);
}


// Easier way, arrow functions
const subtract = (a ,b) => console.log('Subtraction: ', a - b);

const a = 10;
const b = 4;

add(a, b);
subtract(a, b);


function convertCelsiusToFahrenheit(celcius){
    return (celcius * 9) / 5 + 32;
}

const fahrenheit = convertCelsiusToFahrenheit(30);
console.log('30 degrees celcius is', fahrenheit);

const calculateArea = (width, height) => width * height;
console.log('Area of this rectangle: ', calculateArea(5, 10));


// function with default parameters.
function power(base, exponent = 2){
    return base ** exponent;
}

console.log("5 to the power of 2 is: ", power(5));
// A can still enter a value.
console.log('3 to the power of 3 is: ', power(3, 3)); 
