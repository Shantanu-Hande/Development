let url = "https://catfact.ninja/fact";

//                                Fetch w/o async and await
// fetch(url)                       //we send a request to the api
// .then((res) => {                 //we get a response           
//     return res.json();     //we make it readable by using res.json() method which also returns a promise
// })
// .then((data1) => {         //we get the data from the json()'s  promise
//     console.log("Data1 = ",data1.fact); //we print the data
//     return fetch(url);     //Again send a request
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("Data2 = ",data2.fact);
// })
// .catch((error)=>{        //we got an error
//     console.log(error);
// })

//                              Fetch with async & await
// async function getFacts(){
//     try{
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log("data1 = ",data1.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data2 = ",data2.fact);
//     }
//     catch (e) {
//         console.log("error = ",e);
//     }
// }

//                                   Axios
// let p = document.querySelector('p');
// let btn = document.querySelector("button");
// btn.addEventListener("click",async () => {
//     let fact = await getFacts();
//     p.innerText = fact;
// });
// async function getFacts(){
//     try{
//         let res1 = await axios.get(url);
//         return res1.data.fact;
//     }
//     catch (e) {
//         console.log("error = ",e);
//         return "No Fact Found";
//     }
// }

//                                 Dog Image
let url2 = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("#result");
let btn = document.querySelector("button");
btn.addEventListener("click",async () => {
    let link = await getImages();
    console.log(link);
    img.setAttribute("src",link);
});
async function getImages(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch (e) {
        console.log("error = ",e);
        return "No Image Found";
    }
}


