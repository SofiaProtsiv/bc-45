'use strict';
/*
 * Успадкування з extends та super
 */

class User {
  #login;
  #email;

  constructor({ firstName = 'some name', lastName, age, login, email } = {}) {
    // this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
  }

  #trimStr(str) {
    return str.trim();
  }
}

// const user = new User({
//   firstName: 'Mable',
//   lastName: 'Cohen',
//   age: 30,
//   login: 'testLogin',
//   email: 'weni@owva.ai',
// });

// console.log(user);

class Developer extends User {
  constructor({ completedProjects, lastName, age, login, email }) {
    super({ lastName, age, login, email });
    this.completedProjects = completedProjects;
  }
  // constructor({ completedProjects, ...otherProps }) {
  //   super({ ...otherProps });
  //   this.completedProjects = completedProjects;
  // }

  doDeveloperWork() {
    console.log('Вивчаю prototype і пишу проекти!');
  }
}

const mangoDeveloper = new Developer({
  completedProjects: 45,
  firstName: 'Bertha',
  lastName: 'Byrd',
  age: 22,
  login: 'myLogin',
  email: 'tudeoh@ede.fm',
});
console.log(mangoDeveloper);
// mangoDeveloper.doDeveloperWork();

class Manager extends User {
  constructor({ numberOfSales, ...otherProps }) {
    super({ ...otherProps });
    this.numberOfSales = numberOfSales;
  }

  doManagerwork() {
    console.log('Продаю застосунки які написав developer!');
  }
}

const manager = new Manager({
  firstName: 'Addie',
  lastName: 'Burgess',
  age: 20,
  login: 'someLogin',
  email: 'uhmop@balninih.sd',
  numberOfSales: 20,
});
// console.log(manager);
manager.doManagerwork();

// manager = {
//   firstName: 'Addie',
//   lastName: 'Burgess',
//   age: 20,
//   login: 'someLogin',
//   email: 'uhmop@balninih.sd',
//   numberOfSales: 20,

//   getFullName() {},

//   doManagerWork() {}
// };

// developer = {
//   firstName: 'Bertha',
//   lastName: 'Byrd',
//   age: 22,
//   login: 'myLogin',
//   email: 'tudeoh@ede.fm',
//   completedProjects: 45,

//   getFullName() {},

//   doDeveloperWork() {}
// };