
function findBook(library, isbn) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].isbn === isbn) {
      return i;
    }
  }
  return -1;
}

function Book(isbn, title, author, year) {
  this.isbn = isbn;
  this.title = title;
  this.author = author;
  this.year = +year;
  this.toString = function () {
    return `ISBN: ${this.isbn}; Title: ${this.title}; Author: ${this.author}; Year of publication: ${this.year};`;
  };
}
