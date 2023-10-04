const myModal = document.getElementById("myModal");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");

myModal.addEventListener("click", () => {
  modal.showModal();
});

buttonClose.addEventListener("click", () => {
  modal.close();
});
