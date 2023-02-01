// 'use strict';
// https://jsonplaceholder.typicode.com/

import { JsonplaceholderAPI } from './jsonplaceholder-api';
import { createPostsCards } from '../templates/createPostsCards';

const postsListRef = document.querySelector('.js-posts');
const loadMoreBtn = document.querySelector('.js-load-more');

const jsonplaceholderApi = new JsonplaceholderAPI();

console.log(jsonplaceholderApi);

jsonplaceholderApi
  .getPosts()
  .then(data => {
    if (jsonplaceholderApi.page === 1) {
      loadMoreBtn.classList.remove('is-hidden');
    }
    const markup = createPostsCards(data).join('');
    postsListRef.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => {
    console.log(error);
  });

const handleClickLoadMore = () => {
  jsonplaceholderApi.incrementPage();

  const hasMorePages = jsonplaceholderApi.hasMorePages();

  if (!hasMorePages) {
    loadMoreBtn.classList.add('is-hidden');
  }

  jsonplaceholderApi
    .getPosts()
    .then(data => {
      const markup = createPostsCards(data);
      postsListRef.insertAdjacentHTML('beforeend', markup.join(''));
    })
    .catch(error => {
      console.log(error);
    });
};

loadMoreBtn.addEventListener('click', handleClickLoadMore);