import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from '../templates/createGalleryCards';

import { UnsplashAPI } from './unsplash-api';

const refs = {
    form: document.querySelector('.js-search-form'),
    list: document.querySelector('.js-gallery')
};

const { form, list } = refs;

const unsplashApi = new UnsplashAPI();

const handleSubmit = event => {
    event.preventDefault();

    const { query } = event.currentTarget.elements;
    unsplashApi.query = query.value.trim()

    if (unsplashApi.query === "") {
        Notify.warning("Enter some data!")
        return;
    }

    list.innerHTML = "";
    unsplashApi.page = 1;

    scrollAndLoadMore()
};

const scrollAndLoadMore = async () => {
    try {
        const { results, total_pages } = await unsplashApi.getImages();

        if (!results) {
            Notify.warning("Sorry no images were found");
            query.value = ""
            return;
        }

        list.insertAdjacentHTML("beforeend", createGalleryCards(results))

        if (total_pages <= unsplashApi.page) {
            Notify.warning("The end!");
            return;
        }

        // const lastChild = list.querySelector(".gallery__item:last-child")
        const lastChild = list.lastElementChild;
        if (lastChild) {
            infiniteScroll.observe(lastChild)
            unsplashApi.updatePage();
        }

    } catch (error) {
        Notify.failure(error.message);
    }
};

const infiniteScroll = new IntersectionObserver(([entry], obsorver) => {
    if (entry.isIntersecting) {
        obsorver.unobserve(entry.target);
        scrollAndLoadMore();
    }
}, { threshold: 0.8 })

form.addEventListener('submit', handleSubmit);