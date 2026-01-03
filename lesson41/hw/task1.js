while (true) {
    let str = prompt("Enter the string");
    if (str === null || str === "") {break}
    const newP = document.createElement("p");
    const newPText = document.createTextNode(str);
    newP.appendChild(newPText);
    document.body.appendChild(newP);
}