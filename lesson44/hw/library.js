class Library  extends EventTarget {
    constructor() {
        super();
        this.books = [];
    }

    add(book) {
        if (this.findBook(book.isbn) === -1) {
            this.books.push(book);
            this.dispatchEvent(
                new CustomEvent("bookAdded", { detail: book })
            );
            return true;
        }
        return false;
    }

    removeBook(isbn) {
        const index = this.findBook(isbn);
        if (index !== -1) {
            const removed = this.books.splice(index, 1);
            this.dispatchEvent(
                new CustomEvent("bookRemoved", { detail: removed })
            );
            return true;
        }
        return false;
    }

    getStats() {
        if (this.books.length === 0) {
            return {
                totalBooks: 0,
                avgYear: 0,
                minYear: 0,
                maxYear: 0
            };
        }

        let totalYears = 0;
        let minYear = this.books[0].year;
        let maxYear = this.books[0].year;

        for (let i = 0; i < this.books.length; i++) {
            const year = this.books[i].year;
            totalYears += year;
            if (year < minYear) {
                minYear = year;
            }
            if (year > maxYear) {
                maxYear = year;
            }
        }

        const avgYear = totalYears / this.books.length;

        return {
            totalBooks: this.books.length,
            avgYear: avgYear.toFixed(2),
            minYear: minYear,
            maxYear: maxYear
        };
    }

    findBook(isbn) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isbn === isbn) {
                return i;
            }
        }
        return -1;
    }
}



class Book {
    constructor(isbn, title, author, year) {
        this.isbn = isbn;
        this.title = title.to;
        this.author = author;
        this.year = +year;
    }

    toString() {
        return `ISBN: ${this.isbn}; Title: ${this.title}; Author: ${this.author}; Year of publication: ${this.year};`;
    };
}
