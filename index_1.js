"use strict";
/*
 * Колбеки, функції вищого порядку
 */

// const foo1 = function (callback) {
//   console.log(callback);
//   console.log(foo2);
//   // console.log(foo2 === callback);
//   callback();
// };
// const foo2 = function () {
//   console.log(`Hello!`);
// };

// // console.log(foo2);

// foo1(foo2);

// //? Запит на сервер
// const fetchUser = async function (userUrl, callback) {
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = await response.json();
//   //   console.log(callback === showInfoAboutUser);
//   callback(result);
// };

// const showInfoAboutUser = function ({ name, bio, avatar_url, repos_url }) {
//   //   console.log("showInfoAboutUser", user);

//   return document.body.insertAdjacentHTML(
//     "afterbegin",
//     `<div>
//           <img width='150' height='150' src="${avatar_url}" />
//           <h3>${name}</h3>
//           <p>${bio}</p>
//           <a href="${repos_url}">My github</a>
//       </div>`
//   );
// };

// fetchUser("SofiaProtsiv", showInfoAboutUser);

//? Реєстрація подій на сторінці
// const button = document.querySelector("button");

// // const sayHello = function () {
// //   console.log("Hello!");
// // };

// // button.addEventListener("click", sayHello);

// button.addEventListener("click", function (e) {
//   console.log("Hello!");
// });

/*
? Напишіть функцію each(array, callback), 
? яка першим параметром очікує масив, а другим - функцію, 
? яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, 
? елементами якого будуть результати виклику колбека.
*/

// const each = function (array, callback) {
//   const arr = [];

//   for (const el of array) {
//     arr.push(callback(el));
//   }

//   return arr;
// };

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 5;
// };

// const numbers = [1, 2, 3, 4, 5];

// console.log("MULTI", each(numbers, multi));
// console.log("SUM", each(numbers, add));

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без ID, 
? а також колбек. Функція створює об'єкт товару, 
? додаючи унікальний ідентифікатор у властивість id і викликає колбек 
? передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту 
? і логіює його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту 
? і виводить в консоль загальну вартість товару.
*/

const createProduct = function (product, callback1, callback2) {
  //   console.log(product);

  const updatedProduct = {
    ...product,
    id: new Date(),
  };
  //   Object.assign(product, {   id: new Date()})

  //   console.log(first);
  //   callback1 && callback1(updatedProduct);

  if (callback1) {
    callback1(updatedProduct);
  }
  if (callback2) {
    callback2(updatedProduct);
  }
};

const logProduct = function (product1) {
  console.log(product1);
};

const logTotalPrice = function ({ price, quantity } = {}) {
  console.log(`Total price: ${price * quantity}`);
};

createProduct({ name: "🍎", price: 30, quantity: 3 }, null, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, null, logProduct);
createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

/*
? Додайте об'єкту  account  методи для
? withdraw(amount, onSuccess, onError)
? і deposit(amount, onSuccess, onError),
? де перший параметр це сума операції,
? а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? якщо amount більше this.balance
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? інакше знімаємо гроші з балансу і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо
? amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
