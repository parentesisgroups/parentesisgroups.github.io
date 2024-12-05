    // JavaScript para el carrusel
    const slides = document.querySelector('.banner-slides');
    const totalSlides = document.querySelectorAll('.banner-slide').length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalSlides - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Actualiza el carrusel al cargar
    updateCarousel();