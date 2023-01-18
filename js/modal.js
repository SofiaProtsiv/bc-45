'use strict';

const backdropRef = document.querySelector('.js-backdrop');
const openBtnRef = document.querySelector('.js-modal-open');
const closeBtnRef = document.querySelector('.js-modal-close');

const handleOpenClick = () => {
  backdropRef.classList.add('is-open');

  document.addEventListener('keyup', onEscPress);
  // closeBtnRef.addEventListener('click', handleCloseClick);
  // backdropRef.addEventListener('click', handleBackdropClick);
};

const handleCloseClick = () => {
  backdropRef.classList.remove('is-open');

  document.removeEventListener('keyup', onEscPress);
  // closeBtnRef.removeEventListener('click', handleCloseClick);
  // backdropRef.removeEventListener('click', handleBackdropClick);
};

const handleBackdropClick = event => {
  if (event.target.classList.contains('backdrop')) {
    handleCloseClick();
  }
};

const onEscPress = event => {
  if (event.code === 'Escape') {
    handleCloseClick();
  }
};

openBtnRef.addEventListener('click', handleOpenClick);

closeBtnRef.addEventListener('click', handleCloseClick);
backdropRef.addEventListener('click', handleBackdropClick);
