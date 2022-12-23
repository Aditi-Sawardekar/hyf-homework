/*
1. Create an array with 3 items. 
    All items should be functions. 
    Iterate through the array and call all the functions.
*/

function add(num1, num2){
    console.log (num1 + num2);
}

function substract (num1, num2){
    console.log (num1 - num2);
}

function multiply (num1,num2){
    console.log (num1 * num2)
}

// Create an array with 3 items. All items should be functions. 
const arrayOfFunctions = [add, substract, multiply];

// Iterate through the array and call all the functions.

for (let i=0; i< arrayOfFunctions.length; i++){
    const invokeFunction = arrayOfFunctions [i] (5,2);
}

/*
2. Create a function as a const and try creating a function normally. 
    Call both functions. 
    Read up on this if you are interested: 
    https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
*/

function wishHappyBirthday (name){
    console.log (`Happy Birthday ${name}!`)
}
console.log (typeof wishHappyBirthday)
wishHappyBirthday("Adi")

const birthdayWishes = function(name){
    console.log (`Wish you a very Happy Birthday ${name}!!`);
}

console.log (typeof birthdayWishes);
birthdayWishes("Adi")

// 3. Create an object that has a key whose value is a function. Try calling this function.

function hi (name){
    console.log (`Hi ${name}`)
}

const functionObject = {greetings: hi}
console.log (typeof functionObject);

functionObject.greetings("Anna")