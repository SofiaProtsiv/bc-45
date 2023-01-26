// ❗️📌🤓 Методи дати

// Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// Отриання поточної дати
// const date = new Date();
// console.log(date)

// console.log(date.getMinutes())
// console.log(date.getHours())
// console.log(date.getHours() + ":" + date.getMinutes())

// Docs https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

// Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

// const currentTime = new Date().toLocaleTimeString([], {
//     // hour12: true,
//     hour: "2-digit", 
//     minute: "2-digit"
// });
// console.log(currentTime)


// ADDITIONAL TASKS https://www.w3resource.com/javascript-exercises/javascript-date-exercises.php

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.

// const targetDate = new Date(2012, 1, 20, 3, 12, 40);
// const targetDate = new Date('2012-02-17T03:24:00');
// console.log('👀 > targetDate', targetDate);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».
// const targetDate = new Date();

// const getWeekDay = date => {
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const index = date.getDay();
//   return daysArr[index];
// };

// monthArr = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// return monthArr[date.getMonth()];

//? TASK 03
// Напишіть функцію JavaScript, щоб перевірити, чи є дата вихідним.
//  function isWeekend(dateToCheck){
//     const date = new Date(dateToCheck);

//     if(date.getDay() === 6 || date.getDay() === 0){
//         return "weekend";
//     }

//     return "working day";
// }
// console.log(isWeekend(new Date(2023, 0, 28)));

//? TASK 04
// Створіть функцію countdownTimer(), яка повертає скільки часу залишилось до відкриття магазину

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

const timerId = setInterval(countdownTimer, 1000);

function countdownTimer() {
    const now = Date.now();
    const tomorrow = new Date(2023, 0, 26, 13, 6);

    const delta = tomorrow - now;

    if (delta < 0) {
        clearInterval(timerId)
        return
    }

    console.log(convertMs(delta));
};

countdownTimer();


