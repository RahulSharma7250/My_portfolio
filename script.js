document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links and "Let's talk" button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typewriter effect for subheading
    const typewriterElement = document.querySelector('.typewriter');
    const typewriterText = typewriterElement.textContent;
    typewriterElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Scroll animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('is-visible');
            }
        });
    };

    // Progress bar animation
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const elementTop = bar.getBoundingClientRect().top;
            const elementBottom = bar.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                bar.style.width = bar.textContent;
            }
        });
    };

    // Throttle function to limit the rate at which a function can fire
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // Throttled scroll event listener
    window.addEventListener('scroll', throttle(() => {
        animateOnScroll();
        animateProgressBars();
    }, 100));

    // Initial check for animations
    animateOnScroll();
    animateProgressBars();

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});