//+++++++++++++++++++++++++++++++++ this USUAGE IN OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    username: "satish",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.username} has logged in `);       
        console.log(this);                  //global object show karta hai in this ex. user object show kar raha 
    }
}

user.welcomeMessage();                     // satish has logged in
user.username = "prasad";
user.welcomeMessage();                     // prasad has logged in

// console.log(this);                      // {}  in editor
                                           // global object i.e window in browser

//+++++++++++++++++++++++++++++++++ this IN NORMAL FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++

function chai(){
    let username = " satish";
    console.log(this)  
    // console.log(this.username)           // not valid inside function
}                    

// chai()                                  // global object show karta hai in editor and window in browser

//+++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++

const chai1 = () => {                            // arrow function
    let username = "hitesh";
    console.log(this);
}

// chai1()                                         // {}  in editor
                                                   // global object i.e window in browser

//+++++++++++++++++++++++++++++++++ IMPLICIT RETURN +++++++++++++++++++++++++++++++++++++++++++++++++
   
const addTwo_1 = (num1 , num2) => {
    return num1+num2 ;
}

const addTwo_2 = (num1 ,num2) => (num1 + num2)     // IMPLICIT RETURN

const addTwo_3 = (num1 ,num2) => ({username : "hitesh"}) 

console.log(addTwo_1(5,4)) ;
