let nameInput = document.querySelector("#book_name");
let authorInput = document.querySelector("#book_author");
let pagesInput = document.querySelector("#book_pages");
let readInput = document.querySelector("#book_read");

let addBookBtn = document.querySelector("#add_book_btn");

// ________________________________________
// examaple
let book1 = new Book("The Hobiit", "J.R.R. Tolkien", "320");

let myLibrary = [book1];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// _________________________________________________

function addBook() {
  myLibrary.push(
    new Book(
      nameInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.value
    )
  );

  renderBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  console.log(myLibrary);
  renderBooks();
}

function renderBooks() {
  library = document.createElement("div");
}

function renderBooks() {
  const library = document.querySelector(".library");
  library.innerHTML = "";

  myLibrary.forEach((b, idx) => {
    let book = document.createElement("div");
    book.innerHTML = `
      <p> Book name: ${b.name}</p>
      <p> Author name: ${b.author}</p>
      <p> Number of pages: ${b.pages}</p>
    <input id="check" ${b.read ? "checked" : ""} type="checkbox">Read

      <button class="delete" onclick="removeBook(${idx})" >Delete</button>
    
      `;

    book.classList.add("book");
    library.appendChild(book);
  });
}

renderBooks();
