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

// Cargar el formulario y el footer
cargarHTML('../../html/menu/menu.html', 'menu-container');
cargarHTML('../../html/contact/formulario_contacto.html', 'formulario-container');
cargarHTML('../../html/footer/footer.html', 'footer-container');

