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

    // --- NEW POURING ANIMATION LOGIC ---
    function initPouringAnimation() {
        const triggers = document.querySelectorAll('.scoop-trigger');
        
        triggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                // Find or create a pour container relative to the trigger
                let container = this.parentElement.querySelector('.pour-container');
                if (!container) {
                    container = document.createElement('div');
                    container.className = 'pour-container';
                    this.parentElement.style.position = 'relative';
                    this.parentElement.appendChild(container);
                }

                // Create a drip
                const drip = document.createElement('div');
                drip.className = 'drip';
                
                // Randomize horizontal position slightly
                const rect = this.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                
                // Position drip at click or center of scoop
                const x = e.clientX - containerRect.left;
                drip.style.left = `${x}px`;
                drip.style.top = '20px';

                // Randomize drip color based on some favorites or use primary
                const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF8E8E', '#A29BFE'];
                drip.style.background = colors[Math.floor(Math.random() * colors.length)];

                container.appendChild(drip);

                // Remove drip after animation
                setTimeout(() => {
                    drip.remove();
                }, 2000);
            });
        });
    }

    initPouringAnimation();

    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // --- HOME 1 HERO DROP SCOOP INTERACTION ---
    const dropScoopBtn = document.getElementById('dropScoopBtn');
    const animatedScoop = document.getElementById('animatedScoop');
    
    if (dropScoopBtn && animatedScoop) {
        dropScoopBtn.addEventListener('click', function() {
            // Remove the class if it exists to allow re-triggering
            animatedScoop.classList.remove('dropped-scoop');
            // Small timeout to allow the browser to register the removal
            setTimeout(() => {
                // Change scoop image randomly for fun
                const scoops = [
                    'https://png.pngtree.com/png-clipart/20230321/ourlarge/pngtree-a-scoop-of-strawberry-ice-cream-png-image_6656799.png', // Strawberry
                    'https://png.pngtree.com/png-vector/20231102/ourmid/pngtree-matcha-ice-cream-scoop-png-image_10330966.png', // Matcha
                    'https://png.pngtree.com/png-vector/20231201/ourmid/pngtree-a-scoop-of-chocolate-ice-cream-on-a-transparent-png-image_10793616.png' // Chocolate
                ];
                animatedScoop.src = scoops[Math.floor(Math.random() * scoops.length)];
                
                // Trigger the animation
                animatedScoop.classList.add('dropped-scoop');
            }, 50);
        });
    }
});
