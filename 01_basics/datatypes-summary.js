//JavaScript Data Types:

// 7 Primitive types: String, Number, Boolean, null, undefined, symbol, BigInt
// 3 Non-primitive types: object, function, arrays

// Primitive Data Types
const score = 100
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 6543435456431654564n            //add n at last to make it bigInt

// outputs
console.log(typeof score);                       // number
console.log(typeof scoreValue);                  // number
console.log(typeof isLoggedIn);                  // boolean
console.log(typeof outsideTemp);                 // object
console.log(typeof userEmail);                   // undefined //***********************************
console.log(typeof id);                         //  symbol
console.log(typeof bigNumber);                  //  bigInt

// Non-primitive Data Types

const arr = ["ironman","thor","spiderman"]
const obj = {
    name: "surya",
    age: 22,
}
const func = function () {
    console.log("hello world!");
}

console.log(typeof arr);              // object ****************************
console.log(typeof obj);             // object
console.log(typeof func);            // function

// ********************************************************************************************************* //
 
// Stack(primitive)              Heap(non primitive)

let firstNumber = "satish"
let secondNumber = firstNumber
secondNumber = "Prashant"

console.log(firstNumber);        // satish
console.log(secondNumber);       // Prashant

let userOne ={
    email : "satish.prasad.018@gmail.com",
    uname : "ujhwernuj"
}

let userTwo = userOne 

userTwo.email = "prasadsatish333@gmail.com"

console.log(userTwo.email);     //  prasadsatish333@gmail.com
console.log(userOne.email);     //  prasadsatish333@gmail.com
