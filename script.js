// Simple navigation for demo purposes
document.addEventListener('DOMContentLoaded', function() {
    // Header logo links to home
    const headerLogos = document.querySelectorAll('[data-header-logo]');
    headerLogos.forEach(logo => {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    });

    // Video cards link to watch page
    const videoCards = document.querySelectorAll('[data-video-card]');
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'watch.html';
        });
    });

    // Channel links
    const channelLinks = document.querySelectorAll('[data-channel-link]');
    channelLinks.forEach(link => {
        link.addEventListener('click', () => {
            window.location.href = 'channel.html';
        });
    });

    // Search functionality
    const searchForms = document.querySelectorAll('[data-search-form]');
    searchForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = form.querySelector('input').value;
            if(query.trim()) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    });
});