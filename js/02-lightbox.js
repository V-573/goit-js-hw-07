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

const CerrarVentanaModalConEsc = (event) => {
    if (event.key ==='Escape') {
     
        document.removeEventListener('keydown', CerrarVentanaModalConEsc);
    }
    };

const abrirVentanaModal = (imageUrl, description) => {

    var lightBox =$('imageUrl').simpleLightbox({});
  
//   const modalImage = instanciaModal.element().querySelector('img');
//    modalImage.src = imageUrl;
//    modalImage.alt = description;

     document.addEventListener('keydown', CerrarVentanaModalConEsc);

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
