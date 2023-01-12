/*
 *  Метод reduce()
 */

// масив.reduce((previousValue, element, index, array) => {
// // Тіло колббек-функції
// }, []);

/*
? Порахуємо суму масиву чисел
*/

const numbers = [1, 2, 3, 4, 5];

// let total = 0;
// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// const sum = (arr) => {
//   //   return arr.reduce((obj, number) => {
//   //     obj[number] ? (obj[number] += 1) : (obj[number] = 1);
//   //     return obj;
//   //   }, {});

//   //   return arr.reduce((newArr, item) => {
//   //     // if (item % 2 === 0) {
//   //     //   newArr.push(item * 5);
//   //     // }

//   //     return newArr;
//   //   }, []);

// //   return arr.reduce((total, number) => total + number, 0);
// };
// console.log(sum([1, 2, 1, 4, 4, 4, 2, 3, 4, 5]));
// console.log(sum(numbers));
// console.log(numbers);

// 1 ітерація
// prevValue = 0; el = 1; idx = 0;
// prevValue = 1;

// 2 ітерація
// prevValue = 1; el = 2; idx = 1;
// prevValue = 3;

// 3 ітерація
// prevValue = 3; el = 3; idx = 2;
// prevValue = 6;

// 4 ітерація
// prevValue = 6; el = 4; idx = 3;
// prevValue = 10;

// 5 ітерація
// prevValue = 10; el = 5; idx = 4;
// prevValue = 15;

// let totalSum = numbers.reduce((acc, el, idx, arr) => {
//   //   return prevValue + el;
//   return acc + el;
// }, 0);

// console.log(totalSum);

// const numbers = [1, 2, 3, 4, 5];

// 1 ітерація
// prevValue = 0; el = 1; idx = 0;
// prevValue = 1;

// 2 ітерація
// prevValue = 1; el = 2; idx = 1;
// prevValue = 3;

// 3 ітерація
// prevValue = 3; el = 3; idx = 2;
// prevValue = 6;

// 4 ітерація
// prevValue = 6; el = 4; idx = 3;
// prevValue = 10;

// 5 ітерація
// prevValue = 10; el = 5; idx = 4;
// prevValue = 15;

// let totalSum = numbers.reduce((prevValue, el, idx, arr) => {
//   return prevValue + el;
// }, 0);

// console.log(totalSum);
/*
? Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
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

// const getTotalAmount = (cars) => {
//   return cars.reduce((acc, car) => {
//     return acc + car.amount;
//   }, 0);
// };

// const getTotalAmount = (cars) => {
//   return cars.reduce((acc, car) => acc + car.amount, 0);
// };

// const getTotalAmount = cars => {
//   return cars.reduce((prevValue, el, idx, arr) => {
//     return prevValue + el.amount;
//   }, 0);
// };

// console.log(getTotalAmount(cars));

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets
//   .reduce((acc, tweet) => {
//     return [...acc, ...tweet.tags];
//   }, [])
//   .filter((element, index, array) => array.indexOf(element) === index);

// console.log(tags);
