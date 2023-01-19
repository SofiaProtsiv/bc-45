'use strict';

const calendarREf = document.querySelector('.calendar');

calendarREf.addEventListener('click', toggleActive);

//Variant 1
function toggleActive(event) {
  if (event.target.nodeName !== 'TD') {
    return;
  }

  const activeBtn = calendarREf.querySelector('.active');

  if (activeBtn) {
    activeBtn.classList.remove('active');
  }

  event.target.classList.add('active');
}

//Variant 2
let previusActiveBtn = null;

function toggleActive(event) {
  if (event.target.nodeName === 'TD') {
    previusActiveBtn = calendarREf.querySelector('.active');

    if (previusActiveBtn) {
      previusActiveBtn.classList.remove('active');
    }

    event.target.classList.add('active');
  }
}
//
//
//
//

//
//
//
//
//v

// const toggleActive = ({ target }) => {
//   if (target.nodeName !== 'TD') {
//     return;
//   }

//   const isActive = document.querySelector('.active');

//   if (isActive === target) {
//     isActive.classList.remove('active');
//     return;
//   }

//   if (isActive) {
//     isActive.classList.remove('active');
//   }

//   target.classList.toggle('active');
// };

// calendarREf.addEventListener('click', toggleActive);
