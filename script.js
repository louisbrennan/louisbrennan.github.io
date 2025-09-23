// Typing Animation for Tagline
const typingText = document.getElementById('typing-text');
const phrases = [
    'Software Engineer',
    'Computer Scientist', 
    'Problem Solver',
    'Tech Enthusiast'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Remove characters
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Add characters
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    // Check if word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of phrase
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});


// Smooth scrolling for navigation links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar scroll behavior with hide/show functionality
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Handle background change
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    // Don't hide navbar at the very top
    if (currentScroll <= 100) {
        navbar.classList.remove('nav-hidden');
        lastScrollTop = currentScroll;
        return;
    }
    
    // Hide/show logic
    if (currentScroll > lastScrollTop && currentScroll > 200) {
        // Scrolling down & past 200px - hide navbar
        navbar.classList.add('nav-hidden');
    } else if (currentScroll < lastScrollTop) {
        // Scrolling up - show navbar
        navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = currentScroll;
});