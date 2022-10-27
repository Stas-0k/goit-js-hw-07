import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery')


galleryContainer.innerHTML = galleryItems.map(({preview,original,description}) =>
{
    return `<div class="gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class="gallery__image"
    src=${preview} data-source=${original}
    alt=${description}/></a></div>`
}).join('')


galleryContainer.addEventListener("click", onClick)




function onClick(event) { 
    event.preventDefault()
    const urlOriginal = event.target.dataset.source;
    //console.log(urlOriginal)
    const instance = basicLightbox.create(`
    <img src="${urlOriginal}" width="800" height="600">
`)

    instance.show()
    console.log(imgSrc.dataset.source)
}

