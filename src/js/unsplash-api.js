export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #page;
  #searchQuery;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = '';
  }

  getImages() {
    return fetch(`${this.#BASE_URL}?query=${this.#searchQuery}&page=${this.#page}&${this.#searchParams}`).then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res.statusText)
    })
  }

  updadePage() {
    this.#page += 1
  }

  get page() {
    return this.#page
  }

  set page(newPage) {
    this.#page = newPage
  }

  set searchQuery(newQuery) {
    this.#searchQuery = newQuery
  }
  get searchQuery() {
    return this.#searchQuery;
  }
}