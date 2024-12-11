// Función para cargar un archivo HTML en un contenedor específico
function cargarHTML(ruta, contenedorId) {
    fetch(ruta)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo HTML");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(contenedorId).innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}

//  para cargar el contenido del menu
cargarHTML('../../html/menu/menu.html', 'menu-container');

//  para cargar el contenido de la pagina
cargarHTML('../../html/aquadeluxe/seccion-1.html', 'seccion-1');
cargarHTML('../../html/aquadeluxe/seccion-2.html', 'seccion-2');
cargarHTML('../../html/aquadeluxe/seccion-3.html', 'seccion-3');
cargarHTML('../../html/aquadeluxe/seccion-4.html', 'seccion-4');
cargarHTML('../../html/aquadeluxe/seccion-5.html', 'seccion-5');
cargarHTML('../../html/aquadeluxe/seccion-6.html', 'seccion-6');

//  para cargar Componentes extras
cargarHTML('../../html/rrss/rrss.html', 'rrss-contenedor');


//  para cargar el contenido del footer
cargarHTML('../../html/footer/footer.html', 'footer-container');


//  Carrucel banner
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item-2');
        const totalSlides = slides.length;

        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        const carouselContent = document.querySelector('.carousel-content-2');
        carouselContent.style.transform = `translateX(-${currentSlide * 100}%)`;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Hacer las funciones globales (opcional, pero útil en este caso)
    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;

    // Inicializar el carrusel
    showSlide(0);
});
