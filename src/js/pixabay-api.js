import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56352942-a4df77b9d744e7d73d31e642f';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
