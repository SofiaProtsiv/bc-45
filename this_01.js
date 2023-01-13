"use strict";
/*
 * Функція це окремий випадок об'єкта -> ПОСИЛАЛЬНИЙ ТИП
 */

// console.log("[] === []: ", [] === []);
// console.log("{} === {}: ", {} === {});
// console.log(
//   "function() {} === function() {}: ",
//   function () {} === function () {}
// );

// const fnA = function () {
//   console.log("hello");
// };

// const fnB = fnA;
// console.log("fnB === fnA:", fnB === fnA);

/*
 *  Контекст виклику this
 */

/*
 * this існує тільки всередині функцій.
 *
 * На контекст не впливає те, де функція була //! ОГОЛОШЕНА.
 * На контекст впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 *
 * Якщо функція визивається в контексті об'єкта, this посилається на цей об'єкт
 * Якщо функція визивається без контекста this --> undefined
 *
 * При передачі функції як callback контекст не зберігається
 *
 * this  в сктрілочних функціях посилається на батьківський this:
 *  - якщо стрілочна функція визивається без
 *    контексту або в контексті об'єкта, this --> window
 *  - якщо стрілочна функція оголошена в серередині функції
 *    (не стрілочної) this стрілочної функції
 *    буде посилатися на батьківський this
 */

//TODO: Розглянемо як this поводиться в методах

// const user = {
//   name: "Luis",
//   age: 30,

//   showThis() {
//     // this = user;
//     console.log("this ----> ", this);
//   },

//   showName() {
//     // this = user;
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

// const anotherUser = {
//   name: "Barry",
//   age: 20,

//   showThis() {
//     // this = user;
//     console.log("this ----> ", this);
//   },

//   showName() {
//     const test = () => {
//       console.log(this);
//     };
//     test();
//   },

//   showName: () => {
//     console.log(this);
//   },
// };

// anotherUser.showThis();
// anotherUser.showName();
// anotherUser.showName.bind(anotherUser)();

//TODO: Розглянемо як this поводиться
// у звичайних функціях (суворий, не суворий режим)

//? Function expression
// const fn = function () {
//   console.log(`this ---->`, this);
// };

// fn();

// // ? Function declaration
// function fn() {
//   console.log(`this ---->`, this);
// }

// fn();

//? Arrow function
// const fn = () => {
//   console.log(`this ---->`, this);
// };

// fn();

//TODO: Присвоєння функції як методу об'єкту

// const showThis = function () {
//   console.log(`this ----> `, this);
// };

// const showThisName = function () {
//   console.log(`this name is: ${this.name}`);
// };

// const user = {
//   name: "Luis",
//   age: 30,
//   //   showThis,
//   //   showThisName,
// };

// user.showThis = showThis;
// user.showThisName = showThisName;

// // console.log(user);

// user.showThis();
// user.showThisName();

//TODO: Виклик методу об'єкта без контексту

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

// const showUserThis = user.showThis;
// const showUserName = user.showName;

// showUserThis();
// showUserName();

//TODO: This в callback функціях

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

// user.showName();

// const someFunction = function (callback) {
//   callback();
// };

// someFunction(user.showName);

//TODO: this у стрілочних функціях.
// Стрілочні функції не мають свого this,
// this у стрілочних функціях завжди посилається
// на батьківський this.
//
// const user = {
//   name: "Luis",
//   age: 30,

//   changeAge: () => {
//     console.log(`this ---->`, this);
//     console.log(this.age);

//     // console.log(`this ---->`, user);
//     // console.log(user.age);
//   },
//   // changeAge() {
//   //   const change = () => {
//   //     console.log(this.age);
//   //   };
//   //   change();
//   // },
// };
// user.changeAge();

/*
? Яким буде результат виконання цього коду?
*/

// let user = {
//   name: "Джон",

//   go() {
//     console.log(this);
//     // console.log(this.name);
//     const arrow = () => console.log("this in arrow function", this);
//     arrow();
//   },
// };
// // user.go();
// const goFn = user.go;

// goFn();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const user = {
//   name: "Luis",
//   age: 30,
//   makeUser() {
//     return {
//       name: "Mango",
//       ref: this.name,
//     };
//   },
// };
// // console.log(user.ref);

// const makeUser = function () {
//   console.log(this);
//   return {
//     name: "Джон",
//     ref: this,
//   };
// };
// makeUser();
// const mango = user.makeUser();
// console.log(mango);
// console.log(mango.ref);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user);
// console.log(user.name);
// console.log(user.ref());
// console.log(user.ref().name);
