function get_array_from_prompt () {
    arr = []
    while (true) {
        let new_str = prompt("Enter a string:")

        if (new_str === null)
            break;
        else if (new_str.length > 0)
            arr.push(new_str)
    }
    return arr
}

new_arr = get_array_from_prompt();
console.log(new_arr)