/**
 * sliders.js
 * * A custom, vanilla JS, drag-enabled slider class.
 * Recreates a "Swiper-like" experience for luxury carousels.
 */

class LuxurySlider {
    constructor(selector, options = {}) {
        this.container = document.querySelector(selector);
        if (!this.container) return;

        this.wrapper = this.container.querySelector('.slider-wrapper');
        this.slides = Array.from(this.wrapper.children);
        
        // Default options
        this.options = {
            slidesToShow: 4,
            gap: 20,
            ...options
        };

        this.navPrev = document.getElementById(`${this.container.id}-prev`);
        this.navNext = document.getElementById(`${this.container.id}-next`);

        // State
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.slideWidth = 0;
        this.isDragging = false;
        this.startX = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;

        this.init();
    }

    init() {
        this.setupStyles();
        this.bindEvents();
    }

    setupStyles() {
        // Calculate slide width based on options
        const containerWidth = this.container.clientWidth;
        this.slideWidth = (containerWidth - (this.options.gap * (this.options.slidesToShow - 1))) / this.options.slidesToShow;
        
        this.wrapper.style.display = 'flex';
        this.wrapper.style.gap = `${this.options.gap}px`;
        
        this.slides.forEach(slide => {
            slide.style.flex = `0 0 ${this.slideWidth}px`;
        });

        this.setSliderPosition();
    }

    bindEvents() {
        // Navigation buttons
        if (this.navPrev) this.navPrev.addEventListener('click', () => this.prev());
        if (this.navNext) this.navNext.addEventListener('click', () => this.next());

        // Drag events (Mouse)
        this.wrapper.addEventListener('mousedown', (e) => this.dragStart(e));
        this.wrapper.addEventListener('mousemove', (e) => this.drag(e));
        this.wrapper.addEventListener('mouseup', () => this.dragEnd());
        this.wrapper.addEventListener('mouseleave', () => this.dragEnd());
        
        // Prevent image drag
        this.slides.forEach(slide => {
            slide.querySelector('img')?.addEventListener('dragstart', (e) => e.preventDefault());
        });

        // Touch events
        this.wrapper.addEventListener('touchstart', (e) => this.dragStart(e.touches[0]));
        this.wrapper.addEventListener('touchmove', (e) => this.drag(e.touches[0]));
        this.wrapper.addEventListener('touchend', () => this.dragEnd());
        
        // Re-calculate on resize
        window.addEventListener('resize', () => this.setupStyles());
    }

    dragStart(e) {
        this.isDragging = true;
        this.startX = e.clientX || e.pageX;
        this.wrapper.style.transition = 'none'; // Disable transition while dragging
        this.prevTranslate = this.currentTranslate;
    }

    drag(e) {
        if (!this.isDragging) return;
        const currentX = e.clientX || e.pageX;
        const diff = currentX - this.startX;
        this.currentTranslate = this.prevTranslate + diff;
        
        // Limit dragging bounds
        const maxTranslate = 0;
        const minTranslate = -(this.slideWidth + this.options.gap) * (this.totalSlides - this.options.slidesToShow);

        if (this.currentTranslate > maxTranslate) this.currentTranslate = maxTranslate;
        if (this.currentTranslate < minTranslate) this.currentTranslate = minTranslate;

        this.setSliderPosition();
    }

    dragEnd() {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        const dragThreshold = this.slideWidth / 4;
        const movedBy = this.currentTranslate - this.prevTranslate;

        // Snap to nearest slide
        if (movedBy < -dragThreshold) {
            this.next();
        } else if (movedBy > dragThreshold) {
            this.prev();
        } else {
            // Snap back
            this.setSliderPosition(true);
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
        this.setSliderPosition(true);
    }

    next() {
        const maxIndex = this.totalSlides - this.options.slidesToShow;
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
        }
        this.setSliderPosition(true);
    }

    setSliderPosition(withTransition = false) {
        if (withTransition) {
            this.wrapper.style.transition = 'transform 0.5s var(--ease-lux)';
        } else {
            this.wrapper.style.transition = 'none';
        }
        
        // Calculate the translate value
        // We update currentTranslate only when not dragging
        if (!this.isDragging) {
             this.currentTranslate = -this.currentIndex * (this.slideWidth + this.options.gap);
        }
       
        this.wrapper.style.transform = `translateX(${this.currentTranslate}px)`;
        
        // Update button states
        this.updateNav();
    }
    
    updateNav() {
        if (!this.navPrev || !this.navNext) return;
        
        if (this.currentIndex === 0) {
            this.navPrev.disabled = true;
            this.navPrev.classList.add('disabled');
        } else {
            this.navPrev.disabled = false;
            this.navPrev.classList.remove('disabled');
        }
        
        const maxIndex = this.totalSlides - this.options.slidesToShow;
        if (this.currentIndex >= maxIndex) {
            this.navNext.disabled = true;
            this.navNext.classList.add('disabled');
        } else {
            this.navNext.disabled = false;
            this.navNext.classList.remove('disabled');
        }
    }
}