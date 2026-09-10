//                                       Miscellaneous Topics
//                                       "this" Keyword in JS
// const student = {
//     name : "Shantanu",
//     age : 22,
//     eng : 91,
//     maths : 95,
//     sci : 90,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.maths + this.sci) / 3;
//         console.log(`${this.name}'s average marks = ${avg}`);
//     }
// }

//                                           try & catch               
// console.log("hello");
// console.log("hello");
// // let a = 5;
// try{
//     console.log(a);
// }catch(err){
//     console.log("Caught an error..... a is not defined");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

//                                       Arrow Functions
// const sum = (a,b) => {
//     console.log(a+b);
// }
// const cube = n => {
//     return n*n*n;
// }
// const hello = () =>{
//     console.log("hello world !!");
// }
// const pow = (a,b) => {
//     return a**b;
// }
// const mul = (a,b) => (a*b)     // Implicit return

//                                       SetTimeOut Function
// console.log("Hi there");
// setTimeout(()=>{
//     console.log("Apna college!!!");
// },2000);
// console.log("Welcome to");

//                                       SetInterval Function
// let id = setInterval(() => {
//     console.log("Hello there !!");
// }, 1000);
// console.log(id);      // clearInterval(id); ===> to stop the setInterval Function

//                                    this with the Arrow Functions
// const student = {
//     name : "Shantanu",
//     age : 22,
//     prop : this , //global scope so the "this" is window
//     getName : function(){
//         console.log(this);
//         return this.name;  // student object
//     },
//     getAge : () => {
//         console.log(this);   // window object ,Parent scope which is object and object scope is global
//         return this.age;
//     },
//     getInfo1 : function(){
//         setTimeout(() => {
//             console.log(this);  // student object
//         }, 2000);
//     },
//     getInfo2 : function(){
//         setTimeout( function () {
//             console.log(this);  // window object
//         }, 2000);
//     },
// };

//Practice Q1
// let square = (n) => (n*n);
// console.log(square(8));

//Practice Q2
let id = setInterval (() => {
    console.log("Hello World !!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval ran");
},10000);




