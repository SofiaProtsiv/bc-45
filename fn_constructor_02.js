//? 📌❗️🤓  Функція конструктор створює шаблон
//? за яким будуть створені однотипні об'єкти

//TODO:  Створюємо людину за образом

function CreateUser({
  firstName,
  lastName,
  age,
  hairColor,
  eyesColor,
  gender,
}) {
  // console.log(this); // екземпляр, об'єкт

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;
  this.gender = gender;

  // this.getFullName = function () {
  //   return `${this.firstName} ${this.lastName}`;
  // }; //попаде на екземпляр

  // this.changeHairColor = function (newColor) {
  //   this.hairColor = newColor;
  // }; //попаде на екземпляр
}

CreateUser.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}; //попаде у прототип

CreateUser.prototype.changeHairColor = function (newColor) {
  this.hairColor = newColor;
}; //попаде у прототип

const user = new CreateUser({
  firstName: "Jeff",
  lastName: "Tucker",
  age: 30,
  hairColor: "brown",
  eyesColor: "brown",
  gender: "male",
  hobby: "dance",
});

const user2 = new CreateUser({
  firstName: "Jean",
  lastName: "Smith",
  age: 40,
  hairColor: "pink",
  eyesColor: "blue",
  gender: "female",
});

user.hobby = "dance";
user.__proto__.getHooby = function () {
  return this.hobby;
};

// console.log(user);
// console.log(user2);

// console.log(CreateUser.prototype === user.__proto__);
// console.log(CreateUser.prototype);

// console.log(user.__proto__);
// console.log(user2.__proto__);
// console.log(user.__proto__ === user2.__proto__);

// console.log(user2.getFullName());
// user.changeHairColor('black');
