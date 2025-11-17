/**
 * utilities.js
 * * Handles all general site utilities:
 * - Sticky Navigation
 * - Mega Menu Toggle
 * - Smooth Scrolling
 * - Lazy Loading Images
 */

const LuxuryUtils = {
    init() {
        this.handleScroll(); // For logo
        window.addEventListener("scroll", () => this.handleScroll());

        this.megaMenu();
        this.smoothScroll();
        this.lazyLoad();
        this.mobileMenu(); // <-- ADD THIS LINE
    },

    handleScroll() {
        const heroLogo = document.getElementById("heroLogo");
        const navLogo = document.getElementById("navLogo");
        const navbar = document.getElementById("main-header"); // Use our existing ID
    
        // Safety check: If these elements don't exist (e.g., on shop.html), just apply the sticky header.
        if (!heroLogo || !navLogo || !navbar) {
            if (window.scrollY > 120) {
                 document.body.classList.add('scrolled-past-hero');
            } else {
                 document.body.classList.remove('scrolled-past-hero');
            }
            return;
        }
    
        // Logic for homepage (index.html)
        if (window.scrollY > 120) {
            // Scrolled Down
            heroLogo.style.transform = "scale(0.15) translateY(-250px)"; // User's value
            heroLogo.style.opacity = "0";
    
            navLogo.style.opacity = "1";
            navLogo.style.transform = "scale(1)";
    
            document.body.classList.add('scrolled-past-hero'); // For styling other pages
        } else {
            // At Top
            heroLogo.style.transform = "scale(1) translateY(0)";
            heroLogo.style.opacity = "1";
    
            navLogo.style.opacity = "0";
            navLogo.style.transform = "scale(0.5)"; // User's value
    
            document.body.classList.remove('scrolled-past-hero');
        }
    },

    /**
     * Toggles the Mega Menu on hover for the "Shop" link.
     */
    megaMenu() {
        const shopLink = document.getElementById('shop-link');
        const megaMenu = document.getElementById('mega-menu');
        const header = document.getElementById('main-header');

        if (!shopLink || !megaMenu || !header) return;

        let menuOpen = false;
        let timer;

        const openMenu = () => {
            clearTimeout(timer);
            menuOpen = true;
            megaMenu.style.height = `${megaMenu.scrollHeight}px`;
            megaMenu.style.zIndex = '40'; // Ensure it's above content but below header
            header.classList.add('menu-open');
            shopLink.setAttribute('aria-expanded', 'true');
        };

        const closeMenu = () => {
            timer = setTimeout(() => {
                menuOpen = false;
                megaMenu.style.height = '0px';
                megaMenu.style.zIndex = '-1';
                header.classList.remove('menu-open');
                shopLink.setAttribute('aria-expanded', 'false');
            }, 200); // 200ms delay to allow moving mouse to menu
        };

        // Open on hover
        shopLink.addEventListener('mouseenter', openMenu);
        
        // Keep open when hovering over menu
        megaMenu.addEventListener('mouseenter', () => clearTimeout(timer));

        // Close when leaving header area
        header.addEventListener('mouseleave', closeMenu);
    },

    /**
     * Implements smooth scrolling for anchor links.
     */
    smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                
                // Only act on valid hash links, ignore simple "#"
                if (href.length > 1 && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    /**
     * Lazy loads images using IntersectionObserver.
     * Looks for images with `data-src` attribute and `lazy` class.
     */
    lazyLoad() {
        const lazyImages = document.querySelectorAll('img.lazy[data-src]');
        if (!lazyImages.length) return;

        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('lazy-loaded');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '0px 0px 200px 0px' }); // Load 200px before it's in view

        lazyImages.forEach(img => {
            imgObserver.observe(img);
        });
    }
    ,

    /**
     * (ADD THIS NEW FUNCTION)
     * Toggles the Mobile Menu on click.
     */
    mobileMenu() {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const header = document.getElementById('main-header');
        const body = document.body;

        if (!hamburgerBtn || !mobileMenu || !header) return;

        hamburgerBtn.addEventListener('click', () => {
            const isMenuOpen = mobileMenu.classList.toggle('hidden');
            hamburgerBtn.setAttribute('aria-expanded', !isMenuOpen);

            if (!isMenuOpen) {
                // Menu is open
                header.classList.add('mobile-menu-open');
                body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Menu is closed
                header.classList.remove('mobile-menu-open');
                body.style.overflow = ''; // Restore scrolling
            }
        });
    },

    /**
     * Builds an array of image paths from the images-map.json file.
     * @param {string} rolePrefix - The prefix for the role (e.g., 'product-unisex').
     * @returns {Promise<string[]>} - A promise that resolves to an array of image paths.
     */
    async buildImageArrayFromMap(rolePrefix) {
        try {
            const response = await fetch('./images-map.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const imageMap = await response.json();
            
            const images = imageMap
                .filter(item => item.role.startsWith(rolePrefix))
                .sort((a, b) => {
                    const numA = parseInt(a.role.split('-').pop(), 10);
                    const numB = parseInt(b.role.split('-').pop(), 10);
                    return numA - numB;
                })
                .map(item => `images/${item.file}`);

            return images;
        } catch (error) {
            console.error('Failed to load or parse images-map.json:', error);
            return []; // Return empty array on error
        }
    }
};

// Export or initialize
// In a real module system: export default LuxuryUtils;
// For this single-file setup, we'll initialize on DOMContentLoaded in the HTML.