const ModalImg = document.querySelector(".modal-img ");
const openImg = document.querySelector(".gallery");
const closeImg = document.querySelector(".close");
const arrLeft = document.querySelector(".arr-left");
const arrRight = document.querySelector(".arr-right");

openImg.addEventListener("click", function () {
  ModalImg.style.display = "flex";
});

closeImg.addEventListener("click", function () {
  ModalImg.style.display = "none";
});

