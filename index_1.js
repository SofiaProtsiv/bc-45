"use strict";
/*
 * Грязні і чисті функції
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// console.log(numbers);
// dirtyMultiply(numbers, 5);
// console.log(numbers);

// const pushNumbers = (...args) => {
//   //   console.log(args);
//   //   console.log(...args);

//   const newArr = [...numbers];

//   newArr.push(...args);
//   console.log(newArr);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (numbersArr, ...args) => {
//   const copyNumbersArr = [...numbersArr];
//   // console.log('copyNumbersArr', copyNumbersArr);
//   //   console.log('numbers', numbers);
//   console.log(numbers === copyNumbersArr);
//   copyNumbersArr.push(...args);

//   return copyNumbersArr;
// };
// // console.log(numbers);
// const changedNumbers = pushNumbers(numbers, 9, 6, 8);

// console.log("numbers: ", numbers);
// console.log("copy of numbers: ", changedNumbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (newArr) {
//   // const newCopy = newArr.slice();
//   // const newCopy = [...newArr];
//   const newCopy = [].concat(newArr);

//   console.log(newArr === newCopy);

//   for (let i = 0; i < newCopy.length; i += 1) {
//     newCopy[i] *= 2;
//   }

//   console.log(newCopy);
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   const numbersCopyArr = [...arr];

//   for (let i = 0; i < numbersCopyArr.length; i += 1) {
//     numbersCopyArr[i] *= 2;
//   }

//   return numbersCopyArr;
// };

// const result = doubleMulti(numbers);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', result);
