// let a;
// const b = 2;

// a ??= b;

// if (a === null || a === undefined) {
//   a = b;
// }
// console.log('a', a);

/* ============== Метод map() ============== */
// const ownMap = function (arr, callback) {
//   //   console.log(arr);
//   //   console.log(callback);
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     //   console.log(arr[i]);
//     newArr.push(callback(arr[i], i, arr));
//   }
//   return newArr;
// };

// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = ownMap(planets, (planet) => planet.toUpperCase());

// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = ownMap(planets, (planet) => planet.toLowerCase());

// // const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());

// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// const planetsLength = ownMap(planets, (planet) => planet.length);
// console.log(planetsLength);
// console.log(planets);

/* ============== Метод filter() ============== */
// const ownFilter = function (arr, callback) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log('arr[i] >= 0', arr[i] >= 0);
//     // console.log('callback(arr[i], i, arr)', callback(arr[i], i, arr));
//     // if (arr[i] >= 0) {
//     //   console.log('Пушим даний елемент в новий масив');
//     //   newArr.push(arr[i]);
//     // }
//     //   console.log(callback(arr[i], i, arr));
//     if (callback(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// const values = [51, -3, 27, 100500, 21, 68, -42, -37, 100001];

// const positiveValues = ownFilter(values, (value) => value >= 0);
// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = ownFilter(values, (value) => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = ownFilter(values, (value) => value > 1000);
// console.log(bigValues); // []

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

/* ============== Метод find() ============== */
// const ownFind = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }
//   return undefined;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// console.log(
//   ownFind(colorPickerOptions, (option, index, array) => {
//     // console.log(option);
//     // console.log(index);
//     //   console.log(array);
//     if (option.label === 'blue') {
//       return true;
//     }
//   })
// );

// console.log(ownFind(colorPickerOptions, (option) => option.label === 'blue'));

// console.log(ownFind(colorPickerOptions, (option) => option.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// console.log(ownFind(colorPickerOptions, (option) => option.label === 'white')); // undefined

/* ============== Метод findIndex() ============== */
// const ownFindIndex = function (array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return i;
//     }
//   }
//   return -1;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(
//   ownFindIndex(colorPickerOptions, (option) => option.label === 'blue')
// ); // 2

// console.log(
//   ownFindIndex(colorPickerOptions, (option) => option.label === 'pink')
// ); // 3
// console.log(
//   ownFindIndex(colorPickerOptions, (option) => option.label === 'white')
// ); // -1

/* ============== Метод every() ============== */
// const ownEvery = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!callback(arr[i], i, arr)) {
//       return false;
//     }
//   }
//   return true;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 10 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки якщо всіх фруктів буде більше ніж 0 штук

// console.log(fruits.every((fruit) => fruit.amount > 0));
// const allAvailable = ownEvery(fruits, (fruit) => {
//   return fruit.amount > 0;
// }); // false
// console.log(allAvailable);

/* ============== Метод some() ============== */
// const ownSome = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     //   console.log(callback(arr[i], i, arr));
//     if (callback(arr[i], i, arr)) {
//       return true;
//     }
//   }

//   return false;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

//  some поверне true якщо хоча б одного фрукта буде більше ///// ніж 0 штук
// const anyAvailable = ownSome(fruits, (fruits) => fruits.amount > 0); // true
// console.log(anyAvailable);

/* ============== Метод reduce() ============== */
const ownReduce = function (arr, callback, initialValue = arr[0]) {
  for (let i = 0; i < arr.length; i++) {
    initialValue = callback(initialValue, arr[i], i, arr);
  }
  return initialValue;
};

// const students = [
//   { name: 'Манго', score: 80 },
//   { name: 'Поли', score: 50 },
//   { name: 'Аякс', score: 30 },
//   { name: 'Киви', score: 90 },
//   { name: 'Хьюстон', score: 60 },
// ];

// const totalScore = students.reduce((acc, item) => {
//   console.log(acc);
//   return 15;
// }, 0);
// const totalScore = ownReduce(students, (acc, item) => acc + item.score, 0);
// console.log(totalScore);
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

/*
  Реалізувати фільтр за якістю amount і отримати
  тільки назву моделі
  */

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars
//     .filter((car) => car.amount > amountThreshold)
//     .map((car) => car.model);
// };

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return ownReduce(
//     cars,
//     (acc, car) => {
//       if (car.amount > amountThreshold) {
//         acc.push(car.model);
//       }
//       return acc;
//     },
//     []
//   );
// };
// console.table(getAvailableCarNames(cars, 12));

/*
  Реалізувати фільтр за якістю amount і отримати
  тільки назву моделі за допомогою reduce
  */

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars.reduce((models, { amount, model }) => {
//     // if (car.amount > amountThreshold) {
//     //   // models.push(car.model);
//     //   return [...models, car.model];
//     // }
//     // return models;
//     return amount > amountThreshold ? [...models, model] : models;
//   }, []);
// };
// console.log(getAvailableCarNames(cars, 120));

/*
  Потрібно перевірити "same" масиви
  числа з першого у квадраті дорівнюють числам другого
  */

// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// function comp(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return 'not same!!';
//   }
//   let arr1Sort = [...arr1].sort((a, b) => a - b);
//   let arr2Sort = [...arr2].sort((a, b) => a - b);
//   // let arr1SortSQR = arr1Sort.map((el) => el ** 2);

//   for (let i = 0; i < arr1Sort.length; i++) {
//     if (arr1Sort[i] ** 2 !== arr2Sort[i]) {
//       return 'not same!!';
//     }

//     // if (arr1SortSQR[i] !== arr2Sort[i]) {
//     //   return 'not same!!';
//     // }
//   }
//   return 'same!!';

//   // return arr1Sort.map((v) => v * v).every((v, i) => v === arr2Sort[i]);
// }

// console.log(comp(a, b));

// function comp(array1, array2) {
//   if (!array1 || !array2) return false;
//   const sortArray1 = [...array1].sort((a, b) => a - b);
//   const sortArray2 = [...array2].sort((a, b) => a - b);
//   const sortArray1SQR = sortArray1.map((el) => Math.pow(el, 2));
//   for (let i = 0; i < sortArray1SQR.length; i++) {
//     if (sortArray2[i] !== sortArray1SQR[i]) {
//       return false;
//     }
//   }
//   return true;
//   // return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }
// // console.log(comp(a, b));
