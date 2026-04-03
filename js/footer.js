document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <div class="footer-logo">Scoops & Smiles</div>
                            <p class="text-muted">Handcrafted ice cream made fresh daily with the finest local ingredients. Spreading happiness one scoop at a time!</p>
                            <div class="social-icons">
                                <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" title="TikTok"><i class="fab fa-tiktok"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 footer-links">
                            <h5>Quick Links</h5>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="flavors.html">Flavors</a></li>
                                <li><a href="menu.html">Menu</a></li>
                                <li><a href="catering.html">Catering</a></li>
                                <li><a href="signup.html">Signup</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 footer-links">
                            <h5>Our Shop</h5>
                            <ul>
                                <li><a href="our-story.html">About</a></li>
                                <li><a href="ingredients.html">Ingredients</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 footer-links">
                            <h5>Visit Us</h5>
                            <ul class="text-muted list-unstyled">
                                <li><i class="fas fa-map-marker-alt me-2 text-primary"></i> 123 Ice Cream Lane, Sweet City</li>
                                <li><i class="fas fa-phone me-2 text-primary"></i> (555) 123-4567</li>
                                <li><i class="fas fa-envelope me-2 text-primary"></i> hello@scoopssmiles.com</li>
                                <li><i class="fas fa-clock me-2 text-primary"></i> Mon-Sun: 11 AM - 10 PM</li>
                            </ul>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>&copy; 2026 Scoops & Smiles. All rights reserved. Handcrafted with <i class="fas fa-heart text-danger"></i></p>
                    </div>
                </div>
            </footer>
        `;
    }
});
