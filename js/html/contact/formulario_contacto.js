document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Validar nombre (solo letras y espacios)
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(document.getElementById('firstName').value)) {
        alert('Nombre inválido. Use solo letras.');
        event.preventDefault();
    }

    // Validar teléfono (números solamente)
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(document.getElementById('phone').value)) {
        alert('Teléfono inválido. Use solo números.');
        event.preventDefault();
    }
});
