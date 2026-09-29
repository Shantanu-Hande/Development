let inp = document.querySelector("input");

inp.addEventListener("change",function(){
    console.log(inp.value)
    let para = document.querySelector('p');
    para.innerText = inp.value;
})


// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("Form Submitted");
//     console.dir(form);
//     console.log(form[0].value);
//     console.log(form[1].value);
//     let user = this.elements[0]; //form.elements[0];
//     let pass = this.elements[1]; //form.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// })

// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// input.addEventListener("keydown",function(event){
//     console.log("code = ",event.code);
//     if(event.code == "ArrowUp"){
//         console.log("character moves forward");
//     } else if(event.code == "ArrowDown"){
//         console.log("character moves backward");
//     }else if(event.code == "ArrowRight"){
//         console.log("character moves right");
//     }else if(event.code == "ArrowLeft"){
//         console.log("character moves left");
//     }
// })

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector('p');
// let btn = document.querySelector("button");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color Updated");

// });
// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }
