// if condiions

const number = 10;

if(number > 0){
    console.log('The number is greater than 0');
}else if(number < 10){
    console.log('The number is NOT greater than 0');
}else{
    console.log('Number is 0');
}

// Switch

const day = 5;
let dayName;

switch(day){
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;

}

console.log(dayName);

// For loop

const numbers = [1,2,3,4,5,6,7,8,9]
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log('Sum of the array elements:', sum)

// While Loop

let n = 1;

while(true){
    if(n % 3 === 0 && n % 5 === 0){
        console.log('First number divisible by 3 and 5 is:', n);
        break;
    }
    console.log(n);
    n++
}

// do while loop

let userInput;

do{
    userInput = prompt('Enter a non-empty string');
}while(!userInput){
    console.log('You entered: ', userInput);
}
