// Usamos JavaScript para cargar el contenido del footer
fetch('../html/footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });


    // Usamos JavaScript para cargar el contenido del footer
fetch('formulario_contacto.html')
.then(response => response.text())
.then(data => {
    document.getElementById('container mt-5').innerHTML = data;
});