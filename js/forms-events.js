'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

const formSubmitRef = document.querySelector('.js-contact-form');
const formBtnRef = formSubmitRef.querySelector('.js-contact-form-submit');
const formUserNameRef = formSubmitRef.querySelector('.js-username-input');

const handleSubmit = event => {
  event.preventDefault();

  //variant 1
  // const {
  //   elements: { username, accept },
  // } = event.currentTarget;

  // const formData = {
  //   username: username.value,
  //   accept: accept.value,
  // };

  // console.log(formData);

  //variant 2

  // const formData = [...event.currentTarget.elements].reduce((formData, { name, value }) => {
  //   if (name) {
  //     formData[name] = value;
  //   }
  //   return formData;
  // }, {});

  // console.log(formData);

  // variant 3

  const formData = {};

  for (const [key, value] of new FormData(event.currentTarget)) {
    formData[key] = value;
  }

  console.log(formData);
};

formUserNameRef.addEventListener('input', event => {
  if (event.currentTarget.value.length > 6) {
    event.currentTarget.style.outline = '3px solid yellow';
    return;
  }
  event.currentTarget.style.outline = '3px solid blue';
});

formSubmitRef.addEventListener('submit', handleSubmit);

// formUserNameRef.addEventListener('change', handleChange);

formUserNameRef.addEventListener('focus', event => {
  event.currentTarget.style.outline = '3px solid blue';
});

formUserNameRef.addEventListener('blur', event => {
  const { value } = event.currentTarget;

  if (!value) {
    event.currentTarget.style.outline = '3px solid red';
    return;
  }
  event.currentTarget.style.outline = '3px solid lime';
});
