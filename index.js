"use strict";
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення, порядок виконання коду.
 */

// console.log(showMessage("Hello", "Sofia"));
// // function declaration
// function showMessage() {
//   return Array.from(arguments);
// }
//  //agrument

// function expresion // rest
// const showMessage = function (...args) {
//   console.log(args);
// };

// // function expresion // arguments
// const showMessage = function () {
//     console.log(arguments);
//   };
// showMessage("Hello", "Sofia");
//
//
// Послідовність виконання коду
// console.log("Before func");

// function consoleMessage(message = "Default message", num = 5, start = 0) {
//   console.log(start);
//   for (let i = start; i < num; i++) {
//     console.log(message + i);
//   }
// }
// console.log("До виклика consoleMessage");
// consoleMessage("Hello world", 3);
// console.log("Після виклика consoleMessage");

// consoleMessage("I like Java Script!!");
// consoleMessage("Java Script!!");

// const showMessage = function () {
//   console.log('Hello');
// };

// showMessage();

// function showMessage() {
//   console.log('Hello');
// }

// showMessage();

// function showMessage(username = "Some ures") {
//   console.log(`Hello ${username}!`);
// }

// showMessage("Josie Pierce");
// showMessage("Vera Knight");
// showMessage("Alan Lamb");

/*
? Напиши функцію add(a, b), яка сумує 2 числа і робить перевірку, 
? якщо сума чисел менше 100 виводимо "Результат менше 100"
? інакше повертаємо суму чисел
*/

// function add(number1, number2 = 1) {
//   let result = 0;
//   if (number1 && number2) {
//     result = Number(number1 + number2);
//     if (result < 100) {
//       return "Результат менше 100";
//     }
//   }
//   return result;
// }

// console.log(add(100));

/*
? Напиши функцію calcBMI(weight, height) яка розраховує та повертає 
? індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат зросту людини.
? Вага та висота будуть спеціально передані як рядки. 
? Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI(weight, height) {
//   const numberWeight = Number.parseFloat(weight.replace(",", "."));
//   const numberHeight = Number.parseFloat(height.replace(",", "."));

//   const BMI = numberWeight / Math.pow(numberHeight, 2);
//   return Number.parseFloat(BMI.toFixed(1));
// }
// const mangoBMI = calcBMI("88,3", "1.75");
// console.log(mangoBMI);
// const pollyBMI = calcBMI("80,3", "1.95");
// console.log(pollyBMI);

/*
 * Патерн раннього повернення.
 */

/*
? Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
*/

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Один із параметрів не число";
//   }
// 1
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// 2
//   if (a < b) {
//     return a;
//   }
//   return b;
// 3
//   return a < b ? a : b;
// 4
//   return a < b && a;
// }

// console.log(min(2, "5")); // 2
// console.log(min(3, -1)); // -1
// console.log(min(5, 8)); // 1

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких будуть передані до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const numbers = dimensions.split(" ");
//   //1
//   //   const rectArea = Number(numbers[0] * numbers[1]);

//   //2
//   let rectArea = 1;
//   for (const number of numbers) {
//     rectArea *= Number(number);
//   }
//   return rectArea;
// }

// console.log(getRectArea("8 11")); // 88
// console.log(getRectArea("18 11")); // 198
// console.log(getRectArea("8 21")); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
? який для кожного елемента масиву виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.
? Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 – Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1}: ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/*
 * Scope
 */

// let total = 100;
// let count = 100;

// const str = "Global scope";

// addNumbers(
//   "d",
//   "a",
//   "g",
//   1,
//   2,
//   6,
//   4,
//   7,
//   8,
//   9,
//   5,
//   1,
//   5,
//   14,
//   15,
//   48,
//   79,
//   "d",
//   "a",
//   "g"
// );

// function addNumbers() {
//   const str = "Local scope";

//   let total = 0;
//   let count = 0;

//   for (const numbr of arguments) {
//     if (typeof numbr !== "number") {
//       continue;
//     }

//     total += numbr;
//     count += 1;
//   }
//   console.log(total / count);
// }

/*
 * Порядок виконання коду
 */

// function task1() {
//   console.log("before task 2");
//   task2();
//   console.log("after task 2");
//   console.log("Completed task 1");
// }
// function task2() {
//   console.log("before task 3");
//   task3();
//   console.log("after task 3");
//   console.log("Completed task 2");
// }
// function task3() {
//   console.log("Completed task 3");
// }
// console.log("before task 1");
// task1();
// console.log("after task 1");
//
//
// example 2
// function foo() {
//   console.log("foo - start");
//   console.log("foo - 1");
//   baz();
//   console.log("Code back 232");
//   bar();
//   console.log("Code back 234");
//   console.log("foo- end");
// }
// function baz() {
//   console.log("baz - start");
//   console.log("baz - 2");
//   console.log("baz - end");
// }
// function bar() {
//   console.log("bar - start");
//   console.log("bar-3");
//   console.log("bar - end");
// }
// foo();

/*
? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < phonesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// printContactsInfo(
//   "Vera,Carr,Violet,Sherman",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/*
? Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];

//   for (const number of numbers) {
//     // if (number > largestNumber) {
//     //   largestNumber = number;
//     // }
//     // if (number < largestNumber) {
//     //   continue;
//     // }
//     // largestNumber = number;
//     largestNumber = number > largestNumber ? number : largestNumber;
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
 * Псевдомасив arguments
 */
/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів 
? і повертає їхнє середнє значення.
? Усі аругменти будуть лише числами.
*/
// function calcAverage(...numbers) {
//   let totalSum = 0;

//   for (const number of numbers) {
//     totalSum += number;
//   }
//   return totalSum / numbers.length;
// }

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс до кінця колекції
? removeCourse(name) - видаляє курс із колекції
? updateCourse(oldName, newName) – змінює ім'я на нове
*/
const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function getCourses(data) {
  //   console.table(data);
  return data;
}
function addCourse(course) {
  if (!course) {
    return;
  }
  const coursesArr = getCourses(courses);
  coursesArr.push(course);
}

function removeCourse(name) {
  const coursesArr = getCourses(courses);
  const courseToRemove = coursesArr.indexOf(name);

  if (courseToRemove !== -1) {
    coursesArr.splice(courseToRemove, 1);
  }

  return coursesArr;
}
function updateCourse(oldName, newName) {
  const coursesArr = getCourses(courses);
  const courseToUpdate = coursesArr.indexOf(oldName);
  coursesArr.splice(courseToUpdate, 1, newName);

  return coursesArr;
}

addCourse("Express");
addCourse("React");
removeCourse("CSS");
removeCourse("Linux");
updateCourse("HTML", "Vue");
updateCourse("Linux", "Windows");

console.table(getCourses(courses));
