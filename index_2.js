"use strict";
/*
 * Методи об'єкта і це при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

const filmDuna = {
  title: "Duna",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?",
  rating: 10,
  actors: [
    "Rosetta Pena",
    "Clayton Crawford",
    "Larry Norton",
    "Georgia Garrett",
    "Jackson Ballard",
  ],
  newFilm: {
    title: "Mango",
    updadeNewFilm(title) {
      console.log(" in new film", this);
      this.actors = ["Hello"];
      this.title = "World";
      return this.actors;
    },
  },
  adult: false,

  getTitle() {
    // console.log(filmDuna.title);💩
    return this.title;
  },

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    this.actors.push(newActor);
  },

  updateRating(newRating = 1) {
    this.rating = newRating;
  },

  updateAdult() {
    this.adult = !this.adult;
  },

  isAdult() {
    return this.adult;
  },
  myObj() {
    return this;
  },
};

// filmDuna.changeTitle("Matrix");
// filmDuna.addActor("Eddie");
// filmDuna.updateRating(8);
// console.log(filmDuna.isAdult());
// console.log(filmDuna.actors);

// function addActors(newActor) {
//   filmDuna.actors.push(newActor);
// }

// addActors("Obivan");

// filmDuna.addActor('Obivan');
// console.log(filmDuna.actors);
// // console.log(filmDuna.getTitle());
// // console.log(filmDuna.title);
// filmDuna.changeTitle('Stars wors');
// console.log(filmDuna.getTitle());
// filmDuna.updateRating(50);
// console.log(filmDuna.rating);
// filmDuna.updateAdult();
// filmDuna.updateAdult();
// console.log(" filmDuna isAdult", );
// console.log(filmDuna.newFilm.updadeNewFilm("Matrix"));
// console.log(filmDuna.newFilm);
// console.log(filmDuna.myObj());
