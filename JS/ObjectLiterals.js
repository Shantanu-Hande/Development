//                                           Object Literals 
//Object is a collection of properties. Porperty ==> (key : value) pair. 
// const student = {
//     name : "Shantanu",
//     age : 22,
//     marks : 85.5,
//     city : "Ulhasnagar",
//     email: "handeshantanu0@gmail.com",
// };
// console.log(student.name);

//Object Literal for a post properties
// const post = { 
//     userName : "@shantu.hande",
//     content : "This is my #FirtPost",
//     likes : 108,
//     reposts : 4,
//     tags : ["@apnacollege","@sigma"],
// };

// Add / Update / Delete Value
// const student = {
//     name : "Shantanu",
//     age : 22,
//     marks : 85.5,
//     city : "Ulhasnagar",
//     email: "handeshantanu0@gmail.com",
// };
// student.city = "Mumbai";  //Update
// student.gender = "Male";  //Add
// delete student.email;     //Delete

// Nested Object or Object of Objects
// const classInfo = {
//     shantanu : {
//         grade : "A",
//         city : "Ulhasnagar"
//     },
//     yash : {
//         grade : "B",
//         city : "Thane"
//     },
//     vaishnavi : {
//         grade : "A+",
//         city : "Nashik"
//     }
// };

//Array of Objects
// const classInfo = [
//     {
//         name : "shantanu",
//         grade : "A"
//     },
//     {
//         name : "yash",
//         grade : "A"
//     },
//     {
//         name : "vaishnavi",
//         grade : "A+"
//     }
// ];

//Random Integer
// let num1 = Math.floor(Math.random()*10)+1;  // Random number between 1 - 10
// let num2 = Math.floor(Math.random()*100)+1;  // Random number between 1 - 100
// let num3 = Math.floor(Math.random()*5)+21;  // Random number between 21 - 25

//Number Guessing Game 
const num = prompt("Enter a range from 1 to ");
const random = Math.floor(Math.random()*num)+1;
let guess = prompt("Enter you guess");
while(true){
    if(guess == "quit"){
        console.log("you quit mann");
        break;
    } 

    if(guess == random){
        console.log("Woohooo You Got it right !!!");
        break;
    }else if( guess < random){
        guess = prompt("your guess is small , guess again");
    }
    else{
       guess = prompt("your guess is big , guess again");
    }
}
