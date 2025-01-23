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


//  para cargar Componentes extras
cargarHTML('../../html/rrss/rrss.html', 'rrss-contenedor');

// Usamos JavaScript para cargar modulos
cargarHTML('../../html/services/banner_servicios.html', 'banner_servicios');
cargarHTML('../../html/services/planes.html', 'planes');
cargarHTML('../../html/services/nuestro_servicio.html', 'nuestro_servicio');
cargarHTML('../../html/services/por_que_nosotros.html', 'por_que_nosotros');

// Usamos JavaScript para cargar el contenido del footer
cargarHTML('../../html/footer/footer.html', 'footer-container');
