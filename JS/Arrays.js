//                                                Creating an Array
// let nums = [89,97,67];
// console.log(nums);
// let info = ["Shantanu" , 22 , 7.2];
// console.log(info);
// console.log(info[0]); ===> "Shantanu"
// console.log(info[0][0]); ===> 'S'

//                                                Arrays are Mutable
// let fruits = ["Apple","Banana","Mango"];
// console.log(fruits);
// fruits[1] = "Pineapple";
// console.log(fruits);
// fruits[4] = "Banana";
// console.log(fruits);

//                                                  Array Methods
//array.push()  ===> add at end
// let cars = ["BMW","Audi","Lamborgini"];
// console.log(cars);
// cars.push("Mercedes");
// console.log(cars);

//array.unshift()  ===>  add at the start 
// cars.unshift("Mercedes");
// console.log(cars);

//array.pop()  ===> remove from back & returns it
// console.log(cars.pop());
// console.log(cars);

//array.shift()  ===> remove from front & returns it
// console.log(cars.shift());
// console.log(cars);

//array.indexOf()  ===> returns the index
// console.log(cars.indexOf("Audi"));
// console.log(cars.indexOf("Ferarri"));

//array.includes()  ===> search for a value
// console.log(cars.includes("BMW"));
// console.log(cars.includes("Bugatti"));

//arry.concat()   ===>  merge 2 arrays
// let num1 = [1,2,3,4];
// let num2 = [5,6,7,8];
// num1.concat(num2);

//array.reverse() ===> reverse an array
// let color = ["red","blue","black","green"];
// console.log(color);
// color.reverse();
// console.log(color);

//array.slice() ===> copies a portion of an array;
// let subject = ["maths","science","history","geography"];
// console.log(subject);
// console.log(subject.slice());
// console.log(subject.slice(1,3));
// console.log(subject.slice(-1));

//array.splice() ===> removes,replace,add elements in-place
// let cars = ["BMW","Audi","Lamborgini","Porsche","Xuv"];
// console.log(cars);
// cars.splice(3);  // remove all the elements from 3
// console.log(cars);
// cars.splice(0,1);  // remove 0th element
// console.log(cars);
// cars.splice(0,0,"Ferrari","Mustang","Porsche","Xuv")  // add elements infront of 0th element
// console.log(cars);

//array.sort()  ===> sort an array
// cars.sort();
// console.log(cars);

//                                          Array References ---> address in memory
//case 1  --- in these case the address are different
// let num1 = [1,2,3];
// let num2 = [1,2,3];
// console.log(num1==num2);
// console.log(num1===num2);

//case 2  --- in these the address are same
// let num1 = [1,2,3];
// let num2 = num1;
// console.log(num1==num2);
// console.log(num1===num2);
// num1.push(4);
// console.log(num2);

//                                                  Constant Array
//In constart array we can perfrom operations, but we cannot reassign or change the address


//                                                   Nested Array
// let nums = [[2,3],[4,5],[6,7]];
// console.log(nums[1][0]);
//Practice Question tic-tac-toe
// let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(game);
// game[0][1] = 'O';
// console.log(game);
