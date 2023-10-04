const myModal = document.getElementById("myModal");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");
const buttontrailer = document.querySelector(".reveal");
let trailer = document.querySelector(".trailer");
buttonReveal=document.querySelector(".reveal");
let mediaClose = document.querySelector(".close");

myModal.addEventListener("click", () => {
  modal.showModal();
});

buttonClose.addEventListener("click", () => {
  modal.close();
});
// trailer do media query

buttontrailer.addEventListener("click", () => {
  document.querySelector(".trailer").style.display = "block";
  document.querySelector(".reveal").style.display = "none";
  document.querySelector(".close").style.display = "block";
});
mediaClose.addEventListener("click", () => {
  document.querySelector(".trailer").style.display = "none";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".reveal").style.display = "block";
})

