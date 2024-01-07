
const num1 = 400
console.log(num1);

const num2 = new Number(46485.844)
console.log(num2);

console.log(typeof(num2.toString()));

console.log(num2.toFixed(3));            //
console.log(num2.toPrecision(3));        //

console.log(num2.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++ Maths   +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());     // value between 0 and 1 
console.log(Math.random()*10); // if 0.706565416 -----> 7.06565416  exception 0.003672 ---> 0.03672     
console.log((Math.random()*10)+1); // exception cleared   0.003672 ---> 0.03672 + 1 ----> 1.003672

//if range is given

const min = 25
const max = 50

console.log(Math.floor(Math.random() * (max-min+1) + min));