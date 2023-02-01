export class FoodServiseApi {
    #BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

    #page;
    #query;
    #totalPages;
    #limit;
    #items;

    constructor() {
        this.#items = []
        this.#page = 1;
        this.#query = '';
        this.#totalPages = 0;
        this.#limit = 5;
    }

    getMealByName() {
        return fetch(`${this.#BASE_URL}/search.php?s=${this.query}`)
            .then(res => res.json())
            .catch(error => console.log(error.message))
    }
    getRandomMeals() {
        const promises = [];

        for (let i = 0; i < this.#limit; i++) {
            const promise = fetch(`${this.#BASE_URL}/random.php`)
                .then(res => res.json())

            promises.push(promise)
        }
        return Promise.all(promises)
    }


    chunkOfItems() {
        return [...this.#items].splice(this.#limit * (this.page - 1), this.#limit)
    }

    updadePage() {
        this.#page += 1
    }

    // hasMorePages() {
    //     return this.#totalPages <= this.#page ? true : false
    // }

    get page() {
        return this.#page
    }

    set page(newPage) {
        this.#page = newPage
    }

    get query() {
        return this.#query
    }

    set query(newQuery) {
        this.#query = newQuery
    }

    set items(newItems) {
        this.#items = newItems;
        this.#totalPages = Math.ceil(this.#items.length / this.#limit)
    }
    get totalPages() {
        return this.#totalPages
    }
}