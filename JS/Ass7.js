//Q1
// let arr = [2,3,4,5];
// const square = arr.map((el) => el*el);
// console.log(square);
// let sum = square.reduce((res,el) => (res+el),0);
// let avg = sum/arr.length;
// console.log(avg);

//Q2
// let number = [1,2,3,4,5];
// let newArr = number.map((el) => el+5);
// console.log(newArr);

//Q3
// let str = ["shantanu","yash","atul","jay"];
// let newStr = str.map((el) => el.toUpperCase());
// console.log(newStr); 

//Q4
// const doubleAndReturnArgs=(arr,...args) => [
//     ...arr,
//     ...args.map((el)=>el*2),
// ];
// doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
// doubleAndReturnArgs([2],10,4);//[2,20,8]

//Q5
// const mergeObjects = (obj1,obj2) => ( {...obj1, ...obj2});
// console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
