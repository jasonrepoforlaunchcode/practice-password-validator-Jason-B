const input = require('readline-sync');

let password = "";
let passwordPassesCriteria = false;
console.log("Passwords must be 8 characters long and include 1 capital letter and 1 number.")
do {
    password = "";
    passwordPassesCriteria = false;
    let passwordMeetsLengthRequirement = false;

    password = input.question("Please enter your password: ");

    if (password.length >= 8){
        passwordMeetsLengthRequirement = true;
    }

    let capitalLetterFound = false;
    let numberFound = false;
    for(letter of password){
        let letterIsANumber = false;
        for(i = 0; i < 10; i++){
            if (letter.toString() === i.toString()){
                numberFound = true;
                letterIsANumber = true;
            }
        }
        if (letter === letter.toUpperCase() && letterIsANumber === false){
            capitalLetterFound = true;
        }

    }
    if(passwordMeetsLengthRequirement && capitalLetterFound && numberFound){
        passwordPassesCriteria = true;
    }

    if (!passwordPassesCriteria){
        console.log("")
        if (password.length < 8){
            console.log("Passwords must be at least 8 characters long");
        }
        if (!numberFound){
            console.log("Passwords must contain at least 1 number.")
        }
        if (!capitalLetterFound){
            console.log("Passwords must contain at least 1 capital letter.")
        }
    }
} while(!passwordPassesCriteria)

console.log("Password accepted.");