/*
 * Стрілки, явне - неявне повернення, arguments,
 * повернення об'єкта
 */

// function sum(a, b) {
//   return a + b;
// }
// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// console.log(sum(3, 7));

// // console.log(sum(10, 20));

//? Два і більше параметрів

// const calc = (...args) => {
//   console.log(args);
//   const [a, b] = args;
//   //   console.log(a, b);
//   console.log(a + b);
// };

// calc(10, 20);

//? Один параметр

// const greet = (username) => {
//   console.log(`Hello ${username}!`);
// };

// greet("Jeremiah Jennings");

//? Без параметрів

// const greet = function() {
//     console.log('Hello!');
// };
// const greet = () => {
//   console.log("Hello!");
// };
// greet();

//? arguments

// const calc = (...args) => {
//   //   console.log(arguments);
//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   console.log(total);
// };

// calc(1, 2, 3, 4);

//? Повернення об'єкту

// 1 варіант
// const createObj = (obj) => {
//   return {
//     id: Date.now(),
//     ...obj,
//   };
// };
// // 2 варіант
// const createObj = (obj) => ({ id: Date.now(), ...obj });

// console.log(createObj({ name: "🍎", price: 30, quantity: 3 }));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const createProduct = (partialProduct, callback) => {
//   //   const product = { id: Date.now(), ...partialProduct };
//   callback({ id: Date.now(), ...partialProduct });
// };

// Було
// const logProduct = function (product) {
//   console.log(product);
// };

//Стало
// const logProduct = (product) => console.log(product);
// logProduct({ a: "Mango" });
// Було
// const logTotalPrice = function ({ price, quantity } = {}) {
//   console.log(`Total price: ${price * quantity}`);
// };

// // Стало
// const logTotalPrice = ({ price, quantity } = {}) => console.log(`Total price: ${price * quantity}`);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },

  deposit: (amount, onSuccess, onError) => {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

console.log(account);

//Було
// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

//Стало
const handleSuccess = (message) => console.log(`✅ Success! ${message}`);

//Було
// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };
//Стало
const handleError = (message) => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);

account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

// const account = {
//   balance: 0,
//   deposit(amount) {
//     cl;
//     this.balance += amount;
//   },
// };
// console.log(account);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
// newArr.push(callback(el));
//   }

//   return newArr;
// }

// // const multi = (value) => value * 2;

// // const add = (el) => el + 2;

// // console.log(each(numbers, multi));
// console.log(each(numbers, (value) => value * 2));
// console.log(each(numbers, (value) => value + 2));
// console.log(each(numbers, add));

// console.log(
//   each(numbers, (value) => {
//     // value * 2;
//     console.log('value', value);
//   })
// );

// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// const numbers = [64, 49, 36, 25, 16];
// numbers.forEach(function callback(element, index) {
//   console.log(index);
// });
// numbers.forEach((element, index) => {
//   if (element === 49) {
//     console.log('Виходимо!');
//   }
//   console.log(element);
// });
