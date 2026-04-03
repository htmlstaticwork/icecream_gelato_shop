document.addEventListener('DOMContentLoaded', function() {
    // Create loader HTML if it doesn't exist
    if (!document.getElementById('loader-container')) {
        const loaderHTML = `
            <div id="loader-container">
                <div class="loader-content">
                    <div class="scoop scoop-3"></div>
                    <div class="scoop scoop-2"></div>
                    <div class="scoop scoop-1"></div>
                    <div class="ice-cream-cup"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    }

    // Hide loader after page load
    window.addEventListener('load', function() {
        const loader = document.getElementById('loader-container');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 1000); // Show for at least 1 second for the animation to play
        }
    });

    // Fallback in case load event already fired
    if (document.readyState === 'complete') {
        const loader = document.getElementById('loader-container');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 1000);
        }
    }
});
