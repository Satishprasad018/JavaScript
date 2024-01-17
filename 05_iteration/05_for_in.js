// for in loop in array

const arr1 = [1,2,3,4,5,6,7,8,9]          

for (const i in arr1) {
    // console.log(arr1[i]);
}

// for in loop in strings

const string1 = "satish prasad"

for (const i in string1) {
    // console.log(string1[i]);
}

// for in loop in objects ---------------->  objects is iterable 

const mySym = Symbol("key1")

const object1 = {
    name : "satish",
    "lastName" : "prasad",
    age : 19,
    [mySym] : "password"
}

for (const i in object1) {
    console.log(`${i} :- ${object1[i]}`);       
}