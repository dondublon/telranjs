// 1. кроме решения для мышки сделайте управление с клавиатуры
// 'keydown'  e.code: "ArrowUp" "ArrowDown" "ArrowLeft" "ArrowURight"

const player = document.getElementById("player");
const btnUp=document.getElementById("btnUp");
const btnDown=document.getElementById("btnDown");
const btnLeft=document.getElementById("btnLeft");
const btnRight=document.getElementById("btnRight");

let step = 5;

function getMoveFunc(direction) {
    function move() {
        player.style.top = (player.offsetTop + direction.y * step) + "px";
        player.style.left = (player.offsetLeft + direction.x * step) + "px";
    }
    return move;
}

const moveUp = getMoveFunc({ x: 0, y: -1 });
btnUp.addEventListener("click", moveUp);
const moveDown = getMoveFunc({ x: 0, y: 1 });
btnDown.addEventListener("click", moveDown);
const moveLeft = getMoveFunc({ x: -1, y: 0 });
btnLeft.addEventListener("click", moveLeft);
const moveRight = getMoveFunc({ x: 1, y: 0 });
btnRight.addEventListener("click", moveRight);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        moveUp();
    }
    else if (e.key === "ArrowDown") {
        moveDown();
    }
    else if (e.key === "ArrowLeft") {
        moveLeft();
    }
    else if (e.key === "ArrowRight") {
        moveRight();
    }
});