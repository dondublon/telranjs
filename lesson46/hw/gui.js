const staff = new Company();
const inputId = document.getElementById("inputId");
const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const inputBirthDate = document.getElementById("inputBirthDate");
const inputSalary = document.getElementById("inputSalary");
// const lstResult = document.getElementById("lstResult");
const btnAdd = document.getElementById("addEmployee");
outTotalPersons = document.getElementById("totalPersons");
outAvgAge = document.getElementById("avgAge");
outMaxAge = document.getElementById("minAge");
outMinAge = document.getElementById("maxAge");

btnAdd.onclick = addEmployee;
staff.addEventListener("employeeAdded", onEmployeeAdded);
staff.addEventListener("employeeRemoved", updateStats);


function addEmployee() {
  if (staff.find(inputId.value) === -1) {
      const person = new Employee(inputId.value, inputFirstName.value, inputLastName.value,
          inputBirthDate.value, inputSalary.value);
      staff.add(person);
      updateStats();
  } else {
    alert(`Employee with id = ${inputId.value} exist`);
  }
}

function onEmployeeAdded(event) {
    const employee = event.detail;
    const li = document.createElement("li");
    // Внутри createButtonDel - замыкание, сохраняем li.
    const buttonDel = createButtonDel(li);
    const person_id = employee.id
    // Это замыкание, сохраняем person_id.
    buttonDel.addEventListener("click", function () {
         staff.remove(person_id);
    });
    li.append(employee.toString(), buttonDel);
    result.appendChild(li);

    inputId.value = inputFirstName.value = inputLastName.value = inputBirthDate.value = "";
}

function createButtonDel(obj_to_remove){
    const buttonDelete=document.createElement('button');
    buttonDelete.append('Delete');
    // Это замыкание, сохраняем obj_to_remove, который в нашем случае равен li.
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