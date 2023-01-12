//EVERY//
// array.every((element, index, array) => {
//   // Тіло колбек-функції
// });

// Усі елементи більші або дорівнюють нулю? - так
// console.log([1, 2, 3, 4, 5].every((value) => value >= 0));

// // Усі елементи більші або дорівнюють нулю? - ні
// console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0));

//SOME//
// array.some((element, index, array) => {
//   // Тіло колбек-функції
// });

// Чи є хоча б один елемент, що менший нуля? - ні
// console.log([1, 2, 3, 4, 5].some((value) => value < 0));

// // Чи є хоча б один елемент, що менший нуля? - так
// console.log([1, 2, 3, -10, 4, 5].some((value) => value < 0));

//
// ? Чи всіх фруктів більше 0 штук
// ? Чи є хоча б 1 фрут в якого більше аніж 0 штук
//

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every
// const allAvailable = fruits.every((fruit) => fruit.amount > 0);
// console.log(allAvailable);
// // // some
// const anyAvailable = fruits.some((fruits) => fruits.amount > 0);
// console.log(anyAvailable);
