// Spotify Clone - Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get navigation buttons and songs container
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const songsContainer = document.querySelector('.songs');
    
    if (prevBtn && nextBtn && songsContainer) {
        // Scroll amount (width of approximately 2-3 cards)
        const scrollAmount = 400;
        
        // Previous button click handler
        prevBtn.addEventListener('click', function() {
            songsContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Next button click handler
        nextBtn.addEventListener('click', function() {
            songsContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Optional: Update button visibility based on scroll position
        songsContainer.addEventListener('scroll', function() {
            const scrollLeft = songsContainer.scrollLeft;
            const maxScroll = songsContainer.scrollWidth - songsContainer.clientWidth;
            
            // You can add logic here to hide/show buttons at scroll limits
            // For now, we'll keep them always visible when hovering
        });
    }
    
    // Add click handlers for play buttons
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add your play functionality here
            console.log('Play button clicked');
        });
    });
    
    // Add click handlers for song cards
    const songCards = document.querySelectorAll('.song-card');
    songCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add your song selection functionality here
            console.log('Song card clicked');
        });
    });
});