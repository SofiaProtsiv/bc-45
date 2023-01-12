/*
 *  Метод find()
 */

// array.find((element, index, array) => {
// // Тіло колбек-функції
// });

/*
? Визначте перше непарне число
*/

// const numbers = [2, 6, 13, 8, 9, 10, 12, 13];

// const emails = ["spfia@gmail.com", "mango@gmail.com"];
// const firstOddNumber = numbers.find((number) => number % 2 !== 0);
// const findUserEmail = emails.find((email) => email === "mango@gmail.com");
// console.log(firstOddNumber);
// console.log(findUserEmail);
/*
? Знайдіть автомобіль за моделлю
*/

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const getCarByModel = (array, searchModel) => {
//   const car = array.find(({ model }) => model === searchModel);
//   if (car) {
//     return car;
//   }
//   return "No such car!";
// };

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-"));

// const numbers = [2, 6, 8, 9, 10, 12];
// let index = 0;
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].model === 'Accord') {
//     cars.splice(i, 1);
//   }
// }
// console.log(cars);

// const index = cars.findIndex((car) => {
//   return car.model === 'Accord';
// });

// const index = cars.findIndex(({ model }) => model === 'Accord');

// cars.splice(index, 1);
// console.log(cars);

// const numbers = [2, 6, 8, 9, 10, 12, -2];

// const positiveNumbers = numbers.every((num) => {
//   return num > 0;
// });

// const positiveNumbers = numbers.every((num) => num > 0);
// const positiveNumbers = numbers.some((num) => num < 0);

// console.log(positiveNumbers);
