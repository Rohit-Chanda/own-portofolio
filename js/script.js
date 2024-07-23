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
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const cardContainer = document.querySelector('.card-container');
    
    let scrollAmount = 0;
    const cardWidth = 220; // Adjust based on card width and margin

    prevBtn.addEventListener('click', () => {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) {
            scrollAmount = cardWidth * (cardContainer.children.length - 1);
        }
        cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });

    nextBtn.addEventListener('click', () => {
        scrollAmount += cardWidth;
        if (scrollAmount >= cardWidth * cardContainer.children.length) {
            scrollAmount = 0;
        }
        cardContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Show or hide cards based on filter
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'flex'; // Show card
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });
        });
    });

    // Initial display of all cards
    cards.forEach(card => card.style.display = 'flex');
});

