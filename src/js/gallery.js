import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from '../templates/createGalleryCards';

import { UnsplashAPI } from './unsplash-api';

const refs = {
    form: document.querySelector('.js-search-form'),
    list: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('.js-load-more'),
};
const { form, list, loadMoreBtn } = refs;

const unsplashApi = new UnsplashAPI();

const handleSubmit = event => {
    event.preventDefault();

    const { query } = event.currentTarget.elements;
    unsplashApi.searchQuery = query.value.trim()

    if (unsplashApi.searchQuery === "") {
        Notify.warning("Enter some data!")
        return;
    }

    list.innerHTML = "";
    unsplashApi.page = 1;

    unsplashApi.getImages().then(({ results, total_pages }) => {
        if (!results) {
            Notify.warning("Sorry no images were found");
            query.value = ""
            return
        }
        list.insertAdjacentHTML("beforeend", createGalleryCards(results))

        if (total_pages !== 1 && unsplashApi.page === 1)
            loadMoreBtn.classList.remove("is-hidden")
    })
};

const handleClickLoadMore = () => {
    unsplashApi.updadePage();

    unsplashApi.getImages().then(({ results, total_pages }) => {
        if (total_pages <= unsplashApi.page) {
            loadMoreBtn.classList.add("is-hidden")
            Notify.warning("The end!");
            return;
        }
        list.insertAdjacentHTML("beforeend", createGalleryCards(results))
    })
};

loadMoreBtn.addEventListener('click', handleClickLoadMore);
form.addEventListener('submit', handleSubmit);