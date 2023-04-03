import axios from 'axios';
import renderMarkup from './render_marcup'
import {failureNotify, successNotify} from "./notification";


const btnLoadMore = document.querySelector('.load-more');
export default async function fetchPhotos(name, page) {
  const API_URL = 'https://pixabay.com/api/';
  const API_KEY = '35024315-beb810f6c6b5d65d36d66c79c';
  const options = {
    params: {
      key: API_KEY,
      q: name,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 40,
    },
  };
  btnLoadMore.classList.add('is-hidden');
  try {
    const response = await axios.get(API_URL, options);
    const totalQuantity = response.data.totalHits;
    const responseLength = response.data.hits.length;

    if (responseLength === 0) {
      failureNotify('Sorry, there are no images matching your search query. Please try again.');
    } else if (responseLength === totalQuantity) {
      btnLoadMore.classList.add('is-hidden');
      failureNotify('We`re sorry, but you`ve reached the end of search results.');
    } else {
      successNotify(totalQuantity, page);
      btnLoadMore.classList.remove('is-hidden');
      renderMarkup(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}
