function openModal() {
    const modal = document.getElementById('download-modal');
    modal.style.display = 'block';
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.transition = "opacity 0.3s ease";
        modal.style.opacity = "1";
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('download-modal');
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.onclick = function(event) {
    var modal = document.getElementById('download-modal');
    if (event.target == modal) {
        closeModal();
    }
}