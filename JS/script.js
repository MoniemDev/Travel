document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    const navToggle = document.getElementById('nav-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
    
    // Parallax scrolling effect for hero section
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        let scrollPosition = window.pageYOffset;
        
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Here you would normally send the form data to your server
                alert('شكرًا لرسالتك! سنرد عليك قريبًا.');
                contactForm.reset();
            } else {
                alert('يرجى ملء جميع الحقول.');
            }
        });
    }
});