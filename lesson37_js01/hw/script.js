function sliceStep(s, start, end, step) {
    let sum = 0;

    for (let i = start; i < end; i += step) {
        sum += Number(s[i]);
    }

    return sum;
}

function isHappy(n) {
    let s = String(n);
    let sum1 = sliceStep(s, 0, s.length, 2);
    let sum2 = sliceStep(s, 1, s.length, 2);
    return sum1 === sum2;
}

console.log(isHappy(1210));
console.log(isHappy(135));