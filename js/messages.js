'use strict';

const btnListRef = document.querySelector('.js-messages-wrapper');
console.log(btnListRef);

const handleBtnClick = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  // target.parentNode.remove();
  const parentLiRef = target.closest('li.message');
  parentLiRef.remove();
};

btnListRef.addEventListener('click', handleBtnClick);
