function comparator1(str1, str2) {
    if (str1.length > str2.length)
        return 1;
    else if (str1.length < str2.length)
        return -1;
    else if (str1.length === str2.length)
        return 0;
    else
        throw new Error("Something terrible happened")
}

function get_array_from_prompt () {
    let arr = []
    while (true) {
        let new_str = prompt("Enter a string:")

        if (new_str === null)
            break;
        else if (new_str.length > 0)
            arr.push(new_str)
    }
    return arr
}

function get_max(arr, comparator) {
    if (arr.length === 0)
        return undefined;
    let tmp_max = arr[0];
    arr.forEach((s) => {
        if (comparator(s, tmp_max) === 1)
            tmp_max = s;
    })
    return tmp_max;
}


let arr = get_array_from_prompt();
let max = get_max(arr, comparator1);
console.log(max);
