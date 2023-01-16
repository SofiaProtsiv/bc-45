"use strict";
const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

const galeeryRef = document.querySelector("#js-gallery");

galeeryRef.style.display = "flex";
galeeryRef.style.flexWrap = "wrap";
galeeryRef.style.gap = "15px";

const li = `<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>`;
// console.log(li);
// console.log(galeeryRef.innerHTML);

// galeeryRef.innerHTML = '';

const itemsList = pictures
  .map(({ width, height, alt, url }) => {
    return `<li>
  <a href="#">
  <img src="${url}" alt="${alt}" width="${width}" height="${height}"/>
  </a>
  </li>`;
    //💩insertAdjacentHTML💩
  })
  .join("");

galeeryRef.insertAdjacentHTML("beforeend", itemsList);
// galeeryRef.innerHTML = itemsList;

// console.log(galeeryRef.children);
// const liRefs = [...galeeryRef.children];
// liRefs.forEach((item) => {
//   item.style.width = "100px";
// });
