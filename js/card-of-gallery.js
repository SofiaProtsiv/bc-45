"use strict";
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const listRef = document.querySelector(".js-gallery");

// first el
const liEl1 = document.createElement("li");

const linkEl1 = document.createElement("a");

const imgEl1 = document.createElement("img");

imgEl1.src = "https://picsum.photos/id/237/200/300";
imgEl1.alt = "Labrador";

linkEl1.append(imgEl1);
liEl1.append(linkEl1);

// second el
const liEl2 = document.createElement("li");

const linkEl2 = document.createElement("a");
const imgEl2 = document.createElement("img");

imgEl2.src = "https://picsum.photos/seed/picsum/200/300";
imgEl2.alt = "Seed";

linkEl2.href = "#";

linkEl2.append(imgEl2);
liEl2.append(linkEl2);

liEl2.classList.add("gallery__item");

// // final
listRef.append(liEl1, liEl2);

// listRef.remove();

const listEl = document.querySelector(".js-gallery");
console.log(listEl.children);
