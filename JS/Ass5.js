//Q1
// const arr = [1,3,4,5,6,8,9,2,9,8];
// const n = 4;
// function largest(arr,n){
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > n){
//             console.log(arr[i]);
//         }
//     }
// }
// console.log(largest(arr,n));

//Q2
// let str = "abcdabcdefgggh";
// function getUnique(str) {
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];

//         if (ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// console.log(getUnique(str));

//Q3
// const country=["Australia","Germany","United States of America"];
// function longestString(country){
//     let longest = 0;
//     for(let i = 0 ; i < country.length ; i++){
//         if(country[i].length > longest){
//             longest = i;
//         }
//     }
//     return longest;
// }
// console.log(country[longestString(country)]);

//Q4
// const str = "Shantanu";
// function vowelCount(str){
//     let count = 0;
//     for(let i = 0 ; i < str.length ; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelCount(str));

//Q5
let start = 1;
let end = 10;
function generateRandom(start, end) {
    let diff = end - start + 1;

    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));