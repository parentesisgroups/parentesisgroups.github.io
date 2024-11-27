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
