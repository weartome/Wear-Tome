/**
 * animations.js
 * * Handles all custom scroll-based and interactive animations:
 * - Scroll-triggered reveals (fade, slide, zoom)
 * - Parallax background scroll
 * - Mouse-move parallax effect
 */

const ScrollAnimations = {
    init() {
        this.scrollReveal();
        this.parallaxScroll();
        this.parallaxMouse();
    },

    /**
     * Custom Scroll Reveal Engine
     * Uses IntersectionObserver to add 'is-visible' class to elements
     * when they scroll into view.
     */
    scrollReveal() {
        const animatedElements = document.querySelectorAll('[data-animate]');
        if (!animatedElements.length) return;

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = el.dataset.animateDelay || 0;

                    setTimeout(() => {
                        el.classList.add('is-visible');
                    }, parseInt(delay));
                    
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.1 // Triggers when 10% of the element is visible
        });

        animatedElements.forEach(el => {
            revealObserver.observe(el);
        });
    },

    /**
     * Parallax effect on elements with `data-parallax`.
     * Moves the element at a slower rate than the scroll.
     */
    parallaxScroll() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        if (!parallaxElements.length) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;

            parallaxElements.forEach(el => {
                // Adjust the speed (e.g., 0.3) for different intensities
                const speed = parseFloat(el.dataset.parallaxSpeed) || 0.3;
                const offsetY = -(scrollY * speed);
                
                // We target the element itself (e.g., the image)
                el.style.transform = `translateY(${offsetY}px)`;
            });
        }, { passive: true }); // Improve scroll performance
    },

    /**
     * Mouse-move parallax effect for hero elements.
     * Moves elements based on mouse position.
     */
    parallaxMouse() {
        const mouseParallaxElements = document.querySelectorAll('[data-mouse-parallax]');
        if (!mouseParallaxElements.length) return;

        const container = document.body; // Or a specific section

        container.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate mouse position from center (-1 to 1)
            const mouseX = (clientX / innerWidth - 0.5) * 2;
            const mouseY = (clientY / innerHeight - 0.5) * 2;

            mouseParallaxElements.forEach(el => {
                const strength = parseFloat(el.dataset.mouseParallax) || 0.01;
                const offsetX = mouseX * innerWidth * strength;
                const offsetY = mouseY * innerHeight * strength;

                el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });
    }
};