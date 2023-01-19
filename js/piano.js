const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-checkbox input');

let allKeys = [];
let audio = new Audio(`../tunes/a.wav`);

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key);
  key.addEventListener('click', () => playTune(key.dataset.key));
});

function removePlaying() {
  this.classList.remove('playing');
}

function playTune(key) {
  audio.src = `../tunes/${key}.wav`;

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add('active');

  audio.play();
  audio.currentTime = 0;

  setTimeout(() => {
    clickedKey.classList.remove('active');
  }, 150);
}

function pressedKey(e) {
  console.log(e);
  if (allKeys.includes(e.key)) {
    playTune(e.key);
  }
}

function handleVolume(e) {
  audio.volume = e.target.value;
}

function showHideKeys() {
  pianoKeys.forEach(key => key.classList.toggle('hide'));
}

keysCheckbox.addEventListener('click', showHideKeys);
volumeSlider.addEventListener('input', handleVolume);

document.addEventListener('keydown', pressedKey);
