// String length property
const text = 'Hello, world!';
console.log('Length of the text:', text.length); 

// Converting to uppercase
const upperCaseText = text.toUpperCase();
console.log('Uppercase:', upperCaseText); 

// Converting to lowercase
const lowerCaseText = text.toLowerCase();
console.log('Uppercase:', lowerCaseText); 

// finding the index of a substring
const index = text.indexOf('world');
console.log('Index of "world":', index);

// If substring is not found, indexOf returns -1
const notFoundIndex = text.indexOf('JavaScript');
console.log(notFoundIndex);

// Extracting a part of a string
const sliceText = text.slice(7, 12);
console.log('Sliced text:', sliceText);

// Splitting a string into an array
const wordsArray = text.split(' ');
console.log('Words Array:', wordsArray);

// Replacing a part of a string
const replacedText = text.replace('world', 'JavaScript');
console.log('Replaced text:', replacedText);

// Template literals
const firstName = 'Alice';
const greeting = `Hello, ${firstName}! Welcome to JavaScript.`
console.log(greeting);

// Multi-line strings using template literals
const multiLineText = `This is a multi-line string.
You can write text across multiple lines 
without using escape characters.`;
console.log(multiLineText);

