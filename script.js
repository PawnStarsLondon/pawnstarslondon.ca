// JavaScript for interactivity will go here 

// GLightbox initialization
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({
        selector: '.glightbox', // Targets all links with the class 'glightbox'
        touchNavigation: true,
        loop: true, // Set to true if you want the gallery to loop
        autoplayVideos: false,
        // You can add more options here as needed, e.g., for descriptions, titles
        // See GLightbox documentation for all options: https://glightbox.mcstudios.com.mx/
    });
});

// Any other future JavaScript for interactivity can go here 