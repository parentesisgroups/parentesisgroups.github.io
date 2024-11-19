document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Validar nombre
    const namePattern = /^[a-zA-Z\s]+$/;
    const firstName = document.getElementById('firstName').value;
    if (!namePattern.test(firstName)) {
        alert('Nombre inválido. Usa solo letras y espacios.');
        event.preventDefault();
    }

    // Validar teléfono
    const phonePattern = /^[0-9]{9,13}$/;
    const phone = document.getElementById('phone').value;
    if (!phonePattern.test(phone)) {
        alert('Teléfono inválido. Debe tener entre 9 y 13 dígitos.');
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

//funcion para formato de numero telefonico "9 9999 9999"
    document.getElementById('phone').addEventListener('input', function (event) {
        const input = event.target;
        let value = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres que no sean números

        // Limitar a 9 dígitos y aplicar el formato
        if (value.length > 9) value = value.slice(0, 9);
        value = value.replace(/(\d)(\d{4})(\d{4})/, '$1 $2 $3'); // Formato 9 9999 9999

        input.value = value;
    });
