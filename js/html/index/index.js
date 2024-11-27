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
cargarHTML('../../html/index/contenedor-1.html', 'contenedor-1');
cargarHTML('../../html/index/contenedor-2.html', 'contenedor-2');
cargarHTML('../../html/index/contenedor-3.html', 'contenedor-3');

//  para cargar el contenido del footer
cargarHTML('../../html/footer/footer.html', 'footer-container');
