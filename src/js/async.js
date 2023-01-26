/*
 * Синхронний vs Асинхронний JS
 */

// ❗️🤓📌 Стек виклику функцій, синхронний та асинхронний код

// 📌 Example 1 - http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ3RoaXJkJyk7Cn0sIDEwMDApOwoKY29uc29sZS5sb2coJ3NlY29uZCcpOw%3D%3D!!!
// 📌 Example 2 - http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpmdW5jdGlvbiBsb2coKXsKICAgIGNvbnNvbGUubG9nKCJmb3VydGgiKQp9CnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICBjb25zb2xlLmxvZygnc2Vjb25kJyk7Cn0sIDEwMDApOwoKY29uc29sZS5sb2coJ3RoaXJkJyk7Cgpsb2coKQ%3D%3D!!!

// 📌 Example 3
// console.log('Start');

// const id = setTimeout(() => {
//   console.log('In setTimeout');
// }, 5000);

// let count;
// for (let i = 0; i < 10000; i += 1) {
//   count = i;
// }
// console.log(count);

// console.log('End');
//
//
//

// const intervalId = setInterval(() => {
//   console.log(Date.now());
// }, 1000);

// const id = setTimeout(() => {
//   console.log('clear Interval In setTimeout');
//   clearInterval(intervalId);
// }, 10000);


// ❗️📌🤓 Метод window.setTimeout(callback, delay, args)

// 1 plain setTimeout
// function sayHi() {
//   console.log('Hello');
// }
// setTimeout(sayHi, 5000);
// setTimeout(sayHi(), 1000); // не правильно! 💩

// 2 with arguments
// function sayHi(phrase, who) {
//   console.log(phrase + " " + who);
// }
// setTimeout(sayHi, 1000, "Hello", "World"); 

// 3 no delay
// console.log("first")
// setTimeout(() => console.log('Hello'), 0);
// setTimeout(() => console.log('Hello'));
// console.log("second")

// 4 Очищення таймутів clearTimeout(timeoutID)
// const timerId = setTimeout(() => console.log('Hello'), 5000);
// document.addEventListener("click", ()=> clearTimeout(timerId))

// 5 example
// const popup = document.querySelector(".popup");
// const closeButton = document.querySelector("#close");
// const approveButton = document.querySelector("#approve");

// function show() {
//   popup.style.display = "block";
// }
// function close() {
//   popup.style.display = "none";
// }
// window.addEventListener("load", () =>
//   setTimeout(show, 2000)
// )
// closeButton.addEventListener("click", close);
// approveButton.addEventListener("click", close);

// ❗️📌🤓 Метод window.setInterval(callback, delay, args)

// 1 plain setInterval
// let start = 0;

// function counter() {
//   start++
//   console.log(start);

//   if(start === 5){
//     clearInterval(intervalId);
//   }
// }

// const intervalId = setInterval(counter, 1000);

// 2 Очищення інтервалів clearInterval(intervalID)

// document.addEventListener('click', () => {
//   console.log('click document');
//   clearInterval(intervalId);
// });

// Example 3 - Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду, починаючи з from і закінчуючи to

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(() => {
//     console.log(current);
//     if (current === to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(5, 10);

// Example 4 - Що покаже console.log()?
// let i = 0;

// setTimeout(() => console.log(i), 1000); 

// for (let j = 0; j < 100000000; j++) {
//   i++;
// }