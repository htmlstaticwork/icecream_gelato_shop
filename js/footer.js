document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="footer bg-white pt-5">
                <div class="container border-bottom pb-5">
                    <div class="row g-4 justify-content-between">
                        <div class="col-lg-4">
                            <a class="navbar-brand mb-4 d-inline-block text-decoration-none" href="index.html">
                                <i class="fas fa-ice-cream me-2"></i>Scoops & Smiles
                            </a>
                            <p class="text-muted mb-4">Crafting joy, one scoop at a time. Join us in our mission to spread smiles through the magic of premium, artisanal ice cream.</p>
                            <div class="footer-social d-flex gap-3">
                                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-tiktok"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <h5 class="fw-bold mb-4">Quick Links</h5>
                            <ul class="list-unstyled footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="our-story.html">Our Story</a></li>
                                <li><a href="flavors.html">Flavors</a></li>
                                <li><a href="menu.html">Menu Card</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <h5 class="fw-bold mb-4">Support</h5>
                            <ul class="list-unstyled footer-links">
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="ingredients.html">Ingredients</a></li>
                                <li><a href="catering.html">Catering</a></li>
                                <li><a href="signup.html">Join Member</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <h5 class="fw-bold mb-4">Newsletter</h5>
                            <p class="text-muted small mb-4">Subscribe to get the latest flavor updates and sweet offers!</p>
                            <div class="input-group mb-3 news-letter-field">
                                <input type="email" class="form-control rounded-pill-start border-end-0 ps-4" placeholder="Your email">
                                <button class="btn btn-primary-custom rounded-pill-end px-4" type="button">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container py-4">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="text-muted mb-0">&copy; 2026 Scoops & Smiles. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
                            <ul class="list-inline mb-0 footer-bottom-links">
                                <li class="list-inline-item mx-3"><a href="#" class="text-muted small">Privacy Policy</a></li>
                                <li class="list-inline-item mx-3"><a href="#" class="text-muted small">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
            <!-- Scroll Top Button -->
            <div id="scroll-top">
                <i class="fas fa-arrow-up"></i>
            </div>
        `;

        // Scroll to top logic
        const scrollTopBtn = document.getElementById('scroll-top');
        if (scrollTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
});
