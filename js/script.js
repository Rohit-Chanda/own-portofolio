// service section
document.querySelectorAll('.carousel-item').forEach(item => {
    const img = item.querySelector('.carousel-image');
    const originalSrc = img.src;  // Store the original image source

    item.addEventListener('mouseover', () => {
        const hoverSrc = item.getAttribute('data-hover');
        if (hoverSrc) {
            item.style.backgroundImage = `url(${hoverSrc})`;
        }
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundImage = `url(${originalSrc})`;  // Revert to the original image source
    });
});

// project-section

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                } else {
                    if (card.classList.contains(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});
