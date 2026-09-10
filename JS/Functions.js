//              Functions
function hello(){
    console.log("Hello!!!");
}
hello();

function printName(){
    console.log("Shantanu Hande");
}
printName();

function print1to5(){
    for(let i = 1 ; i <= 5 ; i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age = prompt("Enter the age");
    if(age >= 18){
        console.log("The person is Adult");
    }
    else{
        console.log("The person is not Adult");
    }
}
isAdult(); 


//Practice Q1
function printPoem(){
    console.log("Twinkle , Twinkle little star,");
    console.log("How i wonder what you are,");
    console.log("Up above the world so high, ");
    console.log("Like a daimmond in the sky!!!");
}
printPoem();


//Practice Q2
function rollDice(){
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}
rollDice();


//Functions with Arguments
function printInfo(name , age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Shantanu",22);

function sum(a,b){
    console.log(`Sum of ${a} & ${b} is ${a+b}.`);
}
sum(10,10);

//Practice Q3
function calcAvg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(`Average of ${a},${b} and ${c} is ${avg}`);
}
calcAvg(20,10,3);

//Practice Q4
function printTable(n){
    for(let i = 1 ; i <= 10 ; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
} 
printTable(456);


//Return Keyword
//Practice Q5
function sumOfN(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfN(9));

//Practice Q6
let str = ["s","h","a","n","t","a","n","u"];
function concat(str){
    let result = "";
    for(let i = 0 ; i < arr.length ; i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));

//Scope
// Global Scope , Function Scope , Lexical Scope
//Practice Q7
let greet = "hello";  // Global Scope

function outerGreet(){
    let greet = "namaste";
    console.log(greet);        // Function Scope
    function innerGreet(){
        console.log(greet);    //Lexical Scope
    }
    innerGreet();
}
console.log(greet);
outerGreet();


//Function Expressions
let sum = function(a,b){
    return a+b;
}
console.log(sum(3,4));

let hello = function(){
    console.log("hello");
}
hello();

hello = function(){
    console.log("namaste");
}
hello();


//Higher Order Function
function multipleGreet(func , n){
    for(let i = 1; i <= n ; i++){
        func();
    }
}

// let greet = function(){
//     console.log("Hello");
// }
// multipleGreet(greet,30);

//Higher Order Function which returns functions
function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 ==0);
        }
    }
    else{
        consle.log("Wrong request");
    }
}
let func = oddEvenTest("even");


//Methods
// const calculator = {
//     num : 45,
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     mul : function(a,b){
//         return a*b;
//     }
// }
// console.log(calculator.add(3,4));

//Method shorthand format 
const calculator  = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
