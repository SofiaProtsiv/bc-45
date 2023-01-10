"use strict";

const people = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
  {
    name: "Jhon",
    know: [],
  },
];
//нарцис  'Jhon'

const people2 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса'

const people3 = [
  {
    name: "Alex",
    know: ["Alex", "Eva"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса

const people4 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
];
//немає нарциса'

//Нарциса знають всі, нарцис незнає нікого

function findNar(peoples) {
  const allNames = [];
  const obj = {};
  let narName = "";

  for (const { name, know } of peoples) {
    allNames.push(...know);
    if (know.length === 0) {
      narName = name;
    }
  }

  for (const name of allNames) {
    if (obj[name]) {
      obj[name] += 1;
    } else {
      obj[name] = 1;
    }
  }

  const entries = Object.entries(obj);
  for (const [name, number] of entries) {
    if (number > entries.length - 1 && name === narName) {
      return console.log(`${name} Нарцис`);
    }
  }
  return console.log("Нарциса нема");
}

// function findNar(peoples) {
//   let narName = "";
//   for (const { name, know } of peoples) {
//     if (know.length === 0) {
//       narName = name;
//       break;
//     }
//   }
//   if (narName === "") {
//     ("Нарциса немає!");
//   }
//   for (const { name, know } of peoples) {
//     if (name === narName) {
//       continue;
//     }
//     if (!know.includes(narName)) {
//       console.log("Нарциса немає!");
//       return;
//     }
//   }
//   console.log(`Нарцис -- ${narName}`);
// }

findNar(people);
findNar(people2);
findNar(people3);
findNar(people4);

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// function calcBMI({ weight = '', height = '' } = {}) {
//   //   console.log(obj);
//   // { weight = '', height = '' } = {}
//   //   const { weight = '', height = '' } = obj;
//   //   console.log(weight);
//   //   console.log(height);

//   const numericWeight = Number.parseFloat(weight.replace(',', '.'));
//   const numericHeight = Number.parseFloat(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Було
// console.log(calcBMI());
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );

// calcBMI();
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );
// console.log(calcBMI());

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// const printContactsInfo = function ({ names = '', phones = '' } = {}) {
//   //   console.log(obj);
//   //   console.log(obj.names);
//   //   const { names = '', phones = '' } = obj;
//   //   console.log(names);
//   //   console.log(phones);
//   // { names = '', phones = '' } = {}
//   // const { names, phones } = obj;

//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < phoneList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// };

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// printContactsInfo();
/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   console.log(obj);
//   const {
//     companyName,
//     bots: { repair, defence },
//   } = obj;
//   console.log(companyName);
//   const { repair, defence } = bots;
//   console.log(repair);
//   console.log(defence);
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = obj;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

/*
? Напиши функцію getStockReport(companyName, stock),
щоб вона приймала об'єкт параметрів
з властивостями companyName та stock та виводила репорт
? про кількість товарів на складі будь-якої компанії.
*/

// function getStockReport({ companyName, stock: stockItems }) {
//   //   const { companyName, stock: stockItems } = obj;
//   let totalItems = 0;
//   //   const stockItemsKeys = Object.keys(stockItems);
//   const stockItemsValues = Object.values(stockItems);
//   // console.log(stockItemsKeys);
//   //   for (const key of stockItemsKeys) {
//   //     totalItems += stockItems[key];
//   //   }
//   for (const value of stockItemsValues) {
//     totalItems += value;
//   }

//   return `${companyName} has ${totalItems} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

/*
? Напиши функцію createContact(partialContact) так,
? щоб вона повертала новий об'єкт контакту з доданими властивостями id і createdAt,
? а також list зі значенням "default" якщо у partialContact немає такої властивості.
*/

// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// const createContact = function (partialContact) {
//   //   console.log(partialContact);
//   return {
//     id: generateId(),
//     createdAt: Date.now(),
//     list: 'default',
//     ...partialContact,
//   };
// };

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName замість firstName і lastName.
*/

// const transformUsername = function ({ firstName, lastName, ...otherProps }) {
//   //   const { firstName, lastName, ...otherProps } = user;
//   //{fullName: 'Jacob Mercer' }
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };

//   return {
//     fullName: `${user.firstName} ${user.lastName}`,
//     id: user.id,
//     email: user.email,
//     friendCount: user.friendCount,
//   };
// };

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );
