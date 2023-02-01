import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createMealCards } from '../templates/createMealCards';

import { FoodServiseApi } from './foodservise-api';

const refs = {
    form: document.querySelector('.js-search-form'),
    list: document.querySelector('.meals'),
    loadMoreBtn: document.querySelector('.js-load-more'),
};

const { form, list, loadMoreBtn } = refs;

const foodServiseApi = new FoodServiseApi();

const handleSubmit = event => {
    event.preventDefault();

    const { query } = event.currentTarget.elements;
    foodServiseApi.query = query.value.trim();

    if (foodServiseApi.query === "") {
        Notify.warning("Enter some data!")
        return;
    }

    list.innerHTML = ""
    foodServiseApi.page = 1;

    Notify.info("Loading");

    setTimeout(() => {
        foodServiseApi.getMealByName().then(({ meals }) => {
            if (!meals) {
                Notify.warning("Sorry no meals were found");
                query.value = ""
                return
            }

            foodServiseApi.items = meals;
            const chunkOfMeals = foodServiseApi.chunkOfItems()

            list.insertAdjacentHTML("beforeend", createMealCards(chunkOfMeals))

            if (foodServiseApi.totalPages !== 1 && foodServiseApi.page === 1) {
                loadMoreBtn.classList.remove("is-hidden")
            }
        })
    }, 1000)
};

const handleClickLoadMore = () => {
    foodServiseApi.updadePage();
    loadMoreBtn.textContent = "Loading"

    setTimeout(() => {
        foodServiseApi.getMealByName().then(({ meals }) => {
            if (foodServiseApi.totalPages <= foodServiseApi.page) {
                loadMoreBtn.classList.add("is-hidden")
                Notify.warning("The end!");
                return;
            }

            loadMoreBtn.textContent = "LOAD MORE"
            foodServiseApi.items = meals;
            const chunkOfMeals = foodServiseApi.chunkOfItems()

            list.insertAdjacentHTML("beforeend", createMealCards(chunkOfMeals))

        })
    }, 1000)
};

loadMoreBtn.addEventListener('click', handleClickLoadMore);
form.addEventListener('submit', handleSubmit);


window.addEventListener("load", () => {
    foodServiseApi.getRandomMeals().then(res => {

        res.map(({ meals }) => {
            const markup = `<li class="meal__card" id="${meals[0].idMeal}">
        <img class="meal__pic" src="${meals[0].strMealThumb}" alt="${meals[0].strMeal}" />
        <p class="meal__desc">${meals[0].strMeal}</p>
        </div>
      </li>`

            list.insertAdjacentHTML("beforeend", markup)
        })
    })

})