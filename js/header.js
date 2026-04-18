document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        const isMobile = window.innerWidth <= 1024;

        headerPlaceholder.innerHTML = `
            <nav class="navbar navbar-expand-xl">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <i class="fas fa-ice-cream me-2"></i>Scoops & Smiles
                    </a>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto align-items-center text-center">
                            <!-- Mobile / Tablet Separate Links -->
                            <li class="nav-item d-xl-none">
                                <a class="nav-link ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}" href="index.html">Home 1</a>
                            </li>
                            <li class="nav-item d-xl-none">
                                <a class="nav-link ${currentPath === 'home2.html' ? 'active' : ''}" href="home2.html">Home 2</a>
                            </li>

                            <!-- Desktop Home Dropdown -->
                            <li class="nav-item dropdown d-none d-xl-block">
                                <a class="nav-link dropdown-toggle ${currentPath === 'index.html' || currentPath === '' || currentPath === 'home2.html' ? 'active' : ''}" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                                <ul class="dropdown-menu border-0 shadow-sm rounded-4" aria-labelledby="homeDropdown">
                                    <li><a class="dropdown-item ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}" href="index.html">Home 1</a></li>
                                    <li><a class="dropdown-item ${currentPath === 'home2.html' ? 'active' : ''}" href="home2.html">Home 2</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'our-story.html' ? 'active' : ''}" href="our-story.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'flavors.html' ? 'active' : ''}" href="flavors.html">Flavors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'ingredients.html' ? 'active' : ''}" href="ingredients.html">Ingredients</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'menu.html' ? 'active' : ''}" href="menu.html">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'catering.html' ? 'active' : ''}" href="catering.html">Catering</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'contact.html' ? 'active' : ''}" href="contact.html">Contact</a>
                            </li>
                            <li class="nav-item d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
                                <span id="theme-toggle" class="nav-icon" title="Toggle Theme">
                                    <i class="fas fa-moon"></i>
                                </span>
                                <span id="rtl-toggle" class="nav-icon" title="Toggle RTL">
                                    <i class="fas fa-left-right"></i>
                                </span>
                            </li>
                            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                                <a href="signup.html" class="btn btn-primary-custom btn-sm rounded-pill px-4">Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

        // Theme Toggle Logic
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

        function updateThemeUI(isDark) {
            if (!themeIcon) return;
            if (isDark) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                html.setAttribute('data-theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                html.setAttribute('data-theme', 'light');
            }
        }

        // Initialize theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            updateThemeUI(true);
        } else {
            updateThemeUI(false);
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                const isCurrentlyDark = html.getAttribute('data-theme') === 'dark';
                const newIsDark = !isCurrentlyDark;
                localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
                updateThemeUI(newIsDark);
            });
        }

        // RTL Toggle Logic
        const rtlToggle = document.getElementById('rtl-toggle');
        if (rtlToggle) {
            rtlToggle.addEventListener('click', function () {
                const dir = document.documentElement.getAttribute('dir');
                if (dir === 'rtl') {
                    document.documentElement.setAttribute('dir', 'ltr');
                } else {
                    document.documentElement.setAttribute('dir', 'rtl');
                }
            });
        }
    }
});
