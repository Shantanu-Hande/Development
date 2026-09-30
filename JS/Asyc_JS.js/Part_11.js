//                                         Part 11

//        Call Stack
// function hello(){
//     console.log("inside hello fxn");
//     console.log("Hello");
// }
// function demo(){
//     console.log("Calling hello fxn");
//     hello();
// }
// console.log("Calling demo fxn");
// demo();
// console.log("Done , Bye");

//       Visualizing Call Stack
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     const ans = two() + one();
//     console.log(ans);
// }
// three();

//       JS is Single Threaded 
// setTimeout(()=>{
//     console.log(" Apna College");
// },2000);
// console.log("Helloo");

//        Callback Hell
// h1 = document.querySelector("h1");
// function changeColor(color,delay,nextColorChange){
    // setTimeout(()=>{
    //     h1.style.color = color;
    //     if(nextColorChange) nextColorChange();
    // },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     });
// })


//                                           Promises

// function savetoDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// } 
// savetoDB(
//     "Shantanu Hande",
//     ()=>{
//         console.log("Succes : data was saved");
//         savetoDB("Hello World",
//             () =>{
//             console.log("Success2 : data2 saved");
//             savetoDB("heyy",()=>{
//                 console.log("Success3 : data3 was saved");
//             },()=>{
//                 console.log("Failure3 : weak connection");
//             })
//         },()=>{
//             console.log("Failure2 : weak connection");
//         });
//     },
//     ()=>{
//         console.log("Failure : weak connection. data not saved");
// });                                                               // Without Promises

// function savetoDB(data){                                          //With Promises
//    return new Promise((resolve,reject) => {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         resolve(data);  //result
//     }
//     else{
//         reject("failure");   //error
//     }
//    });
// }
// savetoDB("Shantanu Hande")  
// .then((result) => {
//     console.log("result : ", result);
//     console.log("data1 saved.");
//     return savetoDB("heyyyy");
// })
// .then((result) => {
//     console.log("result : ", result);
//     console.log("data2 saved");
//     return savetoDB("hehehehe");
// })
// .then((result) => {
//     console.log("result : ", result);
//     console.log("data3 saved");
// })
// .catch((error) => {
//     console.log("error : ", error);
//     console.log("promise was rejected");
// });


h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
           h1.style.color = color;
           resolve("color changed");
        },delay);
    })
}

changeColor("red",1000)
.then(()=>{
    console.log("color changed to red");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("color changed to orange");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("color changed to blue");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("color changed to green");
})





