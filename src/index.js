import fetchPhotos from './js/pixabay_api';
import {failureNotify} from "./js/notification";

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const btnLoadMore = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');

let page = 1;

formEl.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', onBtnLoadMore);

async function onSearch(event) {
  event.preventDefault();

  page = 1;
  const name = inputEl.value.trim();
  galleryEl.innerHTML = '';

  if (name === '') {
    failureNotify('Sorry, there are no images matching your search query. Please try again.');
  } else {
    await fetchPhotos(name, page);
  }
}

async function onBtnLoadMore() {
  const name = inputEl.value.trim();
  page += 1;
  await fetchPhotos(name, page);
  const {height: cardHeight} = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2.8,
    behavior: "smooth",
  });
}


