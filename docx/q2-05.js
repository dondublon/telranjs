const bird = {
    size: "small"
};

const mouse = {
    name: "Mickey",
    small: true
};

// console.log(mouse.bird.size);  // not
console.log(bird.size);
console.log(mouse[bird.size]);  // ok
console.log(mouse[bird["size"]]);