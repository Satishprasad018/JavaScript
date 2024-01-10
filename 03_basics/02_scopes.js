// scope 

if (true) {

    let a = 12
    var b = 22      // not a good practice
    const c = 34

}
// console.log(a);
// console.log(b);
// console.log(c);

// function in function scope understanding

function addOne() {

    const name = "satish";

    function addTwo() {

        const lname = "prasad";

        console.log(name);

    }

    // console.log(lname);  // cannot access chid function data
    addTwo();
}

addOne();
// console.log(name);     // error
// console.log(lname);    // error

// if else nested scope understanding same as function nested

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++++++++++++ IMP +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(onebyone(5));
// console.log(onebyTwo(5)); // error 

function onebyone(num) {
    return num + 1;
}

const onebyTwo = function (num) {  // the function should be called after initialization only
    return num + 2;
}

console.log(onebyTwo(5));  

