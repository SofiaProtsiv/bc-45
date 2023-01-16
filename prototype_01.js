"use strict";
/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

//* 📌❗️🤓 Власні властивості об'єкта та не власні властивості

const user = {
  firstName: "Isaac",
  age: 40,
};

const user2 = Object.create(user);
user2.lastName = "Nyton";
user2.sex = "man";
user2.firstName = "Louis";
// console.log(user2);
// console.log(user2.__proto__);
// console.log(user2.firstName);
// console.log(user2.hasOwnProperty("age"));

const user3 = Object.create(user2);
user3.firstName = "Jordan";

// const userNoPrototype = Object.create(null);
// userNoPrototype.firstName = "Sofia";

// console.log("user: ", user);
// console.log("user2: ", user2);
// console.log("user3: ", user3);
// console.log("userNoPrototype", userNoPrototype);

//* 📌❗️🤓 Перевірка властивих властивостей obj.hasOwnProperty()

// const key = "firstName";
// console.log(user3.hasOwnProperty("age"));
// console.log(user3.hasOwnProperty(key));

//*  📌❗️🤓 Цикл for...in, перебирає всі властивості, і власні та не власні.

// for (const key in user3) {
//   //   console.log(key);
//   if (user3.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
// for (const key in user3) {
//   if (Object.hasOwnProperty.call(user3, key)) {
//     console.log(key);
//   }
// }

// const keysUser3 = Object.keys(user3);
// const valuesUser3 = Object.values(user3);
// const entriesUser3 = Object.entries(user3);
// console.log(keysUser3);
// console.log(valuesUser3);
// console.log(entriesUser3);
