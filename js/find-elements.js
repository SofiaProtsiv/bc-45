"use strict";
//* 📌❗️🤓 Об'єкт window і document

console.dir(window);
console.dir(document);

//* 📌❗️🤓 Дідівські методи пошуку елементів (getElementBy...)

//* 📌❗️🤓Сучасні методи пошуку елементів (querySelector)

document.getElementById("list");
document.getElementsByTagName("ul");

const listRef = document.querySelector("li");
const liRefs = document.querySelectorAll("li");

// Щоб псевдомасив/колекція стала звичайним масивом
const listLinkEl1 = [...document.querySelectorAll(".list__link")];
const listLinkEl2 = Array.from.document.querySelectorAll(".list__link");

liRefs.forEach((item) => {
  item.textContent = "hi";

  item.addEventListener("click", () => {
    item.textContent = "hello";
  });
});

//* 📌❗️🤓 Навігації по DOM дереву
const listEl = document.querySelector(".list");
const liEl = listEl.children;

const textRef = document.querySelector(".qwerqwer");
console.log(textRef); //null

console.log(listEl.childNodes);
console.log(listEl.children);

console.log(listEl.firstChild);
console.log(listEl.firstElementChild);

console.log(listEl.lastChild);
console.log(listEl.lastElementChild);

console.log(listEl.previousSibling);
console.log(listEl.previousElementSibling);

console.log(listEl.nextSibling);
console.log(listEl.nextElementSibling);
