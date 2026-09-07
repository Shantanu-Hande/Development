//Assignment 1

//Q1
// let num = prompt("Enter a num : ");
// if(num % 10 == 0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

//Q2
// let userName = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");
// console.log(`${userName} is ${age} years old`);

//Q3
// let quarter = Number(prompt("Enter a quarter : "));
// switch(quarter){
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break; 
//     default :
//         console.log("Invalid Quarter");
// }

//Q4
// let str = prompt("Enter a string : ");
// if((str[0] === 'A' || str[0] === 'a') && str.length > 5){
//     console.log("Golden String");
// }
// else{
//     console.log("Not a Golden String");
// }

//Q5
// let num1 = Number(prompt("Enter num1 : "));
// let num2 = Number(prompt("Enter num2 : "));
// let num3 = Number(prompt("Enter num3 : "));
// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// } else if (num2 > num3) {
//     console.log(num2);
// } else {
//     console.log(num3);
// }

//Q6
let num1 = prompt("Enter a num1 : ");
let num2 = prompt("Enter a num2 : ");
if(num1 % 10 == num2 % 10){
    console.log("True");
}
else{
    console.log("False");
}
