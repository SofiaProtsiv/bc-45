import { fetchNewsByKeyword, fetchNewsBySort, fetchNewsByPageSize } from './news-api';
import { createNewsMarkup } from './createNewsMarkup'

const inputField = document.querySelector('.search-bar');
const searchBtn = document.querySelector('#search_btn');
const content = document.querySelector('.content');
const sortBySelect = document.querySelector("#sortBy")
const pageSizeSelect = document.querySelector("#pageSize")

let query = ""

function handleInput() {
    query = inputField.value.trim()
    if (query === "") {
        return
    }
    fetchNewsByKeyword(query).then(({ articles }) => {
        content.innerHTML = createNewsMarkup(articles)
    })
}

function handleSelect() {
    const sortBy = sortBySelect.value

    fetchNewsBySort(query, sortBy).then(({ articles }) => {
        content.innerHTML = ""
        setTimeout(() => {
            content.innerHTML = createNewsMarkup(articles)
        }, 1000);
    })
}

function handlePageSelect() {
    const pageSize = pageSizeSelect.value;

    fetchNewsByPageSize(query, pageSize).then(({ articles }) => {
        content.innerHTML = ""
        setTimeout(() => {
            content.innerHTML = createNewsMarkup(articles)
        }, 1000);
    })
}

searchBtn.addEventListener('click', handleInput);

inputField.addEventListener('keyup', e => {
    if (e.key === "Enter") {
        handleInput()
    }
});

sortBySelect.addEventListener("change", handleSelect)

pageSizeSelect.addEventListener("change", handlePageSelect)