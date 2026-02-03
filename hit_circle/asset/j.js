const again = document.getElementById("again");
const word = document.getElementById("word");
const dot = document.getElementById("game");
const start = document.getElementById("start");
let score = 15;

function gameStart(){
    console.log('ee')
    word.textContent = score;
    again.classList.remove("end");
    word.classList.remove("end");
    dot.classList.add("hid");
    start.classList.add("hid");
}
function playAgain(){
    again.classList.add("end");
    word.classList.add("end");
    dot.classList.remove("hid");
    start.classList.remove("hid");
}