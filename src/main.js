import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import { showError } from './js/toaster.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  clearGallery();

  if (!query) {
    showError('Please enter a search query!');
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
      } else {
        createGallery(data.hits);
      }
    })
    .catch(() => {
      showError('Something went wrong. Please try again later.');
    })
    .finally(() => {
      hideLoader();
    });
});
