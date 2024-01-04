let score = "33"
let score1 ="bvdskhj"
let score2 = null
let score3 = undefined

console.log(typeof(score));
console.log(typeof(score1));
console.log(typeof(score2));
console.log(typeof(score3));


let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)


console.table([typeof(valueInNumber),typeof(valueInNumber1),typeof(valueInNumber2),typeof(valueInNumber3)]);
console.table([valueInNumber,valueInNumber1,valueInNumber2,valueInNumber3]);

let boolean = "sarish" // "1"  1  ""
let valueInBoolean = Boolean(boolean)
console.log(valueInBoolean);

// ********************************* Operation*********************************************

 let value = 3
 let negValue = - value
 console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log(1+1);            // 2
console.log("1"+"2");        // 12
console.log("1" + 2);        // 12
console.log(1 + "2");        //
console.log("1" + 2 + 2);    // 122
console.log(1 + 2 + "2");    // 32

console.log( (3 + 4) * 5 % 3);  // 2

let num1 , num2, num3 
num1 = num2 = num3 = 2+2   //bad practice

let x = 100
let y = x++
console.log(x); //101
console.log(y); //100

let a = 100
let b = ++a
console.log(a); //101
console.log(b); //101