function downloadGame() {
    alert("¡Iniciando descarga de The Forest: GANG Edition!");
    // Aquí pondrías tu link real de Mediafire/Mega/Drive
    window.location.href = "TU_LINK_DE_DESCARGA_AQUI";
}

// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});