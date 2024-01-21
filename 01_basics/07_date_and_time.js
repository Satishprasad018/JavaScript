// // ++++++++++++++++++++++++++Date ++++++++++++++++++++++++++++++++++

let myDate = new Date();                     // 21/1/2024

console.log(myDate);                         // 2024-01-21T14:22:30.630Z
console.log(myDate.toString());              // Sun Jan 21 2024 19:52:30 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());         //  Sun Jan 21 2024
console.log(myDate.toLocaleDateString());   //  21/1/2024
console.log(myDate.toLocaleString());       //  21/1/2024, 7:52:30 pm
console.log(myDate.toLocaleTimeString());  //   7:52:30 pm

console.log(myDate.toISOString());           // 2024-01-21T14:22:30.630Z
console.log(myDate.toJSON());                // 2024-01-21T14:22:30.630Z

console.table([
  myDate.getDate(),                          // 21
  myDate.getDay(),
  myDate.getMonth(),
  myDate.getFullYear(),                     // 2024
  myDate.getTime(),                         // 1705846950630
  myDate.getHours(),                        // 19
  myDate.getMinutes(),                     //  52
  myDate.getSeconds(),                     //  30
]);

let myCreatedDate = new Date(2023, 0, 23);          // 23/1/2023 , 12:00:00 a.m
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);    // 23/1/2023 , 5:03:00 a.m
// let myCreatedDate = new Date("2023-01-14");         // 14/1/2023, 5:30:00 am
// let myCreatedDate = new Date("01-14-2023");         //  14/1/2023, 12:00:00 am

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);                     //( 1705848042574) whole date and time in milisecond same to myTimeStamp.getTime()
console.log(myCreatedDate.getTime());         // 1674412200000
console.log(Math.floor(Date.now() / 1000));   // 1705848042 in second

console.log(myDate.toLocaleString("Default", { weekday: "long" })); // Sunday
