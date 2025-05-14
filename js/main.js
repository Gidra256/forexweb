// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('-rotate-45');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(5px)';
    } else {
        navbar.style.backgroundColor = 'var(--background)';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate Elements on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.feature-card, .course-card, .tool-card').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-10');
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .opacity-0 {
        opacity: 0;
    }
    
    .translate-y-10 {
        transform: translateY(40px);
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .rotate-45 {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .-rotate-45 {
        transform: rotate(-45deg) translate(5px, -5px);
    }
    
    .opacity-0 {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Form Validation (if needed)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form validation and submission logic here
        console.log('Form submitted');
    });
});

// Initialize any interactive tools
document.querySelectorAll('[data-tool]').forEach(tool => {
    tool.addEventListener('click', (e) => {
        e.preventDefault();
        const toolType = tool.getAttribute('data-tool');
        // Add your tool initialization logic here
        console.log(`Tool ${toolType} clicked`);
    });
}); 