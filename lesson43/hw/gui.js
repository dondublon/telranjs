const library = [];
const isbn = document.getElementById("isbn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const result = document.getElementById("result");
const addBook = document.getElementById("addBook");

addBook.onclick = function () {
  if (findBook(library, isbn.value) === -1) {
    const book = new Book(isbn.value, title.value, author.value, year.value);
    library.push(book);
    const li = document.createElement("li");
    const buttonDel = createButtonDel();
    buttonDel.addEventListener("click", function (e) {
      const index = findBook(library, book.isbn);
      library.splice(index, 1);
    });
    li.append(book.toString(), buttonDel);
    result.appendChild(li);
  } else {
    alert(`Book with isbn = ${isbn.value} exist`);
  }
  isbn.value = title.value = author.value = year.value = "";
};

