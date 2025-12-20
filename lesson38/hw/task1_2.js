let arr = [1, "rrr", 2, "qqq"];

console.log(gatherStrings(arr));

function gatherStrings(arr_) {
    let arr_new = [];
    for (let i = 0; i < arr_.length; i++) {
        if (typeof arr_[i] === "string") {
            arr_new.push(arr_[i]);
        }
    }
    return arr_new;
}
