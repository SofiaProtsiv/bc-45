import Notiflix from "notiflix";

const form = document.querySelector("#save-later-form");
const saveButton = document.querySelector("#save");
const submitButton = document.querySelector("#submit");

const formElements = form.elements;
const formIdentifier = "formData";


const getFormData = () => {
  const data = {};

  for (const { name, value } of formElements) {
    if (name) {
      data[name] = value
    }
  }

  return data
};

const handleSudmit = (event) => {
  event.preventDefault()

  form.reset()
  localStorage.removeItem(formIdentifier)

  const message = "The form has been successfully submitted";
  Notiflix.Notify.success(message);
};

const handleSave = (event) => {
  let data = getFormData();

  localStorage.setItem(formIdentifier, JSON.stringify(data))

  const message = "Form draft has been saved!";
  Notiflix.Notify.success(message);
};

const getSavedFormData = () => {
  try {
    const saveData = JSON.parse(localStorage.getItem(formIdentifier))

    for (const element of formElements) {

      // if(saveData[element.name]){}
      if (element.name in saveData) {
        element.value = saveData[element.name]
      }
    }

    const message = "Form has been refilled with saved data!";
    Notiflix.Notify.info(message);
  } catch (error) {
    const message = "Enter data!";
    Notiflix.Notify.warning(message);
  }
};

submitButton.addEventListener("click", handleSudmit);
saveButton.addEventListener("click", handleSave);

getSavedFormData();
