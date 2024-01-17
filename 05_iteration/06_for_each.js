//++++++++++++++++++++++++  using and printing from forEach loop ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const coding = ["js", "ruby", "java", "c++", "c", "c#"]

coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach((val) => {
    // console.log(val)
})

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe)      // referance diya hai

coding.forEach((val, index, arr) => {
    // console.log(val,index,arr);
})                                                   // more about forEach loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((obj) => {
    // console.log(obj.languageFileName);
})

//++++++++++++++++++++++++  returning from forEach loop ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const value = myNums.forEach((val) => {
    return val
})

// console.log(value);      // output undefined

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)                 // there is simple method to do this i.e use filter
    }
} )

console.log(newNums);