"use strict";
/*
 * Методи функції call, apply i bind
 */

//*Функції це об'єкти зі своїми властивостями та методами

// const greet = function () {
//   console.log("Hello");
// };
// greet();
// greet.test = 5;

// console.dir(greet);

//* call і apply

//TODO: Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, num) {
//   console.log(this);
//   console.log(`${message} ${this.firstName} ${this.lastName}, ${num}`);
// };

// // showFullName();

// const user = {
//   firstName: "Ernest",
//   lastName: "Vasquez",
//   age: 30,
// };

// // user.show = showFullName;
// // console.log(user);
// // user.show("Hello", 15);

// showFullName.call(user, "Hello", 15);
// showFullName.apply(user, ["Hello", 15]);

//TODO:  Викличте функцію showFullName у контексті об'єкта anotherUser

// const showFullName = function (message) {
//   console.log(this);
//   console.log(`${message} ${this.firstName} ${this.lastName}!`);
// };

// const anotherUser = {
//   firstName: "Ray",
//   lastName: "Fleming",
//   age: 40,
// };

// showFullName.call(anotherUser, "Hello");
// showFullName.call(user, "Hello");
// showFullName.apply(anotherUser, ["Hello"]);

//* bind

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: "Ernest",
//   lastName: "Vasquez",
//   age: 30,
// };

// const mango = {
//   firstName: "Mango",
//   lastName: "Vasquez",
//   age: 30,
// };

// const showUserName = showFullName.bind(user);
// const showMangoName = showFullName.bind(mango);

// showUserName();
// showUserName.call(mango);
// showMangoName();

// const someFunction = function (callback) {
//   //   let callback = user.showThis;
//   //   console.log(this);
//   callback();
// };
// someFunction(showMangoName);

//*TODO: Метод об'єкта у ролі колбека

// const user = {
//   name: "Luis",
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// // someFunction(user.showThis); // not working
// // someFunction(user.showThis.call(user)); // not working
// someFunction(user.showThis.bind(user)); // working

/*
? TODO
? Що виведе цей код?
*/

// const fo = function (message) {
//   console.log(this.name);
// };

// const user = {
//   name: "Вася",
// };

// const anotherUser = {
//   name: "Петя",
// };

// const copyFunc = fo.bind(anotherUser).bind(user);

// copyFunc();

/*
? TODO
? Виклик checkPassword() у наведеному нижче коді 
? повинен перевірити пароль і потім викликати 
? user.loginOk/loginFail в залежністі від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */

// const user = {
//   name: "Вася",

//   loginOk() {
//     console.log("this", this);
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// const checkPassword = function (userPassword, ok, fail) {
//   const password = "rockstar";

//   if (password === userPassword) {
//     console.log("Password Ok!");
//     ok();
//   } else {
//     console.log("Password not Ok!");
//     fail();
//   }
// };
// // checkPassword("rockstar", user.loginOk, user.loginFail);

// const showOk = user.loginOk.bind(user);
// const showError = user.loginFail.bind(user);

// checkPassword("rockstar", showOk, showError);
