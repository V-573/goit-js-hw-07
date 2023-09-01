import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const instanciaModalEstado = null;

function GenerarElementoDeGaleria(item) {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img 
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
   </li>    
    `;
}

galleryItems.forEach(item => {
    const elementoGaleriaHtml = GenerarElementoDeGaleria(item);
    galleryContainer.insertAdjacentHTML('beforeend', elementoGaleriaHtml);
});

const abrirVentanaModal = (imageUrl, description) => {
    const instanciaModal = basicLightbox.create(`
    <img src="${imageUrl}" alt ="${description}">`
    );

    const modalImage = instanciaModal.element().querySelector('img');
    modalImage.scr = imageUrl;
    modalImage.alt = description;

    instanciaModal.show();
    //asigno la instancia de la ventana modal a la variable que voy a usar para usar en el cierre:
   instanciaModalEstado = instanciaModal;
    document.addEventListener('keydown', CerrarVentanaModalConEsc);
};

const CerrarVentanaModalConEsc = (event) => {
    if (event.keyCode===27 && instanciaModalEstado) {
        instanciaModalEstado.close();
        instanciaModalEstado = null;
        document.removeEventListener('keydown', CerrarVentanaModalConEsc);
    }
        
};
galleryContainer.addEventListener('click', event => {
    event.preventDefault();//para que me anule la funcion del click convencional y no me dirija a el enlace de la imagen
   const clickedImage = event.target.closest('.gallery__image');//
    
    if (clickedImage) {
        const largeImageUrl = clickedImage.dataset.source;
        const description = clickedImage.alt;
       // abrirVentanaModal(largeImageUrl, description);
         abrirVentanaModal(largeImageUrl, description);
    }
})

console.log(galleryItems);
