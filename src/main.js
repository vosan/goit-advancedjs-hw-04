import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import { showError, showInfo } from './js/toaster.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;
let loadedImages = 0;

const PER_PAGE = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    clearGallery();
    hideLoadMoreButton();
    showError('Please enter a search query!');
    return;
  }

  currentQuery = query;
  currentPage = 1;
  totalHits = 0;
  loadedImages = 0;

  clearGallery();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    totalHits = data.totalHits;
    createGallery(data.hits);
    loadedImages += data.hits.length;

    if (loadedImages < totalHits) {
      showLoadMoreButton();
    }
  } catch (error) {
    showError('Something went wrong. Please try again later.');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);
    loadedImages += data.hits.length;

    scrollPage();

    if (loadedImages >= totalHits) {
      hideLoadMoreButton();
      showInfo("We're sorry, but you've reached the end of search results.");
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    showError('Something went wrong. Please try again later.');
  } finally {
    hideLoader();
  }
});

function scrollPage() {
  const galleryCard = document.querySelector('.gallery-item');

  if (!galleryCard) {
    return;
  }

  const cardHeight = galleryCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
