// JavaScript for interactivity will go here 

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('header nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('nav-active');
            // For ARIA: toggle aria-expanded attribute
            const isExpanded = navUl.classList.contains('nav-active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }

    // GLightbox initialization
    // Check if GLightbox is defined before trying to use it
    if (typeof GLightbox === 'function') {
        const lightbox = GLightbox({
            selector: '.glightbox', // Targets all links with the class 'glightbox'
            touchNavigation: true,
            loop: true, // Set to true if you want the gallery to loop
            autoplayVideos: false,
            // You can add more options here as needed, e.g., for descriptions, titles
            // See GLightbox documentation for all options: https://glightbox.mcstudios.com.mx/
        });
    } else {
        console.log('GLightbox not available'); // Or handle the absence of GLightbox differently
    }
});

// Any other future JavaScript for interactivity can go here 