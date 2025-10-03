// Spotify Clone - Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Function to setup navigation for any container
    function setupNavigation(containerSelector, prevBtnSelector, nextBtnSelector) {
        const container = document.querySelector(containerSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);
        
        if (prevBtn && nextBtn && container) {
            const scrollAmount = 400;
            
            prevBtn.addEventListener('click', function() {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            nextBtn.addEventListener('click', function() {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // Setup navigation for songs section
    setupNavigation('.songs', '.songs-wrapper .prev-btn', '.songs-wrapper .next-btn');
    
    // Setup navigation for artists section
    setupNavigation('.artists', '.artists-wrapper .prev-btn', '.artists-wrapper .next-btn');
    
    // Setup navigation for albums section
    setupNavigation('.albums', '.albums-wrapper .prev-btn', '.albums-wrapper .next-btn');
    
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
    
    // Add click handlers for artist cards
    const artistCards = document.querySelectorAll('.artist-card');
    artistCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add your artist selection functionality here
            console.log('Artist card clicked');
        });
    });
    
    // Add click handlers for album cards
    const albumCards = document.querySelectorAll('.album-card');
    albumCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add your album selection functionality here
            console.log('Album card clicked');
        });
    });
});
