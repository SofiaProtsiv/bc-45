'use strict';

// 🤓 variant 1
// const listBtnRef = document.querySelectorAll('.js-accordion-btn');

// const handleBtnClick = event => {
//   const { nextElementSibling } = event.currentTarget;

//   nextElementSibling.classList.toggle('active');
// };

// listBtnRef.forEach(button => button.addEventListener('click', handleBtnClick));

// 🤓 variant 2

const listRef = document.querySelector('.js-accordion-list');

const handleBtnClick = event => {
  //   console.log(event.currentTarget); // listRef

  if (event.target.tagName === 'BUTTON') {
    const { nextElementSibling } = event.target;
    nextElementSibling.classList.toggle('active');
  }
};

listRef.addEventListener('click', handleBtnClick);
