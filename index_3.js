/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;
// for (const iterator in salaries) {
//   //   console.log(iterator);
//   //   console.log(salaries.iterator); // undefined
//   total += salaries[iterator];
// }
// console.log(total);
//TODO: Через for...in

// let total = 0;

// const arr = [1, 2, 9, 6, 8];

// for (const item of arr) {
//   //   console.log(item);
//   total += item;
// }

// for (const key in salaries) {
//   // console.log(key);
//   // console.log(salaries[key]);
//   total += salaries[key];
// }
// console.log(total);

// console.log(total);

//TODO: Через Object.keys();

// const objKeys = Object.keys(salaries);
// console.log(objKeys);

// //TODO: Через Object.values();
// const objValues = Object.values(salaries);
// let total = 0;
// for (const number of objValues) {
//   console.log(number);
//   total += number;
// }
// console.log(total);
// const objEntries = Object.entries(salaries);
// console.log(objEntries);

// const obj = {
//   a: 1,
//   b: 2,
// };
// // const obj1 = Object.create(null);
// const obj1 = Object.create(obj);
// obj1.c = 10;
// console.log(obj);
// console.log(obj1);
// console.log(obj.hasOwnProperty("a"));
// console.log(obj1.hasOwnProperty("a"));

// console.log(obj1.a);

// for (const key in obj1) {
//   if (obj1.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);

// const cat = Object.create(animal);
// dog.name = 'Kiwi';

// console.log(dog.hasOwnProperty('legs'));

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const developersSalaaries = Object.create(salaries);
// console.log(developersSalaaries);
// let total = 0;
// developersSalaaries.Obivan = 200;
// developersSalaaries.Yoda = 500;
// developersSalaaries.Chybaka = 50;
// developersSalaaries.DartVaider = 250;
// developersSalaaries.Ann = 400;
// // prototype
// // salaries.Ann = 500;
// developersSalaaries.__proto__.Ann = 500;
// // console.log(developersSalaaries.__proto__.Ann = 600);

// console.log(developersSalaaries);
// for (const key in developersSalaaries) {
//   //   console.log(key, developersSalaaries[key]);
//   //   if (developersSalaaries.hasOwnProperty(key)) {
//   //     // console.log(key, developersSalaaries.hasOwnProperty(key));
//   //     total += developersSalaaries[key];
//   //   }
//   //   console.log(key, developersSalaaries.hasOwnProperty(key));
//   if (!developersSalaaries.hasOwnProperty(key)) {
//     console.log(key, developersSalaaries.hasOwnProperty(key));
//     total += developersSalaaries[key];
//     continue;
//   }
//   console.log(key, developersSalaaries.hasOwnProperty(key));
//   total += developersSalaaries[key];
// }
// // const developersSalaariesValues = Object.values(developersSalaaries);
// // for (const qwe of developersSalaariesValues) {
// //   total += qwe;
// // }
// console.log(total);

// const developers = Object.keys(developersSalaaries);
// // console.log(developers);
// for (const name of developers) {
//   // console.log(developersSalaaries[name]);

//   total += developersSalaaries[name];
// }

// console.log(total);

const salaries = {
  John: 100,
  Ann: "hbbi dhbf wwkw",
  Pete: 130,
};
const developersEntries = Object.entries(salaries);
console.log(developersEntries);

for (const item of developersEntries) {
  //   console.log(item);
  //   console.log(item[0]);
  //   console.log(item[1]);
  if (item[1] > 100) {
    console.log(`${item[0]}: ${item[1]}`);
  }
}
