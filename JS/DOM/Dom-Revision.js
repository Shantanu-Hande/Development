// Dom Manipulation

//Selecting Element  --> Mostly we use document.querySelector("Element or .class or #id") and document.querySelectorAll("Element or .class or #id").  
//document.getElementById(id) & document.getElementByClassName(class) these were used earlier

let h1 = document.querySelector("h1")
console.dir(h1) // Use to content of selected element
h1.innerText = "Heyyyy Shantanuuuuu!!!"

// Attribute Manipulation --> Element.setAttribute(attribute_name,value)  , Element.getAttribute(attribute_name) & Element.removeAttribute(attribute_name)

let a = document.querySelector("a")
a.setAttribute("href","https://www.google.com")
console.log(a.getAttribute("href"))
a.removeAttribute("href")

//Dynamic DOM Manpulation ==> createElement , appendChild , removeChild & prepend

//Create Element
let p = document.createElement("p")
p.innerText = "hehehhehe"
// Append/Prepend as you want
document.querySelector("body").prepend(p)

//Style Updates --> style & classList(add,remove,toggle)
h1.style.color = "blue" 
p.classList.add("demo")
