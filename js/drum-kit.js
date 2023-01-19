const listRef = document.querySelector('.key__list');

const itemsList = [...listRef.children];

function removePlaying() {
  this.classList.remove('playing');
}

itemsList.forEach(item => item.addEventListener('transitionend', removePlaying));

const handleClick = event => {
  if (event.target.nodeName === 'UL') {
    return;
  }

  let key = 0;

  if (event.target.nodeName === 'LI') {
    event.target.classList.add('playing');
    key = event.target.dataset.key;
  }

  if (event.target.nodeName !== 'LI') {
    event.target.parentElement.classList.add('playing');
    key = event.target.parentElement.dataset.key;
  }

  const audio = document.querySelector(`audio[data-key="${key}"]`);
  audio.currentTime = 0;
  audio.play();
};
listRef.addEventListener('click', handleClick);

function handlePresBtn({ keyCode }) {
  const item = document.querySelector(`li[data-key="${keyCode}"]`);
  if (!item) {
    return;
  }
  item.classList.add('playing');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener('keydown', handlePresBtn);
