/*
 * forEach() як заміна циклів for і for...of для масивів
 */

// const numbers = [1, 2, 3, 4, 5];

// const ownForEach = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };
// ownForEach(numbers, (el, idx, arr) => {
//   console.log(el);
//   console.log(idx);
//   console.log(arr);
// });

// numbers.forEach((el, idx, arr) => {
//   console.log("el", el);
//   console.log("idx", idx);
//   console.log("arr", arr);
// });

// const numbers = [1, 2, 3, 4, 5];

// const getTotal = function (numbersArr) {
//   let total = 0;
//   // Через звичайний for
//   for (let i = 0; i < numbersArr.length; i++) {
//     total += numbersArr[i];
//     if (i === 2) {
//       return total;
//     }
//   }

// Через звичайний for...of
// for (const number of numbersArr) {
//     total += number;
// }

// Через forEach();
//   numbersArr.forEach((number) => (total += number));

//   return total;
// };

// console.log(getTotal(numbers));

/*
? Виконайте рефакторинг коду, використовуючи метод forEach 
? і стрілочні функції.
*/

// function logItems(items) {
//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

// //   items.forEach((item, idx) => {
// //     console.log(`${idx + 1} - ${item}`);
// //   });
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach 
? і стрілочні функції.
*/

// function printContactsInfo({ names, phones } = {}) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   //   for (let i = 0; i < phoneList.length; i += 1) {
//   //     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   //   }

//   nameList.forEach((element, index) =>
//     console.log(`${element}: ${phoneList[index]}`)
//   );
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach 
? і стрілочні функції.
*/

// function calсulateAverage(...args) {
//   let total = 0;

//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   args.forEach((arg) => (total += arg));

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// Count vowel

// Напишіть функцію під назвою `vowelCount`,
// яка приймає рядок і повертає об’єкт із
// ключами як голосною та значеннями як кількість разів,
//коли голосна з’являється в рядку.
// Ця функція має бути нечутливою до регістру,
// тому мають враховуватися малі та великі літери

function vowelCount(str) {
  const normilizedStrArr = str.toLowerCase().split("");
  const vowels = "aeiou";
  const obj = {};

  //   normilizedStrArr.forEach((letter) => {
  //     // console.log([...vowels]);
  //     // console.log(Array.from(vowels));
  //     // console.log(vowels.split(""));

  //     vowels.split("").forEach((vowel) => {
  //       if (letter.includes(vowel)) {
  //         obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  //       }
  //       //   if (letter === vowel) {
  //       //     obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  //       //   }
  //     });
  //   }

  normilizedStrArr.forEach((letter) => {
    if (vowels.includes(letter)) {
      //   if (obj[letter]) {
      //     obj[letter] += 1;
      //   } else {
      //     obj[letter] = 1;
      //   }

      obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
    }
  });

  return obj;
}

// console.log(vowelCount("Elie")); // {e:2,i:1};
// console.log(vowelCount("Tim")); // {i:1};
// console.log(vowelCount("Matt")); // {a:1})
// console.log(vowelCount("hmmm")); // {};
// console.log(vowelCount("I Am awesome and so are you")); // {i: 1, a: 4, e: 3, o: 3, u: 1};

// За допомогою методу `forEach()` виведи всі name
// з об'єкта employees капслоком.

// Потім виведи у кого зарплата більше 12000

// А в кінці підрахуй скільки компанія виплачує працівникам,
// скільки працівників є у компанії та виведи імена
// працівників,
// до прикладу `Company pay 23000 for 2 employeers: Alex,Clark`

const employees = [
  {
    id: 101,
    name: "Alex",
    sal: 10000,
  },
  {
    id: 102,
    name: "Clark",
    sal: 13000,
  },
  {
    id: 103,
    name: "John",
    sal: 12000,
  },
  {
    id: 104,
    name: "Tony",
    sal: 20000,
  },
];
const each = (array) => {
  let totalSalary = 0;
  let totalEmployeers = array.length;
  let names = [];

  array.forEach(({ name }) => names.push(name.toUpperCase()));

  array.forEach(({ sal }) => (totalSalary += sal));

  console.log(
    `Company pay ${totalSalary} for ${totalEmployeers} employeers: ${names.join(
      ", "
    )}`
  );
};
each(employees);
