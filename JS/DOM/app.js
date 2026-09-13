// let smallImages = document.getElementsByClassName("oldImg");

// console.log(smallImages.length);

// for (let i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of img at ${i} is changed`);
// }

//QuerySelector
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#mainImg"));
// console.dir(document.querySelectorAll(".oldImg"));

// let links = document.querySelectorAll('.box a');
// for(link of links){
//     link.style.color = 'red';
// }
// for(let i = 0 ; i < links.length ; i++){
//     links[i].style.color = 'red';
// };

//Practice Question
let para1 = document.createElement('p');
para1.innerText = "Hi! i am red"
document.querySelector('body').prepend(para1);
para1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText = "i am a blue h3"
document.querySelector('body').prepend(h3);
h3.classList.add("blue");

let div1 = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "hii i'm in a div";
para2.innerText = "Me Too";

div1.append(h1);
div1.append(para2);
div1.classList.add("box");

document.querySelector('body').prepend(div1);