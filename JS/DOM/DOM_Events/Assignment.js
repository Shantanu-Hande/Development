let h1 = document.querySelector("h1");

h1.addEventListener("mouseout",changeColor);

function changeColor(){
    this.style.color = "blue";
    setTimeout(()=>{
        this.style.color=""
    },500);
}

//  Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

let btn = document.createElement("button");
btn.innerText = "Click Me"
document.querySelector("body").append(btn);
btn.classList.add("button");

btn.addEventListener("click",colorGreen);
function colorGreen(){
    this.style.backgroundColor = "green";
    setTimeout(()=>{
        this.style.backgroundColor=""
    },500);
}

// Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading

let inp = document.querySelector("input");
inp.addEventListener("keydown",changeH2);
function changeH2(event){
    let h2 = document.querySelector("h2");
    if(/[a-zA-Z ]/.test(event.key)){
        h2.innerText = inp.value;
    }
    else{
        event.preventDefault();
    }
}
