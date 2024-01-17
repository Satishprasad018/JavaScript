// for of loop in array

const arr1 = [1,2,3,4,5,6,7,8,9]          

for (const i of arr1) {
    // console.log(`array element are ${i}`);
}

// for of loop in strings
const string1 = "satish prasad"

for (const i of string1) {
    // console.log(i);
}

// for of loop in objects ---------------->  objects is not iterable 

const mySym = Symbol("key1")

const object1 = {
    name : "satish",
    "lastName" : "prasad",
    age : 19,
    [mySym] : "password"
}

// for (const i of object1) {
//     // console.log();       
// }
