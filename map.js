/*
 *  Метод map()
 */

// array.map((element, index, array) => {
// //  Тіло колббек-функції
// });

//? Помножте всі числа на 2
// const numbers = [1, 2, 3, 4, 5];

// const newArr = [];
// numbers.forEach((number) => newArr.push(number * 2));
// console.log(newArr);

// const result = numbers.map((number) =>
//   document
//     .querySelector("body")
//     .insertAdjacentHTML("beforeend", `<li>${number * 2}</li>`)
// );

// console.log("result", result, result.length);

// console.log("numbers.length", numbers, numbers.length);

// // const result = numbers.map((el, idx, arr) => el * 2);

// // console.log('result length', result.length);
// console.log('result', result);
// // console.log('numbers', numbers);
// console.log('numbers: ', numbers);
// // console.log('result: ', result);

/*
?Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, 
? що містить довжини рядків:
*/

// const wordsArr = ["Існує", "життя", "на", "Марсі"];

// // const getElementsLength = wordsArr.map((word) => word.length);

// const getElementsLength = wordsArr.map((word) => {
//   return word.length;
// });

// console.log(getElementsLength);

// const getElementsLength = function (arrOfStr) {
//   //   const strLengthesArr = arrOfStr.map((el) => el.length);
//   //   return strLengthesArr;

//   return arrOfStr.map((el) => el.length);
// };

// const getElementsLength = (arrOfStr) => {
//   //   const strLengthesArr = arrOfStr.map((el) => el.length);
//   //   return strLengthesArr;

//   return arrOfStr.map((el) => el.length);
// };

// const getElementsLength = (arrOfStr) => arrOfStr.map((el) => el.length);

// console.log(getElementsLength(wordsArr)); // [5, 5, 2, 5]

/*
? Створення масиву значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. 
? F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

// const farenheits = celsius.map((item) => item * 1.8 + 32);

// console.log(celsius);
// console.log(farenheits);

/*
? Нехай функція getModels повертає масив моделей 
? (поле моделі) всіх автомобілів.
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

// const createMarkup = (cars) => {
//   const getModels = cars
//     .map(({ model, price, amount }) => {
//       return `<ul>
//     <li>${model}</li>
//     <li>${price}</li>
//     <li>${amount}</li>
//     </ul>`;
//     })
//     .join("");

//   document.querySelector("body").insertAdjacentHTML("beforeend", getModels);
// };
// createMarkup(cars);

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/

// const makeCarsWithDiscount = (vehicles, discount) => {
//   const vehiclesWithDiscount = vehicles.map((car) => {
//     // console.log(car.price);
//     // console.log(car.price * (1 - discount));
//     // console.log(car.price - car.price * discount);
//     //   console.log('-------------');
//     return {
//       ...car,
//       price: car.price * (1 - discount),
//     };
//   });
//   return vehiclesWithDiscount;
// };

// const makeCarsWithDiscount = (vehicles, discount) => {
//   return vehicles.map((car) => {
//     return {
//       ...car,
//       price: car.price * (1 - discount),
//     };
//   });
// };

// const makeCarsWithDiscount = (vehicles, discount) => {
//   return vehicles.map((car) => ({
//     ...car,
//     price: (car.price * (1 - discount)).toFixed(2),
//   }));
// };
// const makeCarsWithDiscount = (cars, discount) => {
//   const carsWidthDiscount = cars.map((el, idx, arr) => {
//     el.price = Number((el.price - el.price * discount).toFixed(2));

//     return el;
//   });

//   return carsWidthDiscount;
// };

// // console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// console.table(makeCarsWithDiscount(cars, 0.9));

const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

// const courses = students.map(({ courses }) => courses);
// const courses = students.flatMap(({ courses }) => courses);
// console.log([...new Set(courses)]);
