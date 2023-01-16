"use strict";

//* 📌❗️🤓 Атрибути як властивості об'єкту

const mainTitleEl = document.querySelector(".js-main-title");

mainTitleEl.textContent = "Hero title";

const imgEl = document.querySelector(".js-img");
const btnRef = document.querySelector(".js-swap-image-btn");

btnRef.addEventListener("click", () => {
  imgEl.src = "https://picsum.photos/200/300";
  imgEl.alt = "random pfoto";
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

// console.log(imgEl.hasAttribute("data"));
// const imgSrc = imgEl.getAttribute("src");
// console.log(imgSrc);
// imgEl.setAttribute("src", "https://picsum.photos/200/300");
// imgEl.setAttribute("class", "hero__img");
// imgEl.setAttribute("alt", "random pfoto");
// imgEl.removeAttribute("src");
// console.log(imgEl.attributes.class);

/*
// 📌❗️🤓 data-atributes
*/

// const saveBtnRef = document.querySelector('button[data-action="save"]');
// const closeBtnRef = document.querySelector('button[data-action="close"]');
// // console.log(saveBtnRef.dataset.action);
// // saveBtnRef.setAttribute('disabled', true);
// // saveBtnRef.removeAttribute('disabled');
// // console.log(saveBtnRef.getAttribute('data-action'));
// closeBtnRef.addEventListener("click", () => {
//   //   saveBtnRef.removeAttribute('disabled');
//   // saveBtnRef.setAttribute('disabled', false);💩
//   saveBtnRef.disabled = true;
// });
