const nameInput = document.querySelector("#book_name");
const authorInput = document.querySelector("#book_author");
const pagesInput = document.querySelector("#book_pages");
let addBookBtn = document.querySelector("add_book_btn");

// ________________________________________

const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

// examaple
const book1 = new Book("The Hobiit", "J.R.R. Tolkien", "320");

// addBookBtn.addEventListener("click", () => {
//   book.innerHTML = "ndkjsa";
// });

function addBook() {
  myLibrary.push(
    new Book(nameInput.value, authorInput.value, pagesInput.value)
  );

  console.log(myLibrary);

  renderBooks();
}

function removeBook() {
  console.log(myLibrary);
}

function renderBooks() {
  const library = document.querySelector(".library");

  // library.innerHTML = "";

  // // book.innerHTML = `
  // //   <p> Book name: ${nameInput.value}</p>
  // // <p> Author name: ${authorInput.value}</p>
  // // <p> Number of pages: ${pagesInput.value}</p>
  // // `;

  // myLibrary.forEach((b) => {
  //   const book = document.createElement("div");
  //   book.classList.add("book");
  //   const name = document.createElement("p");
  //   name.innerText = "";

  //   library.appendChild(book);
  // });
}
