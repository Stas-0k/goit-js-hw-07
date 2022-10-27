import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class="gallery__image"
    src=${preview} data-source=${original}
    alt=${description}/></a></div>`;
  })
  .join("");

galleryContainer.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const urlOriginal = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${urlOriginal}" width=100% height=100%>`
  );
  showFunc(instance);
}

function showFunc(instance) {
  instance.show();
  if (instance.show()) {
    addKeydown(instance)
  }
}

function addKeydown(instance) { 
    galleryContainer.addEventListener("keydown", onEsc);
    function onEsc(event) {
      if (event.code === "Escape") {
        instance.close();
        galleryContainer.removeEventListener("keydown", onEsc);
      }
    }
}
