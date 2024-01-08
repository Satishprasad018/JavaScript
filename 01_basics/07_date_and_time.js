 // Date

 let myDate = new Date()

//  console.log(myDate);
// //  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toLocaleTimeString());

//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());

//  console.table([myDate.getDate(),myDate.getDay(),myDate.getMonth(),myDate.getFullYear(),myDate.getTime(),myDate.getHours(),myDate.getMinutes(),myDate.getSeconds()]);
 
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);      //whole date and time in milisecond same to myTimeStamp.getTime()
// console.log(myCreatedDate.getTime());           
// console.log(Math.floor(Date.now()/1000));   // in second

 console.log(myDate.toLocaleString('Default',{weekday:"long"}));
