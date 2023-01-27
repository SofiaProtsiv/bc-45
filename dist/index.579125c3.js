// ❗️📌🤓 методи функцій
// function name(phare = "default") {
//     console.log(phare, this)
// }
// const obj = {
//     name: "sofia",
//     log() {
//         console.log(this);
//     }
// }
// const obj2 = {
//     name: "petro"
// }
// name.apply(obj, ["hello"])
// name.call(obj2, "hello")
// const bindFn = name.bind(obj, "hello");
// name()
// bindFn()
// document.addEventListener("click", name)
// ❗️📌🤓 як діставати дані з форми, як їх записувати в об'єкт, робота з локал сторедж
const form = document.querySelector("#save-later-form");
const submitBtn = document.querySelector("#submit");
getSavedFormdata();
// для варіанту 2/3
// let formData = {}
// let email = "";
// let name = "";
function handleInput(event) {
    event.preventDefault();
    //1
    let data = {};
    const formData = new FormData(event.currentTarget);
    for (const [key, value] of formData)data[key] = value;
    localStorage.setItem("formData", JSON.stringify(data));
//2
// formData = {
//     ...data,
//     [event.target.name]: event.target.value
// }
// 3
// if (event.target.name === "email") {
//     email = event.target.value
// }
// if (event.target.name === "full-name") {
//     name = event.target.value
// }
// data = { email, name }
}
function getSavedFormdata() {
    const savedData = JSON.parse(localStorage.getItem("formData")) || {};
    for (const element of form.elements)if (savedData[element.name]) element.value = savedData[element.name];
}
function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("formData");
    form.reset();
}
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit) // ❗️📌🤓 приклад роботи з бібліотекою simplelightbox
 // import SimpleLightbox from "simplelightbox";
 // import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
 // const markup = array.map(({url, alt}) => {
 //     return `<a href=${url}><img src=${url} alt=${alt}/></a>`
 // }).join("")
 // document.querySelector("gallery").insertAdjacentHTML("beforeend", markup)
 // const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250});
;

//# sourceMappingURL=index.579125c3.js.map
