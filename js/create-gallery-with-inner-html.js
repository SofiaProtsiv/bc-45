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

const markup = pictures
  .map(({ width, height, alt, url }) => {
    return `<li class="gallery-item">
  <a href="#">
    <img src="${url}" alt="${alt}" width="${width}" heigth="${height}">
  </a>
</li>`;
  })
  .join("");

// galeeryRef.prepend(...markup); // 💩

// galeeryRef.innerHTML = markup; // не завжди умісно, але варіант робочий

galeeryRef.insertAdjacentHTML("beforeend", markup);

galeeryRef.insertAdjacentHTML("beforebegin", "markup");
