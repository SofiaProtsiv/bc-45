// docs https://github.com/typicode/json-server/blob/master/README.md#paginate

export class JsonplaceholderAPI {
  #BASE_URL = 'https://jsonplaceholder.typicode.com/';
  #page;
  #limit;
  #total;

  constructor() {
    this.#page = 1;
    this.#limit = 25;
    this.#total = 100;
  }

  getPosts() {
    return fetch(
      `${this.#BASE_URL}posts?_page=${this.#page}&_limit=${this.#limit}`
    ).then(responce => {
      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
      return responce.json();
    });
  }
  get page() {
    return this.#page;
  }

  incrementPage() {
    this.#page += 1;
  }

  hasMorePages() {
    return this.#total / this.#limit > this.#page;
  }

}