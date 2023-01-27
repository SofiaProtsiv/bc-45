/*
 * Створення промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - Promise.prototype.then(onResolve, onReject)
 * - Ланцюжки промісів (chaining)
 * - Promise.prototype.catch(error)
 * - Promise.prototype.finally()
 * - Marco and micro tasks
 */

// 📌❗️🤓 Що виведе в консоль?

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//     console.log('promise: 2');
//   });

// console.log('console.log: 2');

// ❗️🤓📌 Kонструктор new Promise(callback(resolve, reject));

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// // // Will run first
// console.log('Before promise.then()');

// // // Registering promise callbacks
// promise
//   .then(
//     // onResolve will run third or not at all
//     value => {
//       console.log('onResolve call inside promise.then()');
//       console.log(value); // "Success! Value passed to resolve function"
//     },
//     // onReject will run third or not at all
//     error => {
//       console.log('onReject call inside promise.then()');
//       console.log(error); // "Error! Error passed to reject function"
//     }
//   )
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('The end');
//   });

// // Will run second
// console.log('After promise.then()');

// ❗️🤓📌 Example 2

// const promise = new Promise((resolve, reject) => {
//   const isDone = Math.random();

//   setTimeout(() => {
//     if (isDone < 0.5) {
//       resolve('Done');
//     } else {
//       reject('Error');
//     }
//   }, 1500);
// });

// // promise.then(console.log).catch(console.log);

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => console.log(error))
//   .finally(() => {
//     console.log('The end!');
//   });

// ❗️🤓📌 Example 3, ланцюжок промісів

// const promise = new Promise((resolve, reject) => {
//   const isDone = Math.random();

//   console.log('Start');

//   setTimeout(() => {
//     if (isDone < 0.5) {
//       resolve('Done');
//     } else {
//       reject('Error');
//     }
//   }, 1000);
// });

// promise
//   .then(data => {
//     console.log(data);
//     data += '!';
//     return data;
//   })
//   .then(str => {
//     console.log(str);
//     str += '!!';
//     return str;
//   })
//   .then(someStr => {
//     console.log(someStr);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('The end');
//   });


//? TASK 01
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     if (!data) {
//       throw new Error('Error in then!');
//     }
//     return '2';
//   })
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(error => {
//     console.log(error);
//   });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробити так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Обернути все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

const makePromise = () => {
  return new Promise((resolve, rejected) => {
    const delay = getRandomNumber();

    setTimeout(() => {
      if (delay <= 2) {
        resolve(delay);
      }
      rejected(delay);
    }, delay * 1000);
  });
};

const onSuccess = delay => console.log(`✅ Resolved after ${delay} sec`);
const onError = delay => console.error(`❌ Rejected after ${delay} sec`);
makePromise().then(onSuccess).catch(onError);