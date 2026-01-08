// 1. кроме решения для мышки сделайте управление с клавиатуры
// 'keydown'  e.code: "ArrowUp" "ArrowDown" "ArrowLeft" "ArrowURight"

const player = document.getElementById("player");
const btnUp=document.getElementById("btnUp");

let step = 1;

function getMoveFunc(direction) {
    function move() {
        player.style.top = (player.offsetTop + direction.y * step) + "px";
    }
    return move;
}

btnUp.addEventListener("click", getMoveFunc({ x: 0, y: -1 }));