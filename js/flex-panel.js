// const panels = document.querySelectorAll('.js-panel');
// console.log(panels);

// const toggleOpen = event => {
//   const isOpen = document.querySelector('.open');
// if (isOpen) {
//   isOpen.classList.remove('open');
// }
//   event.currentTarget.classList.toggle('open');
// };

// panels.forEach(item => item.addEventListener('click', toggleOpen));

const panelsList = document.querySelector('.js-panels');

const toggleOpen = function (event) {
  const isOpen = document.querySelector('.open');
  let target = event.target;
  if (event.target.nodeName !== 'LI') {
    // event.target.parentNode.classList.toggle('open');
    target = event.target.parentNode;
  }
  target.classList.toggle('open');
  // if (event.target.nodeName === 'LI') {
  //   event.target.classList.toggle('open');
  // }
  if (isOpen) {
    isOpen.classList.remove('open');
  }
};

panelsList.addEventListener('click', toggleOpen);
