/**
 * JavaScript
 * 
 * 
 * Primitive data types
 * - String
 * - Number (Integer, Float)
 * - Boolean (true or false)
 * - undefined (Set by javascript on non existing data)
 * - null (Set by us when we don't have data)
 * 
 * - Symbol
 * - Bigint
 * 
 * Complex data types
 * - Object (Dictionary)
 * - Array (List)
 * 
 */

// Variables -> reusability, store information 
// const > let > var

/**
 * Const prevents us from reassigning the variable
 */
const hello = 'World';

let hello2 = 'World';

hello2 = 'Hello Levi';

// To be avoided even though it works
something = 'Hello';

const num = 123;

const alwaysRight = true;

const noValue = null;

// modulo
const result = 2 % 4;

console.log(result);

// Variables can be named using capital letters, using caps lock, using numbers, underscore, dollar.
// Keep in mind that variable names are case sensitive.
const helloWorld = '';

console.log(helloWorld);

// Concatentation 
const sum = 2 + '23';

const firstName = 'Chuck';
const lastName = 'Norris';

console.log(firstName + ' ' + lastName);

let number = 2;

// Increment with 1
number++;
// Decrement by 1
number--;

console.log('This is our number', number);

// greater than, less than => results in a boolean value

console.log(2 > 3);
console.log(2 < 3);

// Conditional statements - (fork in the road)

if (2 < 3) {
  // If above condition is true execute the following block of code
  console.log('Cat');
} else {
  // If above condition is false execute the following block of code
  console.log('Dog');
}

const userInput = prompt('Please enter a number');

console.log(userInput);

/**
 * If user inputs a number grater or equal to 100 show Hello user!
 * If user inputs a number grater or equal to 200 show Awesome job!
 * If user inputs a number grater or equal to 300 show Bye user!
 */

if (userInput >= 300) {
    console.log("Bye user!")
} else
if (userInput >= 200) {
    console.log("Awesome job!")
} else 
if (userInput >= 100) {
    console.log("Hello user!")
}


if (userInput >= 100 && userInput < 199) {
    console.log("Hello user!")
} else
if (userInput >= 200 && userInput < 299) {
    console.log("Awesome job!")
} else 
if (userInput >= 300) {
    console.log("Bye user!")
}