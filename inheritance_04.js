"use strict";
/*
 * Успадкування з extends та super
 */

class User {
  #login;
  #email;

  constructor({ firstName = "some name", lastName, age, login, email } = {}) {
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

const user = new User({
  firstName: "Mable",
  lastName: "Cohen",
  age: 30,
  login: "testLogin",
  email: "weni@owva.ai",
});

console.log(user);

class Developer extends User {
  // variant 1
  constructor({ firstName, lastName, age, login, email, completedProjects }) {
    super({ firstName, lastName, age, login, email });
this,firstName= 
    this.completedProjects = completedProjects;
  }

  // variant 2
  constructor({ completedProjects, ...properties }) {
    super({ ...properties });

    this.completedProjects = completedProjects;
  }
  doDeveloperWork() {
    return this.completedProjects;
  }
}

const developer = new Developer({
  completedProjects: 45,
  firstName: "Bertha",
  lastName: "Byrd",
  age: 22,
  login: "myLogin",
  email: "tudeoh@ede.fm",
});
console.log(developer);

class Manager extends User {
  constructor({ numberOfSales, ...otherProps }) {
    super({ ...otherProps });
    this.numberOfSales = numberOfSales;
  }

  doManagerwork() {
    console.log("Продаю застосунки які написав developer!");
  }
}

const manager = new Manager({
  firstName: "Addie",
  lastName: "Burgess",
  age: 20,
  login: "someLogin",
  email: "uhmop@balninih.sd",
  numberOfSales: 20,
});
console.log(manager);

