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

comparator2 = (str1, str2) => {
    if (str1.length > str2.length)
        return 1;
    else if (str1.length < str2.length)
        return -1;
    else if (str1.length === str2.length)
        return 0;
    else
        throw new Error("Something terrible happened")
}
