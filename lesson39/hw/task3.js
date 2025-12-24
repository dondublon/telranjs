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


let arr = get_array_from_prompt();