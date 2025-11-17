/**
 * cart.js
 * Handles all dynamic functionality for the shopping cart page.
 * - Update quantities
 * - Remove items
 * - Recalculate totals
 */

const CartManager = {
    
    // Configuration for shipping costs
    shippingOptions: {
        standard: 15.00,
        express: 30.00,
    },

    init() {
        this.cartContainer = document.getElementById('cart-container');
        if (!this.cartContainer) return;

        this.bindEvents();
        this.updateAllTotals();
    },

    bindEvents() {
        this.cartContainer.addEventListener('click', (e) => {
            // Handle quantity changes
            if (e.target.matches('.quantity-plus') || e.target.matches('.quantity-minus')) {
                this.updateQuantity(e.target);
            }
            // Handle item removal
            if (e.target.matches('.remove-btn')) {
                this.removeItem(e.target);
            }
        });

        // Handle shipping cost changes
        document.querySelectorAll('input[name="shipping"]').forEach(radio => {
            radio.addEventListener('change', () => this.updateAllTotals());
        });
    },

    updateQuantity(button) {
        const itemRow = button.closest('.cart-item');
        const quantityInput = itemRow.querySelector('.quantity-input');
        let quantity = parseInt(quantityInput.value);

        if (button.classList.contains('quantity-plus')) {
            quantity++;
        } else if (button.classList.contains('quantity-minus') && quantity > 1) {
            quantity--;
        }

        quantityInput.value = quantity;
        this.updateLineTotal(itemRow);
    },

    removeItem(button) {
        const itemRow = button.closest('.cart-item');
        // Add a fade-out animation for a smoother UX
        itemRow.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        itemRow.style.opacity = '0';
        itemRow.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            itemRow.remove();
            this.updateAllTotals();
        }, 300);
    },

    updateLineTotal(itemRow) {
        const price = parseFloat(itemRow.dataset.price);
        const quantity = parseInt(itemRow.querySelector('.quantity-input').value);
        const lineTotalEl = itemRow.querySelector('.line-total');
        
        const lineTotal = price * quantity;
        lineTotalEl.textContent = this.formatCurrency(lineTotal);

        this.updateAllTotals();
    },

    updateAllTotals() {
        const itemRows = this.cartContainer.querySelectorAll('.cart-item');
        let subtotal = 0;

        itemRows.forEach(row => {
            const price = parseFloat(row.dataset.price);
            const quantity = parseInt(row.querySelector('.quantity-input').value);
            subtotal += price * quantity;
        });

        const selectedShipping = document.querySelector('input[name="shipping"]:checked').value;
        const shippingCost = this.shippingOptions[selectedShipping] || 0;

        const total = subtotal + shippingCost;

        // Update DOM
        document.getElementById('cart-subtotal').textContent = this.formatCurrency(subtotal);
        document.getElementById('cart-total').textContent = this.formatCurrency(total);
        document.getElementById('header-cart-count').textContent = itemRows.length;

        // Handle empty cart state
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const cartContents = document.getElementById('cart-contents');
        if (itemRows.length === 0) {
            cartContents.classList.add('hidden');
            emptyCartMessage.classList.remove('hidden');
        } else {
            cartContents.classList.remove('hidden');
            emptyCartMessage.classList.add('hidden');
        }
    },

    formatCurrency(amount) {
        return `$${amount.toFixed(2)}`;
    }
};