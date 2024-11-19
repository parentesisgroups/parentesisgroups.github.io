document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Validar nombre
    const namePattern = /^[a-zA-Z\s]+$/;
    const firstName = document.getElementById('firstName').value;
    if (!namePattern.test(firstName)) {
        alert('Nombre inválido. Usa solo letras y espacios.');
        event.preventDefault();
    }

    // Validar teléfono
    const phonePattern = /^[0-9]{10,15}$/;
    const phone = document.getElementById('phone').value;
    if (!phonePattern.test(phone)) {
        alert('Teléfono inválido. Debe tener entre 10 y 15 dígitos.');
        event.preventDefault();
    }

    // Validar correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mail = document.getElementById('mail').value;
    if (!emailPattern.test(mail)) {
        alert('Correo inválido.');
        event.preventDefault();
    }

    // Validar asunto
    const asunto = document.getElementById('asunto').value;
    if (!namePattern.test(asunto)) {
        alert('Asunto inválido. Usa solo letras y espacios.');
        event.preventDefault();
    }
});
