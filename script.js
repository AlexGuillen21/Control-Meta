document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const storageKey = 'cookieConsentAccepted';

    // 1. Verificar si el usuario ya ha aceptado
    const hasAccepted = localStorage.getItem(storageKey);

    if (!hasAccepted) {
        // Si no ha aceptado, mostrar el banner
        banner.style.display = 'block';
    }

    // 2. Manejar el evento de clic en el botón
    acceptButton.addEventListener('click', () => {
        // Ocultar el banner
        banner.style.display = 'none';
        
        // Guardar la preferencia en localStorage
        localStorage.setItem(storageKey, 'true');
    });
});
