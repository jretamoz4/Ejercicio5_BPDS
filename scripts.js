document.addEventListener('DOMContentLoaded', () => {
    
    const artistCards = document.querySelectorAll('.artist-card');
    const popup = document.getElementById('artist-popup');
    let hoverTimer;

    // Función para mostrar el pop-up
    const showPopup = (card, event) => {
        // 1. Clona el contenido de la tarjeta para mostrarlo en el pop-up
        const contentClone = card.querySelector('.full-description').cloneNode(true);
        contentClone.style.display = 'block'; // Asegurarse de que sea visible

        // 2. Limpia el pop-up anterior y añade el nuevo contenido
        popup.innerHTML = '';
        popup.appendChild(contentClone);

        // 3. Posiciona el pop-up cerca del cursor
        // Se usa event.pageX y event.pageY para la posición del cursor en la página
        popup.style.left = `${event.pageX + 20}px`;
        popup.style.top = `${event.pageY + 20}px`;

        // 4. Hace visible el pop-up
        popup.classList.add('visible');
    };

    // Función para ocultar el pop-up
    const hidePopup = () => {
        popup.classList.remove('visible');
    };

    // Asigna los eventos a cada tarjeta
    artistCards.forEach(card => {
        let currentEvent;

        // Guarda la posición del mouse mientras está sobre la tarjeta
        card.addEventListener('mousemove', (event) => {
            currentEvent = event;
        });
        
        // Cuando el cursor entra
        card.addEventListener('mouseenter', (event) => {
            currentEvent = event;
            // Inicia un temporizador de 1 segundo
            hoverTimer = setTimeout(() => {
                showPopup(card, currentEvent);
            }, 1000); // 1000 ms = 1 segundo
        });

        // Cuando el cursor sale
        card.addEventListener('mouseleave', () => {
            // Cancela el temporizador y oculta el pop-up
            clearTimeout(hoverTimer);
            hidePopup();
        });
    });

});