"use strict";

//* 📌❗️🤓 Атрибути як властивості об'єкту

const mainTitleEl = document.querySelector(".js-main-title");
// console.dir(mainTitleEl);

mainTitleEl.textContent = "Hero title";

const imgEl = document.querySelector(".js-img");
const btnRef = document.querySelector(".js-swap-image-btn");

btnRef.addEventListener("click", () => {
  imgEl.src = "";
  imgEl.alt = "random pfoto";

  document.querySelector("input").checked = true;
});

/*
 * 📌❗️🤓 Доступ до атрибутів
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

console.log(imgEl.hasAttribute("src"));
imgEl.removeAttribute("src");

const imgSrc = imgEl.getAttribute("src");

imgEl.setAttribute("src", "https://picsum.photos/200/300");
imgEl.setAttribute("class", "hero__img");
imgEl.setAttribute("alt", "random pfoto");

console.log(imgEl.attributes);

/*
// 📌❗️🤓 data-atributes
*/

const saveBtnRef = document.querySelector('button[data-action="save"]');

const closeBtnRef = document.querySelector("button[data-action='close']");

console.log(closeBtnRef.dataset);

console.log(saveBtnRef.dataset.action);
saveBtnRef.setAttribute("disabled", true); ///varian 1
saveBtnRef.disabled = true; //variant 2

closeBtnRef.addEventListener("click", () => {
  saveBtnRef.removeAttribute("disabled");
  saveBtnRef.disabled = false;
});
