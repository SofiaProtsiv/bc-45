"use strict";

const logFunction = function ({
  firstName,
  lastName,
  age,
  gender,
  userEmail: mail = "unknown",
  userPhoneNumber: number,
}) {
  // console.log(userInfo);
  // console.log(userInfo.age, userInfo.firstName);
  const {
    firstName,
    lastName,
    age,
    gender,
    userEmail: mail = "unknown",
    // userPhoneNumber,
  } = userInfo;
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(gender);
  console.log(mail);
  console.log(number);
  // // const { firstName, lastName, age, gender, userEmail, userPhoneNumber } =
  //   userInfo;
  // console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
};

logFunction({
  firstName: "Amelia",
  lastName: "Burgess",
  age: 30,
  gender: "female",
  userEmail: "apjez@eh.aq",
  userPhoneNumber: "(096) 35-21-476",
});

// const user = {
//   firstName: "Amelia",
//   lastName: "Burgess",
//   age: 30,
//   gender: "female",
//   // userEmail: 'apjez@eh.aq',
//   // userPhoneNumber: '(096) 35-21-476',
// }
// logFunction(user);
