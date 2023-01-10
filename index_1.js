"use strict";

/*
 * Операція spread як заміна concat та slice
 */

// //*  Копія масива
// const numbers = [1, 2, 3, 4, 5];
// // const numbers2 = numbers.slice();
// // const numbers2 = [].concat(numbers);
// const numbers2 = [...numbers];

// // console.log(numbers2);

// console.log("numbers: ", numbers);
// console.log("numbers2: ", numbers2);
// console.log(numbers === numbers2);

// numbers2[0] = 10;

// console.log("numbers: ", numbers);
// console.log("numbers2: ", numbers2);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];

// const allNumbers = numbers2.concat(numbers);

// const allNumbers = [...numbers2, 4, 5, ...numbers];

// console.log(allNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// const str = "hello";
// console.log(...str);
/*
 * Операція spread як заміна Object.assign({}, ...sources)
 */

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };

// // Object.assign(o1, o2, o3);
// // const obj = Object.assign(o1, o2, o3);
// const obj = { ...o1, ...o2, ...o3 };
// // console.log(obj); // { a: 1, b: 2, c: 3 }
// // console.log(o1); // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.
// // console.log(obj === o1);

// const user = {
//   username: "Sofia",
//   password: 1111,
// };
// console.log(user);
// Object.assign(user, { password: 2222 });

// console.log(user);

// const animal = {
//   legs: 4,
// };

// const cat = Object.create(animal);
// cat.name = "Kiwi";
// console.log(cat);
// // const newCat = _.cloneDeep(cat);
// const newCat = structuredClone(cat);
// // const newCat = Object.assign(cat);
// // const newCat2 = { ...cat };
// console.log(newCat);
// console.log(newCat2);

// const user = {
//   firstName: "Jonathan",
//   lastName: "Barnett",
//   age: 30,
// };

// const user2 = { ...user };

// console.log("user: ", user);
// console.log("user2: ", user2);
// // console.log(user === user2);

// user2.firstName = "Birdie";
// console.log("---------------------");
// console.log("user: ", user);
// console.log("user2: ", user2);

//* Розпилення складних типів

// const user = {
//   firstName: "Jonathan",
//   lastName: "Barnett",
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

//  Поверхневе копіювання
// const user2 = Object.assign(user);
// const user2 = { ...user };
//
/// Глибоке копіювання
// const user2 = JSON.parse(JSON.stringify(user));
// const user2 = structuredClone(user);
//
//
// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log(user === user2);
// user.someArr.push(10);

// console.log("user: ", user);
// console.log("user2: ", user2);

/*
 * Операція rest
 */

//? Напишіть функцію sum, яка додає довільну кількість
//? аргументів, які більше вказаного числа;

const sum = function (...elements) {
  let total = 0;
  for (const el of elements) {
    if (typeof el === "number" && !Number.isNaN(el)) {
      total += el;
    }
  }
  return total;
};

const numbers = [1, 2, 3, 4];
const result = sum(5, 6, 4, NaN, 14, 85, 2, 3, "df", "df", "dfs", NaN);
console.log(result);
console.log(sum(...numbers));
console.log(sum(10, 20, 30));
// console.log(typeof NaN);
