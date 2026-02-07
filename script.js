document.getElementById('btn-descargar').addEventListener('click', function() {
    const infoBox = document.getElementById('info-descarga');
    
    if (infoBox.style.display === 'none') {
        infoBox.style.display = 'block';
        this.innerText = 'CERRAR INFO';
        // Desplazar la vista hacia abajo automáticamente
        infoBox.scrollIntoView({ behavior: 'smooth' });
    } else {
        infoBox.style.display = 'none';
        this.innerText = 'DESCARGAR AHORA';
    }
});

// Efecto simple de consola al cargar
console.log("THE FOREST V. GANG cargado. By MISAGANG04");
