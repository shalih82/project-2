document.addEventListener('DOMContentLoaded', function() {
    // Sample gallery data - replace with your actual images
    const galleryData = [
        { src: 'images/photo1.jpg', alt: 'Wedding photography' },
        { src: 'images/photo2.jpg', alt: 'Portrait session' },
        { src: 'images/photo3.jpg', alt: 'Family photography' },
        { src: 'images/photo4.jpg', alt: 'Event coverage' },
        { src: 'images/photo5.jpg', alt: 'Outdoor portrait' },
        { src: 'images/photo6.jpg', alt: 'Couple session' },
        { src: 'images/photo7.jpg', alt: 'Product photography' },
        { src: 'images/photo8.jpg', alt: 'Landscape photography' }
    ];

    // Populate gallery
    const gallery = document.querySelector('.gallery');
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
        gallery.appendChild(galleryItem);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});