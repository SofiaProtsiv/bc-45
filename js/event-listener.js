'use strict';
/*
 * 📌❗️🤓 Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?- Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

const changeBtnRef = document.querySelector('.js-swap-btn');
const removeBtnRef = document.querySelector('.js-remove-listener');
const imgRef = document.querySelector('.js-img');

const handleClick = function (event) {
  // console.log('this', this);

  // console.log('event', event.currentTarget);
  // console.log('eventTarget', event.target);

  console.log('btn click 1');

  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'random image';
  this.style.background = 'lime';
};

const handleClick2 = function () {
  console.log('btn click 2');
};
const removeListner = function () {
  changeBtnRef.removeEventListener('click', handleClick);

  changeBtnRef.textContent = 'show message';
  changeBtnRef.style.background = 'orange';

  changeBtnRef.addEventListener('click', handleClick2);
};

changeBtnRef.addEventListener('click', handleClick);

removeBtnRef.addEventListener('click', removeListner);

/*
// 📌❗️🤓 Ми видаляємо прослуховувачі подій у трьох випадках:

// 1. Коли ми хочемо, щоб обробник подій запускався лише один раз. 
//    Ми можемо видалити прослуховувач подій після його запуску, 
//    щоб реакція відбувалася один раз (або іншу задану кількість разів).

// 2. Для повторного використання елементів. 
//    Можливість додавати та видаляти прослуховувачі подій дозволяє нам 
//    використовувати один елемент у кількох сценаріях. 
//    Наприклад, ми могли б використовувати одну кнопку у трьох різних сценаріях, 
//    додаючи та видаляючи прослуховувачі подій. 
//    Альтернативою може бути використання трьох окремих кнопок 
//    із трьома окремими прослуховувачами подій.

// 3. Для підвищення продуктивності чи ефективності. 
//    Якщо у нас у додатку багато прослуховувачів подій, видалення тих, 
//    які більше не потрібні, може підвищити ефективність. 
//    Цей аспект ефективності пов'язані з управлінням пам'яттю. 
*/
