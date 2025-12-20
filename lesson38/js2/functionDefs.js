console.log("Hello");

function lucky(num) {
    let sum = 0;

    while (num > 0) {
        console.log("num " + num + ", sum 0");
        console.log("new sum = " + num + " % 10 - " + sum);
        sum = (num % 10) - sum;
        console.log("new sum = " + sum);
        console.log("new num = (" + num + " - (" + num + ")%10))/10");
        num = (num - (num % 10)) / 10;
        console.log("new num = " + num);
    }

    return sum === 0;
}
lucky(123871);
// alert("hello");
let arr = [2, 5, 18];
arr[7] = 9;
console.log(arr)
console.log(arr.shift())
console.log(arr.pop())
console.log(arr)