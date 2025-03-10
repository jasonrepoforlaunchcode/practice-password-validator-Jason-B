const input = require('readline-sync');
let userPassword = 'Armadilla';
let response = 'Cactus';
console.log(`(The password....is ${userPassword})\n`);
do {
    response = input.question("\nPlease enter your password: ");
    if (response !== userPassword){
        console.log("Try again. (Remember partner... passwords are case sensitive!)");
        if (response.toLowerCase() === "armadillo"){
            console.log("(Can't you spell!?)");
        }
    }
} while(response !== userPassword);
console.log("Welcome to the Autry Museum of the American West!");