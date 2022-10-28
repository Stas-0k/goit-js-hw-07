import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");


galleryContainer.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class = "gallery__item" href="${original}">
    <img class="gallery__image"
    src=${preview}
    alt=${description}/></a>`;
  })
  .join("");

let gallerySimple = new SimpleLightbox('.gallery__item')
gallerySimple.on('show.simplelightbox', function () { 
  gallerySimple.on('captionData.simplelightbox', function ()   
   console.log(galleryItems.description))
  
})

