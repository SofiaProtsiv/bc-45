'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

const textRef = document.querySelector('.text');
const divRef = document.querySelector('.div');
const section = document.querySelector('.section');

divRef.addEventListener(
  'click',
  event => {
    console.group('Listener on p(2- занурення подія на div)');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

divRef.addEventListener('click', event => {
  console.group('Listener on p(4 - сплиття, подія на div)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});

section.addEventListener('click', event => {
  console.group('Listener on p(5 - сплиття, подія на секції)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});

section.addEventListener(
  'click',
  event => {
    console.group('Listener on p(1- занурення, подія на секції)');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

textRef.addEventListener('click', event => {
  console.group('Listener on p(3 - target, подія на р )');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();

  // event.stopPropagation();
});
