import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  toggleLoader,
  toggleLoadMoreButton,
  refs,
} from './js/render-functions.js';
import { showError, showInfo } from './js/toaster.js';

const searchParams = {
  query: '',
  page: 1,
  totalHits: 0,
  loadedImages: 0,
};

refs.form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    clearGallery();
    toggleLoadMoreButton(false);
    showError('Please enter a search query!');
    return;
  }

  searchParams.query = query;
  searchParams.page = 1;
  searchParams.loadedImages = 0;

  clearGallery();
  toggleLoadMoreButton(false);

  await fetchAndRenderImages();
});

refs.loadMoreBtn.addEventListener('click', async () => {
  searchParams.page += 1;
  toggleLoadMoreButton(false);

  await fetchAndRenderImages(true);
});

async function fetchAndRenderImages(isLoadMore = false) {
  toggleLoader(true);
  try {
    const data = await getImagesByQuery(searchParams.query, searchParams.page);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    if (searchParams.page === 1) {
      searchParams.totalHits = data.totalHits;
    }

    createGallery(data.hits);
    searchParams.loadedImages += data.hits.length;

    if (isLoadMore) {
      scrollPage();
    }

    if (searchParams.loadedImages >= searchParams.totalHits) {
      toggleLoadMoreButton(false);
      if (isLoadMore) {
        showInfo("We're sorry, but you've reached the end of search results.");
      }
    } else {
      toggleLoadMoreButton(true);
    }
  } catch (error) {
    showError('Something went wrong. Please try again later.');
  } finally {
    toggleLoader(false);
  }
}

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
