import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
let instanciaModalEstado = null;



    function generarElementoDeGaleria(item) {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img 
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
            <div class="gallery__caption">${item.description}</div>
        </a>
    </li>`;
    }
    
galleryItems.forEach(item => {
    const elementoGaleriaHtml = generarElementoDeGaleria(item);
    galleryContainer.insertAdjacentHTML('beforeend', elementoGaleriaHtml);
});

const abrirVentanaModal = (imageUrl, description) => {

    
  const instanciaModal = basicLightbox.create(`
    <img src="${imageUrl}" alt ="${description}">`
  );

    var $gallery = new SimpleLightbox('imageUrl', {});
   

  const modalImage = instanciaModal.element().querySelector('img');
    modalImage.src = imageUrl;
    modalImage.alt = description;

    instanciaModal.show();
    //asigno la instancia de la ventana modal a la variable que voy a usar para usar en el cierre:
   instanciaModalEstado = instanciaModal;
    //document.addEventListener('keydown', CerrarVentanaModalConEsc);

};





galleryContainer.addEventListener('click', event => {
    event.preventDefault(); // Para que anule la función del clic convencional y no me dirija al enlace de la imagen
    const clickedImage = event.target.closest('.gallery__image');

    if (clickedImage) {
        const largeImageUrl = clickedImage.dataset.source;
        const description = clickedImage.alt;
        abrirVentanaModal(largeImageUrl, description);
    }
});

 

console.log(galleryItems);
