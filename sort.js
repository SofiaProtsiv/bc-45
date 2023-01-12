/*
 *  Метод sort()
 */

// const numbers = [
//   2, 1, 4, 0, 61, 19, 10, 11, 20, 25, 74, 35, 92, 5, 27, 2, 41, 4, 7, 3, 75,
// ];

// const words = ["sofia", "sofiyr", "yulia", "bogdan", "alina"];
// // console.log(words.sort())
// console.log(words.sort((a, b) => a.localeCompare(b)));
// console.log(words.sort((a, b) => b.localeCompare(a)));

// console.log(numbers.sort());
// const newSortArr = [...numbers].sort((a, b) => a - b);
// console.log(newSortArr);
// console.log([...numbers].sort((a, b) => b - a));
// // console.log(numbers.sort((a, b) => a.localeCompare(b)));
// console.log(numbers);

// const sortAray = [...numbers].sort((a, b) => {
//   if (a < b) {
//     //якщо a < b, a має стояти перед b
//     return 1;
//     //Місцями значення не змінює
//   }

//   if (a > b) {
//     return -1;
//     //змінює місцями значення
//   }

//   return 0;
//   // означає, що рівні, залишаються на своїх місцях
// });

// const sortAray = [...numbers].sort((a, b) => b - a);
// console.log(sortAray);

// console.log('numbers:', numbers);
// console.log('sortAray: ', sortAray);

//Сортування рядків.
//Виконайте сортування масиву назв моніторів у
// Алфавітному та зворотному порядку.

// const monitors = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ', 'ASER'];

// const a = monitors.sort((a, b) => {
//   if (a < b) {
//     //якщо a < b, a має стояти перед b
//     // console.log('a<b', a<b);
//     // console.log('a', a);
//     // console.log('b', b);
//     //Повертаємо -1 місцями значення не міняємо
//     return -1;
//     //Місцями значення не змінює
//   }
//   if (a > b) {
//     return 1;
//     //змінює місцями значення
//   }
//   return 0;
//   // означає, що рівні, залишаються на своїх місцях
// });
// // console.log(a);
// const c = monitors.sort((prev, next) => {
//   if (prev < next) {
//     return -1;
//   }
//   if (prev > next) {
//     return 1;
//   }
//   return 0;
//   // означає, що рівні, залишаються на своїх місцях
// });
// console.log(c);
// const b = [...monitors].sort((a, b) => b.localeCompare(a));
//firstString.localeCompare(secondString)
//Повертає негативне значення якщо firstString має бути перед secondString.
//Місцями значення не змінює
// console.log(b);

//? Сортування чисел та рядків за замовчуванням
// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger'];
// // const sortedWords = [...words].sort((a, b) => a.localeCompare(b));
// const sortedWords = [...words].sort((a, b) => b.localeCompare(a));

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

//? Сортування чисел та рядків за умовою

// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger', 'alex'];
// const sortedWords = [...words].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

/*
? Нехай функція sortByAscendingAmount повертає новий масив 
? автомобілів відсортований
? по збільшенню значення властивості amount.
*/
// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-1sion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const sortByAscendingAmount = (cars) => {
//   return [...cars].sort((a, b) => b.amount - a.amount);
// };
// const sortByAscendingModel = (cars) => {
//   return [...cars].sort((a, b) => a.model.localeCompare(b.model));
// };
// console.table(sortByAscendingAmount(cars));
// console.table(sortByAscendingModel(cars));
/*
  ?Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
  ? за зменшенням значення властивості price.
  */

// const sortByDescendingPrice = (cars) => {
//   return [...cars].sort((a, b) => b.price - a.price);
//   //   return [...cars].sort((a, b) => {
//   //     return b.price - a.price;
//   //   });
// };

// console.table(sortByDescendingPrice(cars));

/*
  ? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
  ? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
  */

// const sortByModel = (cars, order) => {
//   return [...cars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     } else if (order === 'desc') {
//       return b.model.localeCompare(a.model);
//     }
//   });

//   //   return [...cars].sort((a, b) => {
//   //     if (order === 'asc') {
//   //       return a.model.localeCompare(b.model);
//   //     } else if (order === 'desc') {
//   //       return b.model.localeCompare(a.model);
//   //     }
//   //   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
