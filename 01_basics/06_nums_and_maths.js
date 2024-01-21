
const num1 = 46485.844
console.log(num1);                       // 46485.844

const num2 = new Number(46485.844)
console.log(num2);                      // [Number: 46485.844]

console.log(num2.toString());           // 46485.844
console.log(typeof(num2.toString()));   // string

console.log(num2.toFixed());            // 46485
console.log(num2.toFixed(1));            // 46485.8
console.log(num2.toFixed(2));            // 46485.84
console.log(num2.toPrecision());        // 46486.844
console.log(num2.toPrecision(1));        // 5e+4
console.log(num2.toPrecision(3));        // 465e+4
console.log(num2.toPrecision(5));        // 46486

console.log(num2.toLocaleString('en-IN')); // 46,485.844

//+++++++++++++++++++++++++++++ Maths   +++++++++++++++++++++++++++++++

console.log(Math);                      // Object [Math] {}
console.log(Math.abs(-4));              // 4
console.log(Math.round(4.6));           // 5
console.log(Math.ceil(4.2));            // 5
console.log(Math.floor(4.9));           // 5
console.log(Math.min(4, 3, 6, 8));      // 3
console.log(Math.max(4, 3, 6, 8));      // 8

console.log(Math.random());             // value between 0 and 1 
console.log(Math.random()*10);          // if 0.706565416 -----> 7.06565416  exception 0.003672 ---> 0.03672     
console.log((Math.random()*10)+1);     // exception cleared   0.003672 ---> 0.03672 + 1 ----> 1.003672

//if range is given

const min = 25
const max = 50

console.log(Math.floor(Math.random() * (max-min+1) + min));
