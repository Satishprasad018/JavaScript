function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(...num1){      // rest operator
//    return num1 ;
// }

// console.log(calculateCartPrice(348,484,4,84,48,4,848));  // [348,484,4,84,48,4,848]

function calculateCartPrice2(val1, val2, ...num1) {      // rest operator
    return num1;
}

// console.log(calculateCartPrice2(348, 484, 4, 84, 48, 4));  // [4,84,48,4]

const user = {
    username: "satish",
    price: 8848
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);    //    handleObject({
                      //          username: "sam",
                     //          price: 399
                    //       })

const myASrray = [348, 484, 4, 84, 48, 4, 848]

function returnValue(anyarray) {
    return anyarray[3];
}

console.log(returnValue(myASrray));  //  console.log(returnValue([348, 484, 4, 84, 48, 4, 848]));