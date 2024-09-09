const fruits = ['apple', 'banana', 'cherry'];

// amother way of declaring an array.

const numbers = new Array(1, 2, 3, 4, 5);

// Accessing a value in out array.

console.log('First fruit:', fruits[0]);

// how to replace an item.

fruits[1] = 'blueberry';

console.log('Modified fruits:', fruits);

// add new item on array

fruits[3] = 'date';
console.log('Added a new element:', fruits)

// getting the length of an array

console.log('Number of fruits:', fruits.length);

// another way of adding an element
fruits.push('watermelon');

// removing an element

const lastFruit = fruits.pop();
console.log(fruits);

// Add and remove from the left

fruits.unshift('fig');
console.log(fruits);
fruits.shift();
console.log(fruits);

// slicing of an array
const someFruits = fruits.slice(1,3);
console.log('Sliced fruits:' , someFruits)

// Splicing
fruits.splice(2, 1, 'dragonfruit', 'elderberry');
console.log('After splice:', fruits);

// for each

fruits.forEach(function(fruits, index){
    console.log(`Fruit at index ${index}:`, fruits);
})

// Map

const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase Fruits:', upperCaseFruits);

// filter
const longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Long named fruits:', longNamedFruits);

// reduce - counting every single character in the array/

const totalLength = fruits.reduce((accumelator, fruit) => accumelator + fruit.length, 0);
console.log('Total length of all fruit names:', totalLength);