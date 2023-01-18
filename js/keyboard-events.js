'use strict';
/*
 *Події клавіатури. keypress, keydown, keyup
 */

const outputEl = document.querySelector('.js-output');

document.addEventListener('keydown', event => {
  console.log(event);
  // console.log('keydown');
  // console.log(`Code pressed ${event.code} \r\n KeyCode value: ${event.keyCode}`);
});
document.addEventListener('keyup', event => {
  // console.log('keyup');
  // console.log(`Code pressed ${event.code} \r\n KeyCode value: ${event.keyCode}`);
});

outputEl.addEventListener('mouseover', event => {
  event.currentTarget.style.color = 'yellow';
});

outputEl.addEventListener('mouseleave', event => {
  event.currentTarget.style.color = 'black';
});
