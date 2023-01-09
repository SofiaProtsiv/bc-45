"use strict";

/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає поле mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

// user.mood = 'happy';
user["mood"] = "happy";

// user.hobby = 'skydiving';
user["hobby"] = "skydiving";
// user.premium = false;
user.premium = !user.premium;

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//   // console.log(user[key]);
//   console.log(`${key}: ${user[key]}`);
// }
// console.log(user);

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди.
? Напишіть метод об'єкта для підсумовування всіх зарплат та збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// const salariesValues = Object.values(salaries);
// console.log(salariesValues);
// let total = 0;

// for (const value of salariesValues) {
//   console.log(value);
//   total += value;
// }

// console.log(total);

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

const stones = [
  { name: "Ізумруд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

const calcTotalPrice = function (stones, stoneName) {
  for (const { name, price, quantity } of stones) {
    if (name === stoneName) {
      return price * quantity;
    }
  }
  return "Такого камня не знайдено!";
};
// console.log(calcTotalPrice(stones, 'Діамант'));

/*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзацький лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт з властивостями: id, type та amount
*/

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Початковий ID для транзакції
  startId: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    // return {
    //   amount: amount,
    //   type: type,
    //   id: this.generateId(),
    // };
    return {
      amount,
      type,
      id: this.generateId(),
    };
  },

  // Генерація id для транзакції
  generateId() {
    return (this.startId += 1);
  },

  /*
   * Метод, який відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const depositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );

    this.transactions.push(depositTransaction);
    this.balance += amount;
  },

  /*
   * Метод, який відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * Після чого додає його в історію транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert(`Зняття такої суми неможливо, ви можете зняти ${this.balance}`);
      return;
    }
    const withdrawTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );
    this.transactions.push(withdrawTransaction);
    this.balance -= amount;
  },

  /*
   *Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзації по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
    return `Операції з id ${id} не знайдено!`;
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(typeOperation) {
    let sum = 0;
    for (const { type, amount } of this.transactions) {
      if (typeOperation === type) {
        sum += amount;
      }
    }
    return `Операцій по ${typeOperation} було здійснено на суму ${sum}`;
  },
};

account.deposit(200);
account.deposit(300);
account.deposit(500);
account.deposit(1500);
account.deposit(2500);
account.withdraw(700);
account.withdraw(200);

console.log("Balance", account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionDetails(10));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
