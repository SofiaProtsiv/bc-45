// 🤓📌❗️ width
const left_panel = document.querySelector('.left-panel');
const center_panel = document.querySelector('.center-panel');
const right_panel = document.querySelector('.right-panel');

function display_info(element) {
  const block = document.createElement('div');
  block.textContent = window.innerWidth + ' x ' + window.innerHeight;

  element.append(block);
}

window.addEventListener('resize', function () {
  display_info(left_panel);
});

window.addEventListener(
  'resize',
  _.debounce(function () {
    display_info(right_panel);
  }, 1000)
);

window.addEventListener(
  'resize',
  _.throttle(function () {
    display_info(center_panel);
  }, 1000)
);

// 🤓📌❗️input

const autocomplete = document.querySelector('.autocomplete');

const plain_input_panel = document.querySelector('.plain-input-panel');
const throttle_input_panel = document.querySelector('.throttle-input-panel');
const debounce_input_panel = document.querySelector('.debounce-input-panel');

function typing() {
  const span = plain_input_panel.children[0];
  span.style.color = 'white';
  span.textContent = autocomplete.value;
}
function debounce_typing() {
  const span = debounce_input_panel.children[0];
  span.style.color = 'yellow';
  span.textContent = autocomplete.value;
}
function throttle_typing() {
  const span = throttle_input_panel.children[0];
  span.style.color = 'pink';
  span.textContent = autocomplete.value;
}
autocomplete.addEventListener('input', typing);
autocomplete.addEventListener('input', _.debounce(debounce_typing, 1000));
autocomplete.addEventListener('input', _.throttle(throttle_typing, 1000));
