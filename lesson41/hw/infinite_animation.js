const t=setInterval(move,10);
pos = { x: 0,  y: 0 };

class Direction {
    constructor() {
        this.vectors = [
            { x: 1,  y: 0 },  // вправо
            { x: 0,  y: 1 },  // вниз
            { x: -1, y: 0 },  // влево
            { x: 0,  y: -1 }  // вверх
        ];
        this.index = 0;
    }

    current() {
        return this.vectors[this.index];
    }

    turn() {
        this.index = (this.index + 1) % this.vectors.length;
    }
}

direction = new Direction();
MAX = 300;

function move(){
    curr = direction.current();
    pos.x += curr.x;
    pos.y += curr.y;

    if ((pos.x<=0 && pos.y<=0) ||
        (pos.x>=MAX && pos.y>=0) ||
        (pos.x>=MAX && pos.y>=MAX) ||
        (pos.x<=0 && pos.y>=MAX)) {
        direction.turn();
    }
    
    box.style.top=pos.x + "px";
    box.style.left=pos.y + "px";

}
