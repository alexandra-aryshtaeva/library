const dialog = document.querySelector("dialog");
const newBook = document.querySelector("#new_book");
const closeBtn = document.querySelector("#close_btn");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
