/*
 * Створення об'єкта (конструктор, літерал).
 * Властивості, ключі (ім'я) та значення
 */

// const user = {};
// console.log(user);

// const user = new Object()
// const user = Object.create()

// Сутність фільм (назва, опис, рейтинг, акторський склад, вікове обмеження)
const film = {
  title: "Matrix",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!",
  rating: 4,
  actors: ["Aiden", "Mason", "Jimmy"],
  isAdult: true,
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hello_world: 5,
};
// const property = "title";
// console.log(film.title);
// console.log(film["title"]);
// console.log(film.property);
// console.log(film[property]);
// film.example = "Hello";
// film.isAdult = false;
// film.actors.push("Hello");

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// film["preview"] = "./images/img.jpg";
// film.preview = "./images/img.jpg";

// film.isAdult = false;
// film["isAdult"] = false;

// console.log(film["hello world"]);
/*
 *Короткий запис властивостей
 */

// const username = "Oleksii";
// const email = "test@gmail.com";

// const signupData = {
//   username: username,
//   email: email,
// };

// const signupData = {
//   username,
//   email,
// };
// console.log(signupData);

// const name = prompt("Введіть ваше ім'я");
// const email = prompt("Ваш email");

// const user = {
//   name,
//   email,
// };

// console.log(user);

// const f = {};
// const d = {};
// const a = {
//   b: 1,
//   c: 2,
// };
// a[f] = 3;
// a[d] = 4;
// console.log(a);
/*
 * Посилальний тип
 */
// Примітивні типи даних
// let a = 5;
// let b = a;

// a = 20;
// console.log(a, b);

// const a = { a: 1 };
// const b = { a: 1 };

// console.log(a == b);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj2 = obj;

// // console.log('obj: ', obj);
// // console.log('obj2: ', obj2);
// console.log(obj === obj2);

// obj2.c = 5;

// console.log("obj: ", obj);
// console.log("obj2: ", obj2);
// console.log(obj === obj2);

/*
 *Все у цьому світі об'єкти
 */
// const arr = [1, 2, 3, 4];

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
