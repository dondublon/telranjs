const num_s = prompt("Please enter a number");
let num = Number(num_s);
console.log(num);

if (isNaN(num))
    console.error("Wrong value")
else {
    let arr = toArray(num);
    console.log(arr);
}

function toArray(num) {
    let s = String(num);
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
        arr.push(Number(s[i]));
    }
    return arr;
}