document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.service-card, .showcase, .hero-content, .contact-box');
    animatedElements.forEach(el => {
        el.classList.add('hidden-animate'); // Initial state
        observer.observe(el);
    });

    // Contact Form Mock
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Enviando...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerText = '¡Mensaje Enviado!';
                btn.style.background = 'var(--secondary-gradient)';
                btn.style.opacity = '1';
                form.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = 'var(--primary-gradient)';
                }, 3000);
            }, 1500);
        });
    }
});
