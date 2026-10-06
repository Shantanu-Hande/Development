const board = document.querySelector(".board")
const blockHeight = 50
const blockWidth = 50
let internalId = null
let Score = 0;
let highScore = 0;


const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)
let food = { x: Math.floor(Math.random()*rows) , y: Math.floor(Math.random()*cols) }
const blocks = []
const snake = [{
    x: 4 , y: 6 
},{
    x:4 , y: 7
},{
    x:4 , y: 8
}]
let direction = "left"

for(let row = 0 ; row < rows ; row++){
    for(let col = 0 ; col < cols ; col++){
        const block = document.createElement("div")
        block.classList.add("block")
        board.appendChild(block)
        block.innerText = `(${row},${col})`
        blocks[`(${row},${col})`] = block
    }
}

function render(){
    let head = null;

    blocks[`(${food.x},${food.y})`].classList.add("food");

    if(direction == "left"){
        head = {x: snake[0].x , y: snake[0].y-1}
    }else if(direction == "right"){
        head = {x: snake[0].x , y: snake[0].y+1}
    }else if(direction == "down"){
        head = {x: snake[0].x+1 , y: snake[0].y}
    }else if(direction == "up"){
        head = {x: snake[0].x-1 , y: snake[0].y}
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols){
        alert("Game Over !!")
        clearInterval(internalId)
    }

    if(head.x == food.x && head.y == food.y){
        blocks[`(${food.x},${food.y})`].classList.remove("food");
        food = { x: Math.floor(Math.random()*rows) , y: Math.floor(Math.random()*cols) }
        blocks[`(${food.x},${food.y})`].classList.add("food");
        snake.unshift(head)
        // score();
    }

    snake.forEach(segment => {
        blocks[`(${segment.x},${segment.y})`].classList.remove("fill");
    })

    snake.unshift(head)
    snake.pop()

    snake.forEach(segment => {
        blocks[`(${segment.x},${segment.y})`].classList.add("fill");
    })
}

// function score(){
//     Score++;
//     let currScore = document.querySelector("#score")
//     currScore.innerText = Score; 
//     if(Score > highScore){
//         highScore = Score
//         let HighScore = document.querySelector("#high-score")
//         HighScore.innerText = highScore
//     }
// }

// internalId = setInterval(() => {
//     render()
// },200)

console.log("before listener");
addEventListener("keydown",(event) => {
    if(event.key == "ArrowUp"){
        direction = "up"
    } else if(event.key == "ArrowDown"){
        direction = "down"
    }else if(event.key == "ArrowRight"){
        direction = "right"
    }else if(event.key == "ArrowLeft"){
        direction = "left"
    }
})

