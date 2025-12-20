let arr = [1, "rrr", 2, "qqq", ["wie", 345, "gfjk"]];

console.log(gatherStrings(arr));

function gatherStrings(arr_) {
    let arr_new = [];
    for (let i = 0; i < arr_.length; i++) {
        // console.log(typeof arr_[i]);
        if (Array.isArray(arr_[i])) {
            // console.log('got array')
            for (let i2 = 0; i2 < arr_[i].length; i2++) {
                if (typeof arr_[i][i2] === "string") {
                    arr_new.push(arr_[i][i2]);
                }
            }
        }
        else if (typeof arr_[i] === "string") {
            arr_new.push(arr_[i]);
        }
    }
    return arr_new;
}
