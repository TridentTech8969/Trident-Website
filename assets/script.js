// Simple form handler for demo
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting Trident Tech! We will get back to you soon.');
        form.reset();
    });
}
