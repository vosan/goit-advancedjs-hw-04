import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox.default('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="image-info">
            <div class="image-info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${likes || 0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${views || 0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${comments || 0}</span>
            </div>
            <div class="image-info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${downloads || 0}</span>
            </div>
          </div>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
