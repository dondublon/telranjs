let btnAdd = document.getElementById("btnAdd");
let inputName = document.getElementById("inputName");
let inputSirname = document.getElementById("inputSirname");
let inputEmail = document.getElementById("inputEmail");
btnAdd.addEventListener("click", addParagraph)

function addParagraph() {
    event.preventDefault();
    let str = `Name: ${inputName.value}, Sirname: ${inputSirname.value}, Email: ${inputEmail.value}`;
    const newP = document.createElement("p");
    const newPText = document.createTextNode(str);
    newP.appendChild(newPText);
    document.body.appendChild(newP);

}

