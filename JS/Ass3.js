//Q1
// let arr = [1,2,2,2,5,2,5];
// let num = Number(prompt("Enter a num"));
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//         i--;
//     }
// }
// console.log(arr);

//Q2
// let num = parseInt(prompt("Enter a number"));
// let count = 0;
// while(num > 0){
//     num = Math.floor(num/10);
//     count++;
// }
// console.log(count);

//Q3
// let num = parseInt(prompt("Enter a num"));
// let sum = 0;
// while(num > 0){
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num/10);
// }
// console.log(sum);

//Q4
// let num = parseInt(prompt("Enter a num"));
// let fact = 1;
// for(let i = 1 ; i <= num ; i++){
//     fact *= i;
// }
// console.log(fact);

//Q4
let arr = [2,4,9,6,7,1,5,8,7,10];
let largest = arr[0];
for(num of arr){
    if(num > largest){
        largest = num;
    }
}
console.log(largest);