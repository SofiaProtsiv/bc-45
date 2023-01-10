"use strict";
/*
 * Деструктуризація об'єктів
 */

// const user = {
//   firstName: "John",
//   lastName: "Reese",
//   age: 30,
// };

// /*
// ? Напишіть деструктуруюче привласнення, яке:
// ? Властивості firstName присвоє змінну firstName.
// ? властивості age привласнить змінну userAge.
// ? властивості isAdmin присвоє змінну isAdmin
// ? (false, якщо немає такої властивості)
// */

// const {
//   age: userAge = 20,
//   firstName = "Unknown",
//   lastName = "Unknown",
//   isAdmin = false,
// } = user;
// // console.log(age, firstName, lastName);
// // console.log(user.age, user.firstName, user.lastName);

// console.log("firstName: ", firstName);
// console.log("lastName: ", lastName);
// console.log("userAge: ", userAge);
// console.log("isAdmin: ", isAdmin);

/*
 * Глибока деструктуризація об'єктів
 */

// const team = {
//   //   number: 4,
//   flag: "./images/flag.jpg",
//   employees: ["Anton", "Oleg", "Ronnie", "Carr"],
//   langs: {
//     original: "uk",
//     secondary: "pl",
//     third: {
//       third: "en",
//     },
//   },
// };
// const defaultImg =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

// const {
//   number = 0,
//   flag = defaultImg,
//   employees,
//   //   langs: {
//   //     original: originalLang,
//   //     secondary: secondaryLang = "sp",
//   //     third: { third: thirdLang },
//   //   },
//   langs,
// } = team;

// // console.log(thirdLang);
// // const { original, secondary } = langs;
// // console.log(originalLang);
// // console.log(secondaryLang);
// const { original, secondary: secondaryLang } = langs;
// console.log(original);
// console.log(secondaryLang);

// const {
//   number,
//   flag,
//   employees,
//   langs: { original: originalLang, secondary: secondaryLang },
// } = team;

// console.log("number: ", number);
// console.log("flag: ", flag);
// console.log("employees: ", employees);
// console.log("originalLang: ", originalLang);
// console.log("secondaryLang: ", secondaryLang);

/*
 * Деструктуризація масивів
 */

// const names = ["Herbert Todd", "Belle Soto", "Roger Marsh", "Ethan Lindsey"];
// const [user1, , , user2] = names;
// const user3 = names[0];

// console.log(names);
// console.log(user1);
// console.log(user3);
// console.log(user2);

// const rgb = [0, 255, 34];
// const [red = 0, green = 0, blue = 0] = rgb;

// console.log("red: ", red);
// console.log("green: ", green);
// console.log("blue: ", blue);

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає ім'я 
працівника з найбільшою заробітною плантею.
?
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути 
будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування,
щоб перебрати пари ключ/значення.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 2500,
// };

// const topSalary = function (salaries) {
//   //   console.log(salaries);
//   const salariesArr = Object.entries(salaries);
//   let firstItemsalariesArr = salariesArr[0];
//   //   console.log(salariesArr);
//   // let maxSalary = salariesArr[0][1];
//   // let employerName = salariesArr[0][0];
//   let maxSalary = firstItemsalariesArr[1];
//   let employerName = firstItemsalariesArr[0];

//   for (const [name, salary] of salariesArr) {
//     // console.log(emlpoyer); // arr
//     // console.log(emlpoyer[1]); // salery
//     // console.log(emlpoyer[0]); // name

//     // if (emlpoyer[1] > maxSalary) {
//     //   maxSalary = emlpoyer[1];
//     //   employerName = emlpoyer[0];
//     // }

//     const [name, salary] = emlpoyer;
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       employerName = name;
//     }
//   }
//   console.log(employerName);
// };
// topSalary(salaries);
