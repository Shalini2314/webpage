document.addEventListener('DOMContentLoaded', function() {
    const destinationCards = document.querySelectorAll('.destination-card');
    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInfo = document.getElementById('modal-info');
    const closeBtn = document.querySelector('.close-btn');

    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const location = card.getAttribute('data-location');
            const info = card.getAttribute('data-info');

            modalTitle.textContent = location;
            modalInfo.textContent = info;

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
