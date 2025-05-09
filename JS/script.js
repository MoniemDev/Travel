document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.querySelector('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });

    // Handle active link highlighting
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.pageYOffset;

        // Check if we're at the top of the page for the home link
        if (scrollPosition < 200) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
            });
            return;
        }

        // Otherwise check which section is in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Sticky navbar and parallax effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        let scrollPosition = window.pageYOffset;

        // Parallax effect
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

        // Sticky navbar
        if (scrollPosition > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // Update active link
        setActiveLink();
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