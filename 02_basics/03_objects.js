//singlton
//object.create

// Object literals

const mySym = Symbol("key1");                               // symbol declaration

const Jsuser = {
    name : "satish",
    "full name" : "Satish Ramjanam Prasad",
    age : 20,
    [mySym] : "Satish@123",                                // use of symbol in object
    location : "pune",
    email : "prasadsatish333@gmail.com",
    lastLoginDays : ["Monday","Wednesday"]
}

console.log(Jsuser.name);                               
console.log(Jsuser["name"]);
console.log(Jsuser["full name"]);
console.log(Jsuser.age);
console.log(Jsuser[mySym]);                                // symbol printing

Jsuser.email = "satish.prasad.018@gmail.com";             // updated email
Object.freeze(Jsuser);                                    // freeze no further updation
Jsuser.email = "satish.018@gmail.com";
console.log(Jsuser);


Jsuser.greetings = function(){                      // function declaration in object 
    console.log("hell o world");
}

Jsuser.greetingsTwo = function(){
    console.log(`hell o ${this.name}  nflkvhf afgfajsrgh hgsrhfg`);
}

Jsuser.greetings();                         // hell o world

console.log(Jsuser.greetingsTwo());         // hell o satish  nflkvhf afgfajsrgh hgsrhfg ---->then---->undefined

let circle = {
    radius: 10,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }

};

console.log(circle.area());                // => 314.1592653589793
console.log(typeof circle.area);           // => function
