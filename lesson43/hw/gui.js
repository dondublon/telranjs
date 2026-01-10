const library = new Library();
const inputIsbn = document.getElementById("inputIsbn");
const inputTitle = document.getElementById("inputTitle");
const inputAuthor = document.getElementById("inputAuthor");
const inputYear = document.getElementById("inputYear");
// const lstResult = document.getElementById("lstResult");
const btnBook = document.getElementById("addBook");
outTotalBooks = document.getElementById("totalBooks");
outAvgYear = document.getElementById("avgYear");
outMaxYear = document.getElementById("minYear");
outMinYear = document.getElementById("maxYear");

btnBook.onclick = addBook;
library.addEventListener("bookAdded", onBookAdded);
library.addEventListener("bookRemoved", updateStats);


function addBook() {
  if (library.findBook(inputIsbn.value) === -1) {
      const book = new Book(inputIsbn.value, inputTitle.value, inputAuthor.value, parseInt(inputYear.value));
      library.add(book);
      updateStats();
  } else {
    alert(`Book with isbn = ${inputIsbn.value} exist`);
  }
}

function onBookAdded(event) {
    const book = event.detail;
    const li = document.createElement("li");
    const buttonDel = createButtonDel(li);
    buttonDel.addEventListener("click", function (e) {
         library.removeBook(book.isbn);
    });
    li.append(book.toString(), buttonDel);
    result.appendChild(li);

    inputIsbn.value = inputTitle.value = inputAuthor.value = inputYear.value = "";
}

function createButtonDel(obj_to_remove){
    const buttonDelete=document.createElement('button');
    buttonDelete.append('Delete');
    buttonDelete.addEventListener('click', function (e) {
            obj_to_remove.remove();
        }
    );
    // buttonDelete.classList.add('delete');
    buttonDelete.style.color = 'red';
    buttonDelete.style.marginLeft='5px';
    return buttonDelete;
}

function updateStats() {
    const stats = library.getStats();
    outTotalBooks.textContent = stats.totalBooks;
    outAvgYear.textContent = stats.avgYear;
    outMinYear.textContent = stats.minYear;
    outMaxYear.textContent = stats.maxYear;

}