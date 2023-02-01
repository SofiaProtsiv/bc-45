// import { fetchNewsByKeyword, fetchNewsBySort, fetchNewsByPageSize, fetchNewsByCountry } from './news-api';

// import { createNewsCardMarkup } from '../templates/createNewsCardMarkup';
// import { createNewsCardInProgress } from '../templates/createNewsCardInProgress';

// const inputField = document.querySelector('.search-bar');
// const searchBtn = document.querySelector('#search_btn');
// const content = document.querySelector('.news-container');

// const state = {
//     query: "", pageSize: 10, sortBy: "publishedAt", page: 1, status: "pending"
// }

// if (state.status === "pending") {
//     for (let i = 0; i < 10; i++) {
//         content.insertAdjacentHTML("beforeend", createNewsCardInProgress())

//     }
// }
// fetchNewsByCountry(state).then(({ articles }) => {
//     setTimeout(() => {
//         state.status = "fulfilled"
//         const markup = articles.map(article => createNewsCardMarkup(article)).join("")
//         content.innerHTML = markup
//     }, 1000);
// })

// function handleInput() {
//     state.query = inputField.value.trim()
//     if (state.query === "") {
//         return
//     }
//     fetchNewsByKeyword(state).then(({ articles }) => {
//         const markup = articles.map(article => createNewsCardMarkup(article)).join("")
//         content.innerHTML = markup
//     })
// }

// searchBtn.addEventListener('click', handleInput);

// inputField.addEventListener('keyup', e => {
//     if (e.key === "Enter") {
//         handleInput()
//     }
// });