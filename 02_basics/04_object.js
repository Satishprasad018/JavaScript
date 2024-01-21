const tinderUser = {};

tinderUser.id = "123abs";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);                // { id: '123abs', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  fullname: {
    email: "some@gmail.com",
    userFullName: {
      firstName: "Satish",
      lastName: "Prasad",
    },
  },
};

console.log(regularUser.fullname.userFullName.firstName);   // Satish

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = Object.assign({}, obj1, obj2, obj4)       // method 1 of merging
 
const obj3 = { ...obj1, ...obj2, ...obj4 };               // merging of object
console.log(obj3);                                        // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [                                       // array of object 
  {
    id: 14545,
    email: "h@gm4535ail.com",
  },
  {
    id: 1345,
    email: "h@dfasfgmail.com",
  },
  {
    id: 1543,
    email: "h@gmsfsail.com",
  },
];

console.log(users[2].id)                             // 1543          

console.log(Object.keys(tinderUser));                // in array format      [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));              // in array format      [ '123abs', 'Sammy', false ]
console.log(Object.entries(tinderUser));             // each entries in array //and array of entries  
                                                    // [ [ 'id', '123abs' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor: inst } = course;             // object destructuring
const { coursename: name } = course;                  // object destructuring

console.log(name);                                  // js in hindi
console.log(inst);                                  // hitesh
