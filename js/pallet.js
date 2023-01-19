const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

createPaletteItems();

//VARIANT 2
colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
  if (event.target.nodeName === 'BUTTON') {
    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
  }
}

// VARIAN 1
// const buttons = document.querySelectorAll('.item');

// buttons.forEach(button => {
//   button.addEventListener('click', selectColor);
// });

// function selectColor(event) {
//   const selectedColor = event.currentTarget.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

function createPaletteItems() {
  // const items = [];

  // for (let i = 0; i < 60; i++) {
  //   const color = getRandomColor();
  //   const item = document.createElement('button');
  //   item.type = 'button';
  //   item.dataset.color = color;
  //   item.style.backgroundColor = color;
  //   item.classList.add('item');
  //   items.push(item);
  // }
  // console.log(items);
  // colorPalette.append(...items);

  ///variant 2
  const items = [];

  for (let i = 0; i < 20; i++) {
    const color = getRandomColor();

    const markup = `<button data-color="${color}" style="background:${color}" type="button" class="item">
    <span>${i}</span></button>`;

    items.push(markup);
  }

  colorPalette.insertAdjacentHTML('beforeend', items.join(''));
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
