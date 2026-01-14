const staff = new Staff();
const inputId = document.getElementById("inputId");
const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const inputBirthDate = document.getElementById("inputBirthDate");
// const lstResult = document.getElementById("lstResult");
const btnAdd = document.getElementById("addPerson");
outTotalPersons = document.getElementById("totalPersons");
outAvgAge = document.getElementById("avgAge");
outMaxAge = document.getElementById("minAge");
outMinAge = document.getElementById("maxAge");

btnAdd.onclick = addPerson;
staff.addEventListener("personAdded", onPersonAdded);
staff.addEventListener("personRemoved", updateStats);


function addPerson() {
  if (staff.find(inputId.value) === -1) {
      const person = new Person(inputId.value, inputFirstName.value, inputLastName.value, inputBirthDate.value);
      staff.add(person);
      updateStats();
  } else {
    alert(`Person with id = ${inputId.value} exist`);
  }
}

function onPersonAdded(event) {
    const person = event.detail;
    const li = document.createElement("li");
    const buttonDel = createButtonDel(li);
    buttonDel.addEventListener("click", function () {
         staff.remove(person.id);
    });
    li.append(person.toString(), buttonDel);
    result.appendChild(li);

    inputId.value = inputFirstName.value = inputLastName.value = inputBirthDate.value = "";
}

function createButtonDel(obj_to_remove){
    const buttonDelete=document.createElement('button');
    buttonDelete.append('Delete');
    buttonDelete.addEventListener('click', function () {
            obj_to_remove.remove();
        }
    );
    // buttonDelete.classList.add('delete');
    buttonDelete.style.color = 'red';
    buttonDelete.style.marginLeft='5px';
    return buttonDelete;
}

function updateStats() {
    const stats = staff.getStats();
    outTotalPersons.textContent = stats.totalPersons;
    outAvgAge.textContent = stats.avgAge;
    outMinAge.textContent = stats.minAge;
    outMaxAge.textContent = stats.maxAge;

}