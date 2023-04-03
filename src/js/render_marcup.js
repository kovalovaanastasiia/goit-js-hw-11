import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

export default function renderMarkup({hits}) {
  const markup = hits
    .map(
      hit =>
        `<div class="photo-card">
           <div class="photo-wrap"><a class="photo-link" href="${hit.largeImageURL}">
                <img  src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy"/>
           </a></div>
           <div class="info">
              <p class="info-item">
                  <b>Likes</b> ${hit.likes}
              </p>
              <p class="info-item">
                  <b>Views</b> ${hit.views}
              </p>
              <p class="info-item">
                  <b>Comments</b> ${hit.comments}
              </p>
              <p class="info-item">
                  <b>Downloads</b> ${hit.downloads}
              </p>
            </div>
       </div>`
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  Lightbox.refresh();
}
const Lightbox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

