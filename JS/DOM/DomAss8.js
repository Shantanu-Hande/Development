//Q1
let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click ME!!";

document.querySelector("body").prepend(input);
document.querySelector("body").append(btn);

//Q2
input.setAttribute("placeholder","Username");
btn.setAttribute("id","btn");

//Q3
btn.classList.add("btnStyle");

//Q4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").prepend(h1);

//Q5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);

