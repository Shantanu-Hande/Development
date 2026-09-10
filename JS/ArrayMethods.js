//                                     Array Methods (High Order Functions)
//                                                arr.forEach()
// let arr = [1,2,3,4,5];
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);
// arr.forEach(function(el){
//     console.log(el);
// })
// arr.forEach((el) => {
//     console.log(el);
// })
// const arr = [
//     {
//         name : "shantanu",
//         marks : 89,
//     },
//     {
//         name : "yash",
//         marks : 85,
//     },
//     {
//         name : "vaishnavi",
//         marks : 98,
//     }
// ];
// arr.forEach((students) => {
//     console.log(students.marks);
// });

//                                              arr.map()
// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el*2;
// });
// const students = [
//     {
//         name : "shantanu",
//         marks : 89,
//     },
//     {
//         name : "yash",
//         marks : 85,
//     },
//     {
//         name : "vaishnavi",
//         marks : 98,
//     }
// ];
// let gpa = students.map((el) => {
//     return el.marks/10;
// });

//                                             arr.filter()
// let nums = [2,1,4,3,6,5,8,9,7,456,789];
// let even = nums.filter((num) => (num%2 == 0));

// //                                   arr.every()  --> kinda logical And
// [1,2,3,4].every((el) => (el % 2 == 0));  //false
// [2,4].every((el) => (el % 2 ==0));       //true

// //                                   arr.some()   --> kinda logical Or
// [1,2,3,4].some((num) => (num%2==0));   //true
// [1,3].some((num) => (num%2==0));      //false

//                                               arr.reduce()
// let arr = [1,2,3,4];
// let finalVal = arr.reduce((res,el) => (res+el));
// console.log(finalVal); 

//Practice Q1
// let arr = [2,5,9,7,3,84,7,9,90];
// let maximum = arr.reduce((res,el) => {
//     console.log(res);
//     if(res > el){
//         return res;
//     }else{
//         return el;
//     }
// });

//Practice Q2 --> All num multiple of 10 or not
// let num = [10,30,50,40];
// let ans = num.every((el) => el%10 == 0);
// console.log(ans);

//Practice Q3 --> min number in an array
// let arr = [2,4,6,-7,-3,9,0,3,-1];
// function getMin (arr) {
//     let min = arr.reduce((res,el) => {
//         if(res<el){
//             return res;
//         } else{
//             return el;
//         }
//     });
//     return min;
// } 

//                                              Default Parameter
// function sum(a,b=3){
//     return a+b;
// } 
// console.log(sum(2));   // 5

//                                                    Spread
// let num = [1,2,4,5,6,7,8,9];
// console.log(...num);

// let str = "Shantanu Hande";
// console.log(...str);

//Spread with Array Literals

// let arr = [3,78,90,65,46];
// let newArr = [...arr];
// console.log(newArr);
// let chars = [..."SHANTANU"];
// console.log(chars);
// let even = [2,4,6,8];
// let odd = [1,3,5,7,9];
// let nums = [...odd,...even];

//Spread with Object Literals

// const data = {
//     email : "handeshantanu0@gmail.com",
//     password : "abcd",
// }
// const dataCopy = {...data,id : 123};
// let obj1 = {...arr}; // key will be the index 

//                                                    Rest 
// function sum(...args){
//     return args.reduce((sum,el) => sum + el);
// };
// function min(...args){
//     return args.reduce((min,el) =>{
//         if(min > el){
//             return el;
//         } else{
//             return min;
//         }
//     });
// };

//                                       Destructuring
// let names = ["shantanu ", "yash", "vaishnavi", "atul", "jay"];
// let [first, second , ...others] = names;
// console.log(first);
// console.log(second);
// console.log(...others);

//Destructuring for Object Literals
const student = {
    name : "Abhi",
    age : 13,
    class : 8,
    subject : ["science","maths","history"],
    username : "abhi123",
    password : "abhi@123",
    city : "ulhasnagar",
};
let {username : user , password : secretKey , city : place = "mumbai"} = student;