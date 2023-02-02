import * as catsAPI from './pets-api';


const list = document.querySelector("ul")
const input = document.querySelector("input")


catsAPI.getCats().then(res => {
    const markup = res.map(({ url, id }) => {
        return ` <img src="${url}" width='200px" height="300px" alt="cat" id="${id}" />`
    }).join("")

    list.innerHTML = markup;
})


function handleClick(event) {
    const id = event.target.id;

    catsAPI.getCatById(id).then(res => console.log(res))
    catsAPI.deleteCat(id);
    event.target.remove()
}


list.addEventListener("click", handleClick)

input.addEventListener("change", (event) => {
    const image = event.currentTarget.files[0];
    catsAPI.uploadImage(image).then(res => console.log(res))
})
