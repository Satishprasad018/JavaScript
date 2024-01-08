//singlton
//object.create

// Object literals

const mySym = Symbol("key1");

const Jsuser = {
    name : "satish",
    "full name" : "Satish Ramjanam Prasad",
    age : 20,
    [mySym] : "Satish@123",
    location : "pune",
    email : "prasadsatish333@gmail.com",
    lastLoginDays : ["Monday","Wednesday"]
}

// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser.age);
// console.log(Jsuser[mySym]);

// Jsuser.email = "satish.prasad.018@gmail.com";
// Object.freeze(Jsuser);
// Jsuser.email = "satish.018@gmail.com";
// console.log(Jsuser);


Jsuser.greetings = function(){
    console.log("hell o world");
}
Jsuser.greetingsTwo = function(){
    console.log(`hell o ${this.name}  nflkvhf afgfajsrgh hgsrhfg`);
}
Jsuser.greetings();

console.log(Jsuser.greetingsTwo());

