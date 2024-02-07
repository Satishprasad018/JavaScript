const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("got details");
    //console.log(`username : ${this.username}`);
    console.log(this);
  },
};
//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

const userOne = User("hitesh", 12, true);

const userTwo = User("Satish", 122, false);
console.log(userOne);
/* 
  fetch: [AsyncFunction: fetch],
  username: 'Satish',
  loginCount: 122,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}*/

const userThree = new User("Prash", 22, false);
console.log(userThree);

console.log(userThree.constructor);