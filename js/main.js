document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of scrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.ice-cream-card, .section-title, .hero-content');
    const revealFunc = function() {
        for (const element of revealElements) {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('fade-in-up');
            }
        }
    };

    window.addEventListener('scroll', revealFunc);
    revealFunc(); // Initial check

    // Flavor filtering logic (if on flavors page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const flavorCards = document.querySelectorAll('.flavor-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                flavorCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Form validation (if on contact/catering page)
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Simple Gallery Lightbox Placeholder
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('hover', function() {
                // Add zoom effects or similar
            });
        });
    }
});
