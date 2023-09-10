import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function generarElementoDeGaleria(item) {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img 
                    class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                />
                <div class="gallery__caption">${item.description}</div>
            </a>
        </li>
    `;
}

galleryItems.forEach(item => {
    const elementoGaleriaHtml = generarElementoDeGaleria(item);
    galleryContainer.insertAdjacentHTML('beforeend', elementoGaleriaHtml);
});

const galeria = new SimpleLightbox('.gallery a', {
    /* Opciones de configuración si es necesario */
});