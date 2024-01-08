
    email: "some@gmail.com",

    fullname: {

const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {

        userFullName: {

            firstName: "Satish",
            lastName: "Prasad"
        }

    }

}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id: 14545,
        email: "h@gm4535ail.com"
    },
    {
        id: 1345,
        email: "h@dfasfgmail.com"
    },
    {
        id: 1543,
        email: "h@gmsfsail.com"
    },
]

// console.log(users[2].id)

// console.log(Object.keys(tinderUser));   // in array format
// console.log(Object.values(tinderUser));  // in array format
// console.log(Object.entries(tinderUser));   // each entries in array //and array of entries

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : inst} = course    // object destructuring 
const {coursename : name} = course    // object destructuring 

console.log(name);

