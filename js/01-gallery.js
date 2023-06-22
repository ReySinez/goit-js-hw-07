import { galleryItems } from './gallery-items.js';

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);


gallery.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;
    openModal(imageUrl);
  }
}



function openModal(imageUrl) {
  const instance = basicLightbox.create(
    `<img src="${imageUrl}" width="800" height="600">`
  );
  instance.show();
}