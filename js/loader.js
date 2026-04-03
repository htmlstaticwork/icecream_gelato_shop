document.addEventListener('DOMContentLoaded', function() {
    // Create loader HTML if it doesn't exist
    if (!document.getElementById('loader-container')) {
        const loaderHTML = `
            <style>
                @keyframes floatLoader {
                    0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 10px 10px rgba(0,0,0,0.15)); }
                    50% { transform: translateY(-20px) scale(1.05); filter: drop-shadow(0 25px 15px rgba(0,0,0,0.25)); }
                }
                #loader-container {
                    background: rgba(255, 255, 255, 0.98);
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: opacity 0.5s ease, visibility 0.5s ease;
                }
            </style>
            <div id="loader-container">
                <div class="loader-content text-center">
                    <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200&h=200&fit=crop" 
                         alt="Loading..." style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 5px solid white; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2)); animation: floatLoader 1.8s ease-in-out infinite;">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    }

    function hideLoader() {
        const loader = document.getElementById('loader-container');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                loader.style.pointerEvents = 'none';
            }, 1400); // Give scoops time to bounce in
        }
    }

    // Hide loader after page load
    window.addEventListener('load', hideLoader);

    // Fallback in case load event already fired
    if (document.readyState === 'complete') {
        hideLoader();
    }
});
