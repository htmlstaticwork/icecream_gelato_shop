document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('loader-container')) {
        const isDark = localStorage.getItem('theme') === 'dark';
        const bg = isDark ? '#121212' : '#fff6f6';
        const loaderHTML = `
            <style>
                #loader-container {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    z-index: 99999;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: ${bg};
                    transition: opacity 0.6s ease, visibility 0.6s ease;
                }

                .loader-cone-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                /* Scoops */
                .loader-scoops {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: -10px;
                    margin-bottom: -4px;
                }

                .loader-scoop {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    position: relative;
                    animation: loaderScoopBounce 1.8s ease-in-out infinite;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                }

                .loader-scoop:nth-child(1) {
                    background: radial-gradient(circle at 35% 35%, #ff9b9b, #ff6b6b);
                    animation-delay: 0s;
                    z-index: 3;
                    margin-bottom: -18px;
                }
                .loader-scoop:nth-child(2) {
                    background: radial-gradient(circle at 35% 35%, #fff9e0, #ffe66d);
                    animation-delay: 0.15s;
                    z-index: 2;
                    margin-bottom: -18px;
                    width: 76px; height: 76px;
                }
                .loader-scoop:nth-child(3) {
                    background: radial-gradient(circle at 35% 35%, #8efff4, #4ecdc4);
                    animation-delay: 0.3s;
                    z-index: 1;
                    width: 80px; height: 80px;
                }

                /* Highlight shine on each scoop */
                .loader-scoop::before {
                    content: '';
                    position: absolute;
                    top: 14px; left: 16px;
                    width: 16px; height: 10px;
                    background: rgba(255,255,255,0.45);
                    border-radius: 50%;
                    transform: rotate(-30deg);
                }

                /* Cone */
                .loader-cone {
                    width: 0;
                    height: 0;
                    border-left: 42px solid transparent;
                    border-right: 42px solid transparent;
                    border-top: 85px solid #e8a055;
                    position: relative;
                    filter: drop-shadow(0 8px 12px rgba(0,0,0,0.2));
                    animation: loaderConeSway 1.8s ease-in-out infinite;
                }

                /* Cone waffle pattern */
                .loader-cone::after {
                    content: '';
                    position: absolute;
                    top: -80px;
                    left: -28px;
                    width: 56px;
                    height: 60px;
                    background: repeating-linear-gradient(
                        45deg,
                        rgba(255,255,255,0.1) 0px,
                        rgba(255,255,255,0.1) 2px,
                        transparent 2px,
                        transparent 8px
                    ),
                    repeating-linear-gradient(
                        -45deg,
                        rgba(255,255,255,0.1) 0px,
                        rgba(255,255,255,0.1) 2px,
                        transparent 2px,
                        transparent 8px
                    );
                }

                /* Drip */
                .loader-drip {
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 10px;
                    height: 0;
                    background: #ff6b6b;
                    border-radius: 0 0 10px 10px;
                    animation: loaderDrip 2.4s ease-in-out infinite;
                }

                /* Loader text */
                .loader-text {
                    margin-top: 28px;
                    font-family: 'Fredoka', 'Baloo 2', cursive;
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #ff6b6b;
                    letter-spacing: 0.5px;
                    animation: loaderTextPulse 1.5s ease-in-out infinite;
                }

                .loader-dots span {
                    display: inline-block;
                    animation: loaderDot 1.4s ease-in-out infinite;
                    opacity: 0;
                }
                .loader-dots span:nth-child(1) { animation-delay: 0s; }
                .loader-dots span:nth-child(2) { animation-delay: 0.2s; }
                .loader-dots span:nth-child(3) { animation-delay: 0.4s; }

                @keyframes loaderScoopBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes loaderConeSway {
                    0%, 100% { transform: rotate(-2deg); }
                    50% { transform: rotate(2deg); }
                }
                @keyframes loaderDrip {
                    0%, 40% { height: 0; opacity: 1; }
                    80% { height: 22px; opacity: 1; }
                    100% { height: 22px; opacity: 0; }
                }
                @keyframes loaderTextPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.55; }
                }
                @keyframes loaderDot {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
            </style>
            <div id="loader-container">
                <div class="loader-cone-wrapper">
                    <div class="loader-scoops">
                        <div class="loader-scoop">
                            <div class="loader-drip"></div>
                        </div>
                        <div class="loader-scoop"></div>
                        <div class="loader-scoop"></div>
                    </div>
                    <div class="loader-cone"></div>
                </div>
                <div class="loader-text">
                    Scooping Happiness<span class="loader-dots"><span>.</span><span>.</span><span>.</span></span>
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
            }, 1200);
        }
    }

    window.addEventListener('load', hideLoader);
    if (document.readyState === 'complete') {
        hideLoader();
    }
});
