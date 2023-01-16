"use strict";

/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */

/*
 * Клас - шаблон за яким будуть створені однотипні об'єкти
 * Примірник/екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

/*
 * Властивості класу доступні на екземплярах
 * Методи класу доступні на екземплярах
 * Приватні властивості доступні всередині класу, 
   отримати доступ до них можна за допомогою методів класу
 * Приватні методи доступні лише в медодах класа
 * Статичні властивості доступлі лише на сaмому класі
 * Статичні методи доступні лише на самому класі
 * Статичні приватні властивості доступні на сaмому класі, всередині класу
 * Статичні приватні методи доступні на сaмому класі, всередині класу
 */

class CreateUser {
  static pablicEmails = ["pablic@mail.com"];
  static #takenEmails = ["taken@mail.com"];
  static isEmailTaken(email) {
    // console.log(CreateUser.#takenEmails);
    // console.log(this.#checkEmail('asdf'));💩
    return CreateUser.#takenEmails.includes(email);
  }
  #email;
  constructor({
    firstName,
    lastName,
    age,
    hairColor,
    eyesColor,
    gender,
    email,
  }) {
    this.firstName = firstName;

    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.gender = gender;
    this.#email = email;
  }

  // getEmail() {
  //   return this.#email;
  // }

  getTakenEmails() {
    console.log(CreateUser.#takenEmails);
  }

  get qwe() {
    return this.gender;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    const includesGmail = this.#checkEmail(newEmail);
    console.log(CreateUser.isEmailTaken(newEmail));
    if (includesGmail) {
      this.#email = newEmail;
    }
  }

  #checkEmail(newEmail) {
    return newEmail.includes("@gmail");
  }

  changeEmail(newEmail) {
    const includesGmail = this.#checkEmail(newEmail);
    console.log(includesGmail);
    this.#email = newEmail;
  }
}
