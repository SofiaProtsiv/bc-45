"use strict";
//* 📌❗️🤓 Об'єкт style, cssText
const btnRef = document.querySelector(".js-modal-btn");
console.log(btnRef);

btnRef.className = "btn-active";

btnRef.classList.add("btn-active");
btnRef.classList.remove("modal-btn");

// btnRef.setAttribute("class", "btn-active");

btnRef.style.backgroundColor = "blue";
btnRef.style.fontSize = "25px";
btnRef.style.color = "red";

btnRef.removeAttribute("style");
btnRef.classList.replace("modal-btn", "new-modal-btn");
btnRef.classList.toggle("modal-btn");

//* 📌❗️🤓 Методи об'єкту classList (add, remove, toggle, contains)

const btnRef = document.querySelector(".js-modal-btn");
const backdropEl = document.querySelector(".js-backdrop");
const modalBtnEl = document.querySelector(".js-modal-btn");

btnRef.addEventListener("click", () => {
  btnRef.classList.toggle("btn-active");
});

modalBtnEl.addEventListener("click", () => {
  backdropEl.classList.add("is-backdrop-open");
});

backdropEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    return;
  }
  backdropEl.classList.remove("is-backdrop-open");
});
