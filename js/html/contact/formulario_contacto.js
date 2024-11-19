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

// Objeto que asocia códigos de país con imágenes de banderas
const banderasPais1 = {
    "+1": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/32px-Flag_of_United_States.svg.png", // USA
    "+52": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/32px-Flag_of_Mexico.svg.png", // Mexico
    "+56": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/32px-Flag_of_Chile.svg.png", // Chile
    "+54": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/32px-Flag_of_Argentina.svg.png", // Argentina
    "+57": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/32px-Flag_of_Colombia.svg.png", // Colombia
    "+58": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/32px-Flag_of_Venezuela.svg.png", // Venezuela
    "+51": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/32px-Flag_of_Peru.svg.png", // Peru
    "+503": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/32px-Flag_of_El_Salvador.svg.png", // El Salvador
    "+591": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/32px-Flag_of_Bolivia.svg.png", // Bolivia
    "+507": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/32px-Flag_of_Panama.svg.png", // Panama
    "+505": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/32px-Flag_of_Nicaragua.svg.png", // Nicaragua
    "+502": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/32px-Flag_of_Guatemala.svg.png", // Guatemala
    "+504": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/32px-Flag_of_Honduras.svg.png", // Honduras
    "+53": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/32px-Flag_of_Cuba.svg.png", // Cuba
    "+55": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/32px-Flag_of_Brazil.svg.png", // Brazil
    "+598": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/32px-Flag_of_Uruguay.svg.png", // Uruguay
    "+509": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/32px-Flag_of_Haiti.svg.png", // Haiti
    "+593": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/32px-Flag_of_Ecuador.svg.png", // Ecuador
    "+595": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/32px-Flag_of_Paraguay.svg.png" // Paraguay
};

// Imagen de bandera por defecto
const banderaPorDefecto1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/World_Flag_%282004%29.svg/640px-World_Flag_%282004%29.svg.png";

// Función para detectar el país según el número de teléfono
function detectarPais1(input1) {
    const numeroTelefono1 = input1.value.trim();
    const imagenBandera1 = document.getElementById("flag_phone");

    for (const codigo1 in banderasPais1) {
        if (numeroTelefono1.startsWith(codigo1)) {
            imagenBandera1.src = banderasPais1[codigo1];
            imagenBandera1.style.display = "inline";
            return;
        }
    }

    imagenBandera1.src = banderaPorDefecto1;
    imagenBandera1.style.display = "inline";
}

// Función para asegurar el prefijo '+' y detectar el país
function asegurarMasYDetectarPais1(input1) {
    if (!input1.value.startsWith('+')) {
        input1.value = '+' + input1.value.replace(/^\+/, '');
    }

    const validCharacters1 = input1.value.replace(/[^0-9]/g, '');
    input1.value = input1.value[0] + validCharacters1;

    detectarPais1(input1);
}

// Inicialización al cargar la página
window.onload = function() {
    const campoTelefono1 = document.getElementById('phone');
    asegurarMasYDetectarPais1(campoTelefono1);
};
