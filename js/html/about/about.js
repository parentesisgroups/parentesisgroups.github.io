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

// Usamos JavaScript para cargar el contenido del menu
cargarHTML('../../html/menu/menu.html', 'menu-container');

//  para cargar el contenido de la pagina
cargarHTML('../../html/about/sobre_nosotros.html', 'sobre_nosotros');
cargarHTML('../../html/about/nuestro_equipo.html', 'nuestro_equipo');
cargarHTML('../../html/about/mision_vision.html', 'mision_vision');

//  para cargar Componentes extras
cargarHTML('../../html/rrss/rrss.html', 'rrss-contenedor');

// Usamos JavaScript para cargar el contenido del footer
cargarHTML('../../html/footer/footer.html', 'footer-container');
