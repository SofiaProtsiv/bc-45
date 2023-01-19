'use strict';

const calendarREf = document.querySelector('.calendar');

// VARIANT 1
let prevTdRef = null;

calendarREf.addEventListener('click', event => {
  const { target } = event;

  if (target.nodeName !== 'TD') {
    return;
  }
  if (target === prevTdRef) {
    target.classList.toggle('active');
    return;
  }

  if (prevTdRef) {
    prevTdRef.classList.remove('active');
  }
  prevTdRef = target;
  target.classList.add('active');
});

// VARIANT 2
const toggleActive = ({ target }) => {
  if (target.nodeName !== 'TD') {
    return;
  }

  const isActive = document.querySelector('.active');

  if (isActive === target) {
    isActive.classList.remove('active');
    return;
  }

  if (isActive) {
    isActive.classList.remove('active');
  }

  target.classList.toggle('active');
};

calendarREf.addEventListener('click', toggleActive);
