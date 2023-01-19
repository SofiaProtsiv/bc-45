const menu = document.querySelector('.dropdownMenu');
const allLiEl = menu.querySelectorAll('li');

allLiEl.forEach(li => {
  const span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); // move the text node into span
});

function handleClick(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = event.target.parentNode.querySelector('ul');

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
}

menu.addEventListener('click', handleClick);
