let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);                       // 0 2 4 6 8 10
  index = index + 2;
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);                         // flash, batman, superman
  arr = arr + 1;
}

let score = 11;

do {
  console.log(`Score is ${score}`);                               // Score is 11 
  score++;
} while (score <= 10);
