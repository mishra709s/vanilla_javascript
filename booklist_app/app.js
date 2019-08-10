// Book Class: Represents a Book (Everytime we create a book, its going to instantiate a book object.)

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks (Anything in the user interface, like when a book displays in the list here, or removes, or we show an alert that's going to be in the UI class)

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  /* <div className="alert alert-success">Whatever The Message</div> */

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    // Vanish In 2 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 1000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Handle Storage (Local Storage, which is within the browser, it doesn't go away when refresh the page or leave the site or close the browser, it stays there until it is cleared.)
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      // To return it as Regular JavaScript Object we are using JSON.parse();
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);

    // local storage are strings so using JSON.stringfy(), to store the array of objects (here books)
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display Books (Show the books in the list, Both In UI and local Storage)

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add A Book (Both In UI and local Storage)
document.querySelector("#book-form").addEventListener("submit", e => {
  //prevent actual submit
  e.preventDefault();

  // Get Form Values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please Fill All The Fields", "danger");
  } else {
    // Instantiate Book
    const book = new Book(title, author, isbn);
    console.log(book);

    // Add Book To UI
    UI.addBookToList(book);

    // Add Book To Store
    Store.addBook(book);

    // Show Success Message
    UI.showAlert("Book Added", "success");

    // Clear Fields
    UI.clearFields();
  }
});

// Event: Remove A Book (Both In UI and local Storage)(Remove by event propagation)
document.querySelector("#book-list").addEventListener("click", e => {
  // Remove Book From UI
  UI.deleteBook(e.target);

  // Remove Book From Store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show Success Message
  UI.showAlert("Book Removed", "success");
});
