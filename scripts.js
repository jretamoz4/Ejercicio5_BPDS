// Espera a que todo el contenido HTML de la página se cargue
document.addEventListener('DOMContentLoaded', () => {

    const artistCards = document.querySelectorAll('.artist-card');
    const wrapper = document.querySelector('.artists-wrapper');
    let expandTimer; // Variable para guardar el temporizador

    artistCards.forEach(card => {
        // Evento cuando el cursor entra en la tarjeta
        card.addEventListener('mouseenter', () => {
            // Inicia un temporizador de 1 segundo
            expandTimer = setTimeout(() => {
                // Añade la clase que activa la animación a la tarjeta
                card.classList.add('expanded');
                // Añade una clase al contenedor para atenuar las otras tarjetas
                wrapper.classList.add('card-is-expanded');
            }, 1000); // 1000 milisegundos = 1 segundo
        });

        // Evento cuando el cursor sale de la tarjeta
        card.addEventListener('mouseleave', () => {
            // Cancela el temporizador si todavía no se ha ejecutado
            clearTimeout(expandTimer);
            // Quita las clases para revertir la animación
            card.classList.remove('expanded');
            wrapper.classList.remove('card-is-expanded');
        });
    });
});