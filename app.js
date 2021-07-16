// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Class: Handle Ui Tasks
class UI {
    static displayBooks() {
        const StoreBooks = [{
                title: 'Book One',
                author: 'John Doe',
                isbn: '343'
            },
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '341'
            }
        ];

        const books = StoreBooks;

        books.forEach((book) => UI.addBookToList(book));

    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//Store Class: Handles Storage 



// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Remove A Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Prevent Defaul Submit
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const autor = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instantiate Book
    const book = new Book(title, autor, isbn);

    UI.addBookToList(book);

    //Clear Fields
    UI.clearFields();
});

//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
})