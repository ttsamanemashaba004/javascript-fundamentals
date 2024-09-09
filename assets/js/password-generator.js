// Password generator in JS

function generatePassword(length = 12){
    // Define character sets for password
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialChars = '!@#$%^&*()_+{}|;:,.<>?';

    // Combine all characters sets into one

    const allChars = upperCase + lowerCase + numbers + specialChars;
    

    // Initialize passwaord array
    let password = [];

    // Ensure the password includes at least one character from each set
    password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    
    

    // Select a random lowercase letter
    password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    
    

    // Select a random number
    password.push(numbers[Math.floor(Math.random() * numbers.length)])
    

    // Select a random special character
    password.push(specialChars[Math.floor(Math.random() * specialChars.length)])
    
   

    // Fill the remaining password length with random characters from all sets

    for(let i = password.length; i < length; i++){
        password.push(allChars[Math.floor(Math.random() * allChars.length)])
       
    }
   
    // Shuffle the password array to randomize character order

    password = password.sort(() => Math.random() - 0.5);

    // Join the password array into a string and return it
    return password.join('');
}

const newPassword = generatePassword();
console.log('Generated Password:', newPassword);

let paragraph = document.getElementById('displayPassword');

paragraph.textContent = newPassword