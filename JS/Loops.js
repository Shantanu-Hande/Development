//                                  Loops
//                                 For Loop
// for(let i = 1 ; i <=5 ; i++){
//     console.log(i);
// }
// for(let i = 5 ; i > 0 ; i--){
//     console.log(i);
// }

// //print odd number
// for(let i = 1 ; i <=15 ; i = i+2){
//         console.log(i);
// }
// //print even number
// for(let i = 2; i <= 10 ; i = i+2){
//         console.log(i);
// }

//Multiplication of 5
// let n = Number(prompt("Enter a number"));
// for(let i = 1 ; i <= 10 ; i++){
//     console.log(`${n} x ${i} = ${n*i}`);
// }

//                               Nested Loops
// for(let i = 1; i <= 3 ; i++){
//     for(let j = 1 ; j <= 3 ; j++){
//         console.log(i);
//     }
// }

//                                While Loop
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

//Favorite Movie
// let favorite = "Avatar";
// let guess = prompt("Enter your guess");
// while((guess != favorite) ){
//     if(guess == "quit"){
//         console.log("You Quit");
//         break;
//     }
//     guess = prompt("Wrong Guess, Enter your guess");
// }
// if(guess == favorite){
//     console.log("Congrats!!!");
// }

//                            Loops With Arrays 
// let fruits = ["apple" ,"banana","pineapple","mango"];
// console.log(fruits);
// for(let i = 0 ; i < fruits.length ; i++){
//     console.log(i,fruits[i]);
// }

//                         Nested Loops With Arrays
// let heroes = [["ironman","spiderman","thor"],["superman","batman","wonder women"]];
// for(let i = 0 ; i < heroes.length ; i++){
//     console.log(i, heroes[i] ,heroes[i].length );
//     for(let j = 0 ; j < heroes[i].length ; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let student = [["shantanu",85],["yash",75],["Vaishnavi",98]];
// for(let i = 0 ; i < student.length ; i++){
//     for(let j = 0 ; j < student[i].length ; j++){
//         console.log(student[i][j]);
//     }
// }

//for of loop
// let fruits = ["apple","banana","mango","pineapple"];
// for(fruit of fruits){
//     console.log(fruit);
// }

//Nested for of loop
// let heroes = [["ironman","spiderman","thor"],["superman","batman","wonder women"]];
// for(list of heroes){
//     console.log(list);
//     for(hero of list){
//         console.log(hero);
//     }
// }

