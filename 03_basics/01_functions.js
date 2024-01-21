function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);                        // Result:  8


function loginUserMessage(username = "sam"){            // function with default parameter
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))                  // hitesh just logged in
console.log(loginUserMessage())                          // sam just logged in


function calculateCartPrice(...num1){                    // rest operator
   return num1 ;
}

console.log(calculateCartPrice(348,484,4,84,48,4,848));  // num1 = [348,484,4,84,48,4,848]

function calculateCartPrice2(val1, val2, ...num1) {      // rest operator
    return num1;
}

console.log(calculateCartPrice2(348, 484, 4, 84, 48, 4));  // val1 = 348 , val2 =484 num1 = [4,84,48,4]

const user = {
    username: "satish",
    price: 8848
};

function konsa_bhiObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
 
konsa_bhiObject(user);    //    handleObject({
                         //          username: "sam",
                         //          price: 399
                         //       })

const myASrray = [348, 484, 4, 84, 48, 4, 848]

function returnValue(anyarray) {
    return anyarray; 
}

console.log(returnValue(myASrray));    //  [348, 484, 4, 84, 48, 4, 848]
