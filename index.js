"use strict";

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
];

// 📌❗️🤓 Поверхневе та глибоке копіювання, як копіюються складні та примітивні типи даних

///////////////////////////////// ---поверхневе копіювання--- /////////////////////////////////

// const newUsers = [...users]; // поверхневе копіювання
// const newUsers = [].concat(users); // поверхневе копіювання
// const newUsers = users.slice(); // поверхневе копіювання

// newUsers[1].name = "newName";
// newUsers[1].friends.push("newFriend");
// console.log(newUsers[0] === users[0]); //true
// console.log(newUsers === users); //false

///////////////////////////////// ---глибоке копіювання--- /////////////////////////////////

// const newUsers = JSON.parse(JSON.stringify(users)); // глибоке копіювання
// const newUsers = structuredClone(users); // глибоке копіювання

// newUsers[1].name = "newName";
// newUsers[1].friends.push("newFriend");

// console.log(users);
// console.log(newUsers);

// console.log(newUsers[0] === users[0]); //false
// console.log(newUsers === users); //false

// 📌❗️🤓 reduce
// function sum() {
//   return numbers.reduce((total, number) => {
//     total += number;
//     return total;
//   }, 0);
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

// 📌❗️🤓 hidden, querySelectorAll, style, textContent
// const ulChildren = document.querySelectorAll("li");

// console.dir(ulChildren[1]);
// ulChildren.forEach((li, index) => {
//   li.textContent = index + 1;

//   li.style["font-size"] = "30px";
//   li.style.fontSize = "30px";

//   if (index % 2 === 0) {
//     li.hidden = !li.hidden;
//   }
// });

// 📌❗️🤓 Стек виклику функцій
// console.log("Start");

// function createMarkup(array) {
//   array.forEach((li, index) => {
//     li.textContent = index + 1;

//     li.style["font-size"] = "30px";
//     li.style.fontSize = "30px";

//     if (index % 2 === 0) {
//       li.hidden = !li.hidden;
//     }
//   });
// }

// function renderCards() {
//   createMarkup(ulChildren);
//   showMessage("Success");
// }

// function showMessage(message) {
//   console.log(message);
// }

// renderCards();

// console.log("Finish");

// 📌❗️🤓 Деструктиризація
// const refs = {
//   ulEl: document.querySelector("ul"),
//   liEl: document.querySelectorAll("li"),
// };

// 1
// const { ulEl, liEl } = refs;

// 2
// function showUser(user) {
//   const{ name, isActive } = user;
//   console.log(name, isActive);
// }
// showUser(users[1]);

// 3
// function showUser({ name, isActive }) {
//   console.log(name, isActive);
// }

// showUser(users[1]);

// 📌❗️🤓 Умовний рендеринг
// const markup = users
//   .map(({ name, isActive }) => {
//     return `<li class=${isActive ? "active" : "inactive"}>${name}</li>`;
//   })
//   .join("");

// ulEl.insertAdjacentHTML("beforebegin", markup);

// 📌❗️🤓 Menu
// const menu = document.querySelector("ul");
// const liList = document.querySelectorAll("li");

// liList.forEach((li) => {
//   const span = document.createElement("span");
//   li.prepend(span);
//   span.append(span.nextSibling);
// });

// function handleOpenMenu(event) {
//   if (event.target.nodeName === "SPAN") {
//     const subMenu = event.target.nextElementSibling;
//     if (subMenu) {
//       subMenu.hidden = !subMenu.hidden;
//     }
//   }

//   //   if (event.target.nodeName === "LI") {
//   //     const subMenu = event.target.children[0];
//   //     if (subMenu) {
//   //       subMenu.hidden = !subMenu.hidden;
//   //     }
//   //   }
// }

// menu.addEventListener("click", handleOpenMenu);

// 📌❗️🤓 call apply bind

// const user = {
//   username: "Sofia",
// };
// function showMessage() {
//   console.log(this);
// }

// const newShowMessage = showMessage.bind(user);

// newShowMessage();

// const newFn = () => console.log(this);
// newFn();

// 📌❗️🤓 call apply bind function and obj methods

// const directRoute = function (to = "Chop") {
//   console.log(`${this.from} => ${to}`);
// };

// const train1 = {
//   from: "Kyiv",
//   directRoute,
// };
// const train2 = {
//   from: "Lviv",
//   directRoute,
// };

// directRoute.apply(train1, ["Vinnytsia"]);
// directRoute.call(train1);

// train2.directRoute();
// train1.directRoute.call(train2, "Odessa");

// const yourDirectRoute = directRoute.bind(train1);
// yourDirectRoute();
// yourDirectRoute("Kharkiv");

// const theirDirectRoute = directRoute.bind(train2, "Poltava");
// theirDirectRoute();
// theirDirectRoute("Cherkasy");
// theirDirectRoute.call(train1);

// const anotherDirectRoute = train1.directRoute;
// console.log(anotherDirectRoute());

// const directRoute = function (to = "Chop") {
//   console.log(`${this.from} => ${to}`);
// };

// const train1 = {
//   from: "Kyiv",
//   directRoute,
// };

// document.addEventListener("click", train1.directRoute.bind(train1, "Lviv"));
