const btnModal1 = document.getElementById("trailer");
const modal1 = document.querySelector(".modal1");
const buttonClose = document.getElementById("close1");
const buttonClose2 = document.getElementById("close2");

const btnInfo = document.getElementById("info");
const modal2 = document.querySelector(".modal2");

btnModal1.addEventListener("click", () => {
  modal1.showModal();
});

buttonClose.addEventListener("click", () => {
  modal1.close();
});

btnInfo.addEventListener("click", () => {
  modal2.showModal();
});

buttonClose2.addEventListener("click", () => {
  modal2.close();
});
