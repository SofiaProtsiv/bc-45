"use strict";
/*
 *  Масиви: літерали массива, елементи, індексація, довжина
 */
// Масив - структура даних для зберігання і маніпулювання
// колекцією індексованих значень. Використовується для зберігання
// впорядкованих колекцій даних, наприклад, списку курортів, товарів, клієнтів в готелі тощо.
/*


? Створіть масив genres з елементами Jazz і Blues.
? Додайте «Рок-н-рол» до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

const genres = ["Jazz", "Bluz"];

// const genres = ["Jazz", "Blues", "Рок-н-рол", "Country", "Reggy"];
// genres[4] = "Рок-н-рол";
// console.log(genres[2]);
genres.push("Рок-н-рол");
genres.unshift("Country", "Reggy");
// console.log(genres.length);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.table(genres);
// genres.shift();
// genres.pop();

// console.log(genres.push("Рок-н-рол"));
// console.log(genres.shift());
// console.log(genres.pop());

// console.log([].shift());
// console.log(genres);
// const indexFindEl = genres.indexOf("Jazz"); // Jazz
// console.log(indexFindEl);

// const newGenres = genres.slice();
// newGenres.push("Hello");
// console.table("newGenres", newGenres);
// console.table("genres", genres);
/*
 * Передача за посиланням та за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть в консоль обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/
// const genre = ["Jazz", "Bluz"];
// const newGenre = genre; // ["Jazz", "Bluz"]
// console.log(newGenre);

// newGenre.push("hello");
// console.log(genre);
// console.log(newGenre);
//
//
// const c = [3];
// const d = c;
// c[5] = 6;
// console.log(c, d);
// console.log(c === d);

// let a = 10;
// let b = a; //10

// console.log("a: ", a); // 10
// console.log("b: ", b); // 10

// a = 30;
// b = 20;
// console.log(a === b);
// console.log("a: ", a); // 20
// console.log("b: ", b); // 10

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Вибачте в консоль обидва ці масиви
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1; //[1, 2, 3]

// console.log("arr1: ", arr1); // [1, 2, 3]
// console.log("arr2: ", arr2); // [1, 2, 3]

// arr1.push(10);

// console.log("arr1: ", arr1); // [1, 2, 3, 10]
// console.log("arr2: ", arr2); // [1, 2, 3, 10]

/*
 * Перебір масиву циклами for и for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з одиниці.
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
//   //   console.log(i + 1 + ": " + fruits[i]);
// }
// for (let i = fruits.length - 1; i >= 0; i -= 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
//   //   console.log(i + 1 + ": " + fruits[i]);
// }
/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

const numbers = [2, 17, 94, 1, -20, -50, 23, 37];
// let min = numbers[0]; //2
let min = 0;

// 1 Варіант розв'язання
// for (let i = 0; i < numbers.length; i += 1) {
// console.log(numbers[i]);
//   if (numbers[i] < min) {
//     min = numbers[i]; //-50
//   }
// }
// console.log(Math.min(2, 17, 94, 1, -20, -50, 23, 37));
// console.log(Math.min(...numbers));
// console.log(min);

// 2 Варіант розв'язання

// for (const number of numbers) {
//   //   console.log(number);
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

// const genres = ["Jazz", "Blues", "Рок-н-рол", "Country", "Reggy"];

// let longestWord = genres[0];
// console.log(longestWord);
// for (const genre of genres) {
//   if (longestWord.length < genre.length) {
//     longestWord = genre;
//   }
// }
// console.log(longestWord);
/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// 1 Варіант розв'язання
// for (let i = 0; i < salaries.length; i += 1) {
//   // console.log(salaries[i]);
//   //   total = total + salaries[i];

//   total += salaries[i];
// }

// 2 Варіант розв'язання
// for (const salary of salaries) {
//   //   console.log(salary);
//   total += salary;
// }
// console.log(total);
// console.log(total);

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

const managerSalaries = [1000, 1500, 2500, 4000, 5000];
const developersSalaries = [8000, 15000, 40000];
// let total = 0;
// // // 1 Варіант  розв'язання
// for (const managerSalary of managerSalaries) {
//   total += managerSalary;
//   //   total = total + managerSalary;
// }
// console.log(total);
// for (const developerSalary of developersSalaries) {
//   total += developerSalary;
// }

// console.log(total);

// 2 Варіант розв'язання
// const salaries = [];
// let total = 0;
// for (const managerSalary of managerSalaries) {
//   salaries.push(managerSalary);
// }
// console.log(salaries);
// for (const developerSalary of developersSalaries) {
//   //   console.log(developerSalary);
//   salaries.push(developerSalary);
// }
// console.log(salaries);
// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

// 3 Варіант розв'язання

// let allSalaries = [].concat(managerSalaries, developersSalaries);
// let total = 0;
// for (const salary of allSalaries) {
//   total += salary;
// }
// console.log(total);
// console.log(allSalaries);
// const g = allSalaries;

// console.log(g === allSalaries);
// console.log(g);
// console.log(allSalaries);

// console.log(g);
// console.log(allSalaries);

/*
 * Базові методи: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінних значеннях у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const values = "8 11";

// const sidesArr = values.split(" ");
// // console.log(sidesArr);
// const area = Number(sidesArr[0]) * Number(sidesArr[1]);
// // const area = Number(sidesArr[0] * sidesArr[1]);

// console.log(area);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = "Jacob, William, Solomon, Artemis";
// const phones = "89001234567, 89001112233, 890055566377, 890055566300";

// const namesArr = names.split(", ");
// const phonesArr = phones.split(", ");

// for (let i = 0; i < namesArr.length; i += 1) {
//   //   console.log(namesArr[i]);
//   //   console.log(phonesArr[i]);
//   //   console.log(namesArr[i] + ":" + phonesArr[i]);
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

// 1 Варіант розв'язання
const string = "Welcome to the future!";
// console.log(string);
// console.log(string.reverse());
// console.log(String.prototype);
// const charsArr = string.split("");
// console.log(charsArr);
// const charsArrReverse = charsArr.reverse();
// console.log(charsArrReverse);
// console.log(charsArrReverse.join(""));

// let reverseString = "";

// for (let i = 0; i < string.length; i += 1) {
//   // console.log(string[string.length - 1 - i]);
//   //   console.log(string.length - 1 - i);
//   reverseString += string[string.length - 1 - i];
// }
// console.log(reverseString);
// let reverseString = "";

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseString += string[i];
// }
// console.log(reverseString);
// console.log(reverseCharsArr.join(""));

// 2 Варіант розв'язання
// const string = "Welcome to the future!";
// let reverseArr = [];

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(string[i]);
// }

// console.log(reverseArr.join(""));

// const array = [7, 7, 7, 5, 5, 5];
// console.log(arr.reverse());
// for (let i = 0; i < array.length / 2; i += 1) {
// let temp = array[i];
// array[i] += array[array.length - 1 - i];
// // array[i] = array[array.length - 1 - i];
// array[array.length - 1 - i] = array[i] - array[array.length - 1 - i];
// array[i] -= array[array.length - 1 - i];
// console.log("index i", i);
// console.log("array[i]", array[i]);
// console.log("array[array.length - 1 - i]", array[array.length - 1 - i]);
// console.log("array.length - 1 - i", array.length - 1 - i);
// console.log("-------------------------");
// array[i] = array[array.length - 1 - i];
// array[array.length - 1 - i] = temp;
// }
// console.log(array);
/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

const employees = ["Dennis", "Dennis", "Shaw", "Watkins", "Watkins", "Ray"];
// console.log(employees);
const filteredEmployees = [];
// console.log(employees.indexOf("Dennis"));
// // 0 === 0
// // 1 === 1
// // 2 === 2
// // 3 === 3
// // 1 === 4
// // 3 === 5

// for (let i = 0; i < employees.length; i++) {
//   // console.log(employees[i]);
//   // console.log(employees.indexOf(employees[i]));
//   console.log(
//     `indexOf(${employees[i]})`,
//     employees.indexOf(employees[i]),
//     `index ${employees[i]}`,
//     i
//   );
//   console.log("indexOf === index", employees.indexOf(employees[i]) === i);
//   //   console.log("-----------------------------");
//   // console.log(`index ${employees[i]}`, i);
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }
// console.log(filteredEmployees);
// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) !== i) {
//     employees.splice(i, 1);
//   }
// }
// console.table(employees);
// const elToUpdate = employees.indexOf("Ray");
// employees.splice(elToUpdate, 1, "HELLO");
// console.table(employees);
// //? Співробітник Shaw звільнився, видаліть його з масиву
// const index = employees.indexOf("Shaw");
// employees.splice(index, 1);
// console.log(employees);
// const indexOfRemovedElement = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(indexOfRemovedElement, 1);

// console.log(filteredEmployees);

// //? Додати нового співробітника Thornton, перед Watkins;

// const indexOfWatkins = employees.indexOf("Watkins");

// employees.splice(indexOfWatkins, 0, "Thornton");
// console.log(employees);
// const indexOfRay = employees.indexOf("Ray");
// employees.splice(indexOfRay, 2, "Pango");
// console.log(employees);
// slug
// const title = 'Title 1'.split(' ').join('-'); // Title-1
// console.log(title);

//янесугусеня
// const str = "Де помити мопед";
// const str = "І була пані на палубІ!!!";

// const str = "я несу гусеня!";
// const newString = str.split("");
// newString.splice(0, 1, str[0].toUpperCase());
// console.log(newString.join(""));
// const strUpdateWithoutSpase = strUpdate.replaceAll(" ", "");
// // console.log(strUpdateWithoutSpase);
// const strUpdateWithoutSpaseToArray = strUpdateWithoutSpase.split("");
// const strUpdateWithoutSpaseToArrayReverse =
//   strUpdateWithoutSpaseToArray.reverse();
// const strUpdateWithoutSpaseToArrayReverseToString =
//   strUpdateWithoutSpaseToArrayReverse.join("");
// console.log(
//   strUpdateWithoutSpaseToArrayReverseToString === strUpdateWithoutSpase
// );
// console.log(strUpdateWithoutSpaseToArrayReverseToString);
// const strUpdate = str.toLowerCase().replaceAll(" ", "");
// const strReversed = strUpdate.split("").reverse().join("");
// console.log(strUpdate === strReversed);
