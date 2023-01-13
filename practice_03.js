// TODO 1

/*
//? Створіть об'єкт `calculator` з трьома методами:
//? - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
//? - `add()` - повертає суму збережених значень.
//? - `mult()` - перемножує збережені значення та повертає результат.
*/

// const calculator = {
//   read(a = 0, b = 0) {
//     this.number1 = a;
//     this.number2 = b;

//     console.log(this);
//   },
//   sum() {
//     // return this.number1 && this.number2 ? this.number1 + this.number2 : "Error";
//     return this.number1 + this.number2;
//   },
//   mult() {
//     // return this.number1 && this.number2 ? this.number1 * this.number2 : "Error";
//     return this.number1 * this.number2;
//   },
// };

// calculator.read(4, 8);
// console.log(calculator.sum());
// console.log(calculator.mult());

// TODO 2 Корзина товарів

/*
// - getItems() - отримати корзину товарів, усі товари
// - add(product) - додати у корзину об'єкт продукта
// - remove(productName) - повністю видалити продукт під назвою productName
// - clear() - повністю очистити корзину товарів
// - countTotalPrice() - порахувати суму замовлення
// - increaseQuantity(productName) - збільшити кількість продукта під назвою
//   productName
// - decreaseQuantity(productName) - зменшити кількість продукта під назвою
//   productName
*/

const apple = { name: "🍎", price: 50 };
const grape = { name: "🍇", price: 70 };
const lemon = { name: "🍋", price: 60 };
const strawberry = { name: "🍓", price: 110 };

const basket = {
  items: [],

  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    this.items = this.items.filter(({ name }) => name !== productName);
  },
  clear() {
    this.items = [];
    return this.items;
  },
  countTotalPrice() {
    return this.items.reduce((total, { price }) => (total += price), 0);
  },
  increaseQuantity(productName) {
    const product = this.items.find(({ name }) => name === productName);
    this.items.push(product);
  },
  decreaseQuantity(productName) {
    const product = this.items.find(({ name }) => name === productName);
    const index = this.items.findIndex((item) => product === item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  },
};

// console.table(basket.getItems());

basket.add(apple);
basket.add(apple);
basket.add(apple);
basket.add(grape);
basket.add(grape);
basket.add(lemon);
basket.add(strawberry);
basket.add(strawberry);

console.table(basket.getItems());

// basket.remove("🍎");
// console.table(basket.getItems());

// console.log(basket.clear());
// console.table(basket.getItems());

// console.log(basket.countTotalPrice());
// basket.add(apple);
// basket.increaseQuantity("🍎");

basket.decreaseQuantity("🍇");
basket.decreaseQuantity("🍇");
basket.decreaseQuantity("🍇");
basket.decreaseQuantity("🍇");
basket.decreaseQuantity("🍇");
console.table(basket.getItems());
