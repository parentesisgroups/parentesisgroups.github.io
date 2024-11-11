       // Usamos JavaScript para cargar el contenido del footer
       fetch('footer.html')
       .then(response => response.text())
       .then(data => {
           document.getElementById('footer-container').innerHTML = data;
       });