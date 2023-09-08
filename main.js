// Vue 3 app instance
const app = Vue.createApp({
    data() {
        return {
            // Sample product data (to be fetched from a backend)
            products: [
                {
                    id: 1,
                    name: "HOT PINK GLOSS",
                    description: "Beautiful glossy shimmery gloss perfect for your glam look.",
                    price: 25.99,
                    image: "images/product1.jpg"
                },
                {
                    id: 2,
                    name: "DEEP RED GLOSS",
                    description: "Make a statement with this deep red shade.",
                    price: 25.99,
                    image: "images/product2.jpg"
                },
                // Add more products here
            ]
        };
    }
});

// Product component
app.component('product-card', {
    props: ['product'],
    template: `
        <div class="product-card">
            <img :src="product.image" :alt="product.name">
            <h2>{{ product.name }}</h2>
            <p class="description">{{ product.description }}</p>
            <p class="price">\${{ product.price.toFixed(2) }}</p>
            <button>Add to Cart</button>
        </div>
    `
});

// Mount the app to an element with the id "product-listings"
app.mount('#product-listings');
