// Select all images on the page
const images = document.querySelectorAll('img');

// Loop over each image
images.forEach(img => {
    // Add an error event listener to each image
    img.onerror = function() {
        this.onerror = null;
        // Set the source to the placeholder image
        this.src = '../js/placeholder-image.jpg';
        
        // Set the alt text for accessibility
        this.alt = "Placeholder image";


    };
});

