const allProducts = {
    // Men's
    "men1": { id: "men1", name: "Luffy Skull Tee", price: "$120.00", image: "./images/men1.png", description: "Iconic tee for the future Pirate King's fans." },
    "men2": { id: "men2", name: "Zoro Graphic Tee", price: "$125.00", image: "./images/men2.png", description: "A sharp design for the world's greatest swordsman." },
    "men3": { id: "men3", name: "Straw Hat Crew Tee", price: "$130.00", image: "./images/men3.png", description: "Show your allegiance to the Straw Hat pirates." },
    "men4": { id: "men4", name: "One Piece Collage Tee", price: "$115.00", image: "./images/men4.png", description: "Featuring a collage of iconic moments." },
    "men5": { id: "men5", name: "Pirate King Tee", price: "$140.00", image: "./images/men5.png", description: "A bold statement tee for true fans." },
    "men6": { id: "men6", name: "Gear 5 Luffy Tee", price: "$150.00", image: "./images/men6.jpg", description: "Unleash the power of the sun god with this exclusive tee." },
    "men7": { id: "men7", name: "Sanji's Kitchen Tee", price: "$120.00", image: "./images/men7.jpg", description: "A tee for the culinary artist of the seas." },
    "men8": { id: "men8" ,name: "Chopper's Remedy Tee", price: "$110.00", image: "./images/men8.png", description: "A cute and stylish tee featuring the crew's doctor." },
    "men9": { id: "men9", name: "Ace Flame Tee", price: "$135.00", image: "./images/men9.jpg", description: "Carry the will of Fire Fist Ace." },
    "men10": { id: "men10", name: "Shanks Red Force Tee", price: "$145.00", image: "./images/men10.jpeg", description: "A powerful tee inspired by the legendary Yonko." },
    "men11": { id: "men11", name: "Minimalist Jolly Roger", price: "$95.00", image: "./images/download (1).jpeg", description: "A subtle nod to the pirate life." },
    "men12": { id: "men12", name: "Grand Line Map Tee", price: "$115.00", image: "./images/download (2).jpeg", description: "Chart your course with this Grand Line map tee." },
    "men13": { id: "men13", name: "Wanted Poster Tee", price: "$130.00", image: "./images/download.jpeg", description: "Get your own wanted poster, right on your shirt." },

    // Women's
    "women1": { id: "women1", name: "Luffy Summer Crop", price: "$90.00", image: "./images/women1.PNG", description: "A stylish crop top for sunny adventures." },
    "women2": { id: "women2", name: "Nami's Tangerine Top", price: "$95.00", image: "./images/women2.jpg", description: "A fresh and fruity top inspired by the crew's navigator." },
    "women3": { id: "women3", name: "Robin's Bloom Tee", price: "$105.00", image: "./images/women3.jpg", description: "An elegant tee for the archaeologist of the crew." },
    "women4": { id: "women4", name: "Vivi's Desert Blue", price: "$100.00", image: "./images/women4.jpg", description: "A top inspired by the princess of Alabasta." },
    "women5": { id: "women5", name: "Perona Ghostly Tee", price: "$95.00", image: "./images/women5.PNG", description: "A spooky and cute tee for the Ghost Princess." },
    "women6": { id: "women6", name: "Hancock's Charm Tee", price: "$110.00", image: "./images/women6.PNG", description: "A tee that's as captivating as the Pirate Empress." },
    "women7": { id: "women7", name: "Sunny Go Crop Top", price: "$85.00", image: "./images/women7.jpeg", description: "Sail the seas in style with this Sunny Go crop top." },
    "women8": { id: "women8", name: "Log Pose Tee", price: "$90.00", image: "./images/women8.jpeg", description: "Never lose your way with this Log Pose tee." },
    "women9": { id: "women9", name: "Carrot Sulong Form", price: "$100.00", image: "./images/women9.jpeg", description: "Unleash your inner power with this Sulong Carrot tee." },
    "women10": { id: "women10", name: "Yamato's Honor Tee", price: "$115.00", image: "./images/women10.jpeg", description: "A tee for the honorable daughter of Kaido." },

    // T-Shirts
    "tshirt1": { id: "tshirt1", name: "Star Wars Pocket Tee", price: "$85.00", image: "./images/t-shirt.jpg", description: "A subtle pocket tee for fans of the galaxy far, far away." },
    "tshirt2": { id: "tshirt2", name: "Luffy Joyboy Tee", price: "$90.00", image: "./images/t-shirt1.jpg", description: "Celebrate the return of Joyboy with this vibrant tee." },
    "tshirt3": { id: "tshirt3", name: "Joyboy Minimal Tee", price: "$80.00", image: "./images/t-shirt1-1.jpg", description: "A minimalist design for the modern Joyboy fan." },
    "tshirt4": { id: "tshirt4", name: "Zoro Ashura Tee", price: "$90.00", image: "./images/t-shirt2.jpg", description: "Channel the demon spirit of Ashura with this powerful tee." },
    "tshirt5": { id: "tshirt5", name: "Three Sword Style Tee", price: "$85.00", image: "./images/t-shirt2-1.jpg", description: "Master the three sword style with this sharp tee." },
    "tshirt6": { id: "tshirt6", name: "King of Hell Tee", price: "$95.00", image: "./images/t-shirt2-2.jpg", description: "Embrace the King of Hell with this badass design." },
    "tshirt7": { id: "tshirt7", name: "Sanji Diable Jambe Tee", price: "$90.00", image: "./images/t-shirt3.png", description: "Ignite your passion with this Diable Jambe tee." },
    "tshirt8": { id: "tshirt8", name: "Black Leg Sanji Tee", price: "$85.00", image: "./images/t-shirt3-1.png", description: "A classic tee for fans of the Straw Hats' cook." },
    "tshirt9": { id: "tshirt9", name: "Law Room Tee", price: "$95.00", image: "./images/t-shirt4.jpg", description: "Control your domain with this 'Room' tee." },
    "tshirt10": { id: "tshirt10", name: "Surgeon of Death Tee", price: "$90.00", image: "./images/t-shirt4-1.png", description: "A tee for the cool and calculating Surgeon of Death." },
    "tshirt11": { id: "tshirt11", name: "Kid Punk Gibson Tee", price: "$95.00", image: "./images/t-shirt5.png", description: "Unleash magnetic fury with this Captain Kid tee." },
    "tshirt12": { id: "tshirt12", name: "Captain Kid Tee", price: "$90.00", image: "./images/t-shirt5-1.png", description: "A bold design for the fearsome pirate captain." },
    "tshirt13": { id: "tshirt13", name: "Yellow Pirate Tee", price: "$75.00", image: "./images/yellow t.PNG", description: "A bright and cheerful tee for any pirate fan." },
    "tshirt14": { id: "tshirt14", name: "Sketch Luffy Tee", price: "$80.00", image: "./images/nobg (1).jpeg", description: "A stylish sketch of the future Pirate King." },
    "tshirt15": { id: "tshirt15", name: "Sketch Zoro Tee", price: "$80.00", image: "./images/nobg (2).jpeg", description: "A hand-drawn look for the master swordsman." },
    "tshirt16": { id: "tshirt16", name: "Sketch Sanji Tee", price: "$80.00", image: "./images/nobg (3).jpeg", description: "A sketchy design for the crew's fiery cook." },
    "tshirt17": { id: "tshirt17", name: "Sketch Nami Tee", price: "$80.00", image: "./images/nobg(4).jpeg", description: "A beautifully sketched tee of the Straw Hat navigator." },
    "tshirt18": { id: "tshirt18", name: "Clean Luffy Tee", price: "$85.00", image: "./images/nobg_4_-removebg-preview.png", description: "A clean and modern design of Monkey D. Luffy." },
    "tshirt19": { id: "tshirt19", name: "Clean Zoro Tee", price: "$85.00", image: "./images/nobg__1_-removebg-preview.png", description: "A sharp and clean design of Roronoa Zoro." },
    "tshirt20": { id: "tshirt20", name: "Clean Sanji Tee", price: "$85.00", image: "./images/nobg__2_-removebg-preview.png", description: "A sleek and stylish design of Vinsmoke Sanji." },
    "tshirt21": { id: "tshirt21", name: "Clean Nami Tee", price: "$85.00", image: "./images/nobg__3_-removebg-preview.png", description: "A crisp and clean design of the beautiful Nami." },

    // Default / Fallback
    "default": {
        id: 'default',
        name: 'Tech-Weave Cargo Pant',
        price: '$199',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        thumbs: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        ],
        description: "The Tech-Weave Cargo Pant is the pinnacle of form and function. Crafted from a lightweight, water-repellent synthetic blend, it's designed to move with you. The silhouette is relaxed yet tapered, offering a modern aesthetic that doesn't compromise on utility."
    }
};

function findProductById(id) {
    return allProducts[id] || null;
}

function loadProductData() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = findProductById(productId) || allProducts['default'];

    const nameEl = document.getElementById('product-name');
    const productSection = document.getElementById('product-section');
    if (product && nameEl) { // Check if on product page
        document.title = `${product.name} - WEAR TOME`;
        nameEl.textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        const descriptionEl = document.getElementById('product-description');
        const accordionDescriptionEl = document.getElementById('accordion-description');
        const desc = product.description || `Discover the style and comfort of the ${product.name}. A perfect addition to your collection.`;
        descriptionEl.textContent = desc;
        accordionDescriptionEl.textContent = desc;

        // NEW: Vertical Image Gallery Logic
        const imageGallery = document.getElementById('product-image-gallery');
        const images = product.thumbs && product.thumbs.length > 0 ? product.thumbs : [product.image];
        
        imageGallery.innerHTML = images.map((imgSrc, index) => {
            // Use a higher resolution for the main gallery if thumb URLs are provided
            const highResSrc = imgSrc.includes('w=200') ? imgSrc.replace('w=200', 'w=1200') : imgSrc;
            return `
                <div class="overflow-hidden bg-light aspect-[4/5]"><img data-src="${highResSrc}" alt="${product.name} - View ${index + 1}" class="lazy w-full h-full object-cover"></div>
            `;
        }).join('');

    } else {
        if (productSection) {
            productSection.innerHTML = '<div class="text-center w-full py-24"><h1 class="text-center text-4xl font-serif text-primary">Product not found.</h1><a href="shop.html" class="text-accent underline mt-4 inline-block">Return to shop</a></div>';
        }
    }
}

const RelatedProducts = {
    init() {
        const allProductKeys = Object.keys(allProducts).filter(key => key !== 'default');
        const currentProductId = new URLSearchParams(window.location.search).get('id');

        // Get 8 random, unique products that are not the current one
        const relatedProducts = [];
        const usedIndexes = new Set();
        if (currentProductId) {
            const currentIndex = allProductKeys.indexOf(currentProductId);
            if (currentIndex > -1) {
                usedIndexes.add(currentIndex);
            }
        }

        while (relatedProducts.length < 8 && relatedProducts.length < allProductKeys.length - 1) {
            const randomIndex = Math.floor(Math.random() * allProductKeys.length);
            if (!usedIndexes.has(randomIndex)) {
                const productKey = allProductKeys[randomIndex];
                relatedProducts.push(allProducts[productKey]);
                usedIndexes.add(randomIndex);
            }
        }

        this.displayProducts(relatedProducts);
    },

    displayProducts(products) {
        const wrapper = document.getElementById('related-products-wrapper');
        if (!wrapper || products.length === 0) return;

        wrapper.innerHTML = products.map(p => `
            <div class="slider-slide">
                <a href="product.html?id=${p.id}" class="product-card block w-full">
                    <div class="relative overflow-hidden bg-light aspect-square">
                        <img src="${p.image}" alt="${p.name}" class="product-image">
                        <div class="neon-highlight"></div>
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-semibold">${p.name}</h3>
                        <p class="mt-1 text-lg text-zinc-900">${p.price}</p>
                    </div>
                </a>
            </div>
        `).join('');

        // Initialize the slider for related products
        new LuxurySlider('#related-products-slider', { 
            slidesToShow: 4, 
            gap: 20,
            autoplay: true,
            autoplaySpeed: 3000, // 3 seconds
            preventClicks: true });
    }
};

const RecentlyViewed = {
    logProductView() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        if (!productId) return;

        const product = findProductById(productId);
        if (!product) return;

        const viewedProduct = { id: product.id, name: product.name, price: product.price, image: product.image, url: window.location.href };
        let viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        viewed = viewed.filter(p => p.id !== viewedProduct.id);
        viewed.unshift(viewedProduct);
        viewed = viewed.slice(0, 5); // Keep only the last 5
        localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
    },

    displayProducts() {
        const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        if (viewed.length === 0) return;

        const section = document.getElementById('recently-viewed-section');
        const wrapper = document.getElementById('recently-viewed-wrapper');
        
        wrapper.innerHTML = viewed.map(p => `
            <div class="slider-slide">
                <a href="${p.url}" class="product-card block w-full">
                    <div class="relative overflow-hidden bg-light aspect-square">
                        <img src="${p.image}" alt="${p.name}" class="product-image">
                        <div class="neon-highlight"></div>
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-semibold">${p.name}</h3>
                        <p class="mt-1 text-lg text-zinc-900">${p.price}</p>
                    </div>
                </a>
            </div>
        `).join('');

        section.classList.remove('hidden');
        new LuxurySlider('#recently-viewed-slider', {
            slidesToShow: 4,
            gap: 20,
            autoplay: true,
            autoplaySpeed: 4500, // 4.5 seconds
            preventClicks: true
        });
    }
};