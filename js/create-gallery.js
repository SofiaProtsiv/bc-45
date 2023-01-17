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
    url: "https://picsum.photos/id/500/700/460",
    alt: "build",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

/*
<li class="gallery-item">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
</li>
*/

const galleryListRef = document.querySelector(".js-gallery");

const liMarkup = pictures.map(({ width, height, url, alt }) => {
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");

  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.style.width = width;
  imgEl.style.height = height;

  liEl.append(imgEl);
  // galleryListRef.append(liEl); //bad
  return liEl;
});

galleryListRef.prepend(...liMarkup);
