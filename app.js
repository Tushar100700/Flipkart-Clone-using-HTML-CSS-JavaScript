/**
 * Flipkart Clone - Main JavaScript
 * Implements all interactive functionality
 */

// Application Data
const appData = {
  products: [
    {
      id: 1,
      name: "Apple iPhone 15 Pro",
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=iPhone+15+Pro",
      price: 129900,
      originalPrice: 139900,
      discount: 7,
      rating: 4.5,
      category: "Electronics",
      subcategory: "Mobiles",
      brand: "Apple",
      description: "Latest iPhone with A17 Pro chip and ProRAW photography",
      features: ["128GB Storage", "6.1 inch Display", "48MP Camera", "5G Ready"]
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Galaxy+S24",
      price: 124999,
      originalPrice: 129999,
      discount: 4,
      rating: 4.4,
      category: "Electronics",
      subcategory: "Mobiles",
      brand: "Samsung",
      description: "Premium smartphone with S Pen and AI features",
      features: ["256GB Storage", "6.8 inch Display", "200MP Camera", "S Pen Included"]
    },
    {
      id: 3,
      name: "MacBook Air M3",
      image: "https://via.placeholder.com/300x300/F7E200/000000?text=MacBook+Air",
      price: 114900,
      originalPrice: 119900,
      discount: 4,
      rating: 4.6,
      category: "Electronics",
      subcategory: "Laptops",
      brand: "Apple",
      description: "Lightweight laptop with M3 chip and all-day battery",
      features: ["8GB RAM", "256GB SSD", "13.6 inch Retina", "M3 Chip"]
    },
    {
      id: 4,
      name: "Dell XPS 13 Plus",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Dell+XPS+13",
      price: 89990,
      originalPrice: 99990,
      discount: 10,
      rating: 4.3,
      category: "Electronics",
      subcategory: "Laptops",
      brand: "Dell",
      description: "Ultra-thin laptop with InfinityEdge display",
      features: ["16GB RAM", "512GB SSD", "13.4 inch 4K", "11th Gen Intel"]
    },
    {
      id: 5,
      name: "Sony WH-1000XM5 Headphones",
      image: "https://via.placeholder.com/300x300/F09120/FFFFFF?text=Sony+Headphones",
      price: 29990,
      originalPrice: 34990,
      discount: 14,
      rating: 4.7,
      category: "Electronics",
      subcategory: "Audio",
      brand: "Sony",
      description: "Premium noise cancelling headphones",
      features: ["30Hr Battery", "Quick Charge", "Touch Controls", "Hi-Res Audio"]
    },
    {
      id: 6,
      name: "Nike Air Jordan 1 Retro",
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=Air+Jordan+1",
      price: 12795,
      originalPrice: 14995,
      discount: 15,
      rating: 4.5,
      category: "Fashion",
      subcategory: "Footwear",
      brand: "Nike",
      description: "Classic basketball sneakers with premium leather",
      features: ["Premium Leather", "Air Cushioning", "Rubber Outsole", "Iconic Design"]
    },
    {
      id: 7,
      name: "Adidas Ultraboost 22",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Ultraboost+22",
      price: 16999,
      originalPrice: 19999,
      discount: 15,
      rating: 4.4,
      category: "Fashion",
      subcategory: "Footwear",
      brand: "Adidas",
      description: "Running shoes with Boost cushioning technology",
      features: ["Boost Cushioning", "Primeknit Upper", "Continental Rubber", "Energy Return"]
    },
    {
      id: 8,
      name: "Levi's 511 Slim Jeans",
      image: "https://via.placeholder.com/300x300/F7E200/000000?text=Levi%27s+511",
      price: 2999,
      originalPrice: 3999,
      discount: 25,
      rating: 4.2,
      category: "Fashion",
      subcategory: "Clothing",
      brand: "Levi's",
      description: "Classic slim fit jeans in premium denim",
      features: ["Slim Fit", "Cotton Blend", "5 Pocket Style", "Machine Washable"]
    },
    {
      id: 9,
      name: "Samsung 55\" 4K Smart TV",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Samsung+TV",
      price: 54990,
      originalPrice: 69990,
      discount: 21,
      rating: 4.3,
      category: "Electronics",
      subcategory: "TV & Appliances",
      brand: "Samsung",
      description: "55-inch 4K UHD Smart TV with HDR support",
      features: ["4K UHD", "Smart TV", "HDR Support", "Multiple HDMI Ports"]
    },
    {
      id: 10,
      name: "LG 260L Refrigerator",
      image: "https://via.placeholder.com/300x300/F09120/FFFFFF?text=LG+Fridge",
      price: 24990,
      originalPrice: 29990,
      discount: 17,
      rating: 4.1,
      category: "Electronics",
      subcategory: "TV & Appliances",
      brand: "LG",
      description: "Double door refrigerator with inverter compressor",
      features: ["260L Capacity", "Inverter Compressor", "LED Lighting", "Energy Efficient"]
    },
    {
      id: 11,
      name: "Apple Watch Series 9",
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=Apple+Watch",
      price: 41900,
      originalPrice: 45900,
      discount: 9,
      rating: 4.6,
      category: "Electronics",
      subcategory: "Wearables",
      brand: "Apple",
      description: "Advanced health and fitness tracking smartwatch",
      features: ["Health Tracking", "GPS", "Water Resistant", "Always-On Display"]
    },
    {
      id: 12,
      name: "Canon EOS R50 Camera",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Canon+R50",
      price: 56990,
      originalPrice: 64990,
      discount: 12,
      rating: 4.5,
      category: "Electronics",
      subcategory: "Cameras",
      brand: "Canon",
      description: "Mirrorless camera with 24.2MP sensor and 4K video",
      features: ["24.2MP Sensor", "4K Video", "WiFi Connectivity", "Compact Design"]
    },
    {
      id: 13,
      name: "H&M Cotton T-Shirt",
      image: "https://via.placeholder.com/300x300/F7E200/000000?text=H%26M+T-Shirt",
      price: 799,
      originalPrice: 999,
      discount: 20,
      rating: 4.0,
      category: "Fashion",
      subcategory: "Clothing",
      brand: "H&M",
      description: "Premium cotton t-shirt with comfortable fit",
      features: ["100% Cotton", "Regular Fit", "Machine Washable", "Multiple Colors"]
    },
    {
      id: 14,
      name: "Zara Formal Shirt",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Zara+Shirt",
      price: 2990,
      originalPrice: 3990,
      discount: 25,
      rating: 4.2,
      category: "Fashion",
      subcategory: "Clothing",
      brand: "Zara",
      description: "Slim fit formal shirt for office wear",
      features: ["Slim Fit", "Cotton Blend", "Non-Iron", "Classic Collar"]
    },
    {
      id: 15,
      name: "Fitbit Charge 5",
      image: "https://via.placeholder.com/300x300/F09120/FFFFFF?text=Fitbit+Charge",
      price: 19995,
      originalPrice: 24995,
      discount: 20,
      rating: 4.3,
      category: "Electronics",
      subcategory: "Wearables",
      brand: "Fitbit",
      description: "Advanced fitness tracker with GPS and health metrics",
      features: ["GPS Tracking", "Heart Rate Monitor", "Sleep Tracking", "7-Day Battery"]
    },
    {
      id: 16,
      name: "Kindle Paperwhite",
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=Kindle",
      price: 13999,
      originalPrice: 16999,
      discount: 18,
      rating: 4.4,
      category: "Books",
      subcategory: "E-Readers",
      brand: "Amazon",
      description: "Waterproof e-reader with adjustable warm light",
      features: ["Waterproof", "Adjustable Light", "8GB Storage", "6.8 inch Display"]
    },
    {
      id: 17,
      name: "Boat Airdopes 441",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Boat+Airdopes",
      price: 2499,
      originalPrice: 4990,
      discount: 50,
      rating: 4.1,
      category: "Electronics",
      subcategory: "Audio",
      brand: "Boat",
      description: "True wireless earbuds with quick charge",
      features: ["True Wireless", "Quick Charge", "IPX7 Rating", "Voice Assistant"]
    },
    {
      id: 18,
      name: "Mi 10000mAh Power Bank",
      image: "https://via.placeholder.com/300x300/F7E200/000000?text=Mi+Power+Bank",
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      rating: 4.2,
      category: "Electronics",
      subcategory: "Accessories",
      brand: "Mi",
      description: "Compact power bank with fast charging support",
      features: ["10000mAh Capacity", "Fast Charging", "Dual USB", "LED Indicator"]
    },
    {
      id: 19,
      name: "Puma Sports Jacket",
      image: "https://via.placeholder.com/300x300/F09120/FFFFFF?text=Puma+Jacket",
      price: 3499,
      originalPrice: 4999,
      discount: 30,
      rating: 4.0,
      category: "Fashion",
      subcategory: "Clothing",
      brand: "Puma",
      description: "Lightweight sports jacket for active lifestyle",
      features: ["Water Resistant", "Breathable Fabric", "Zip Closure", "Side Pockets"]
    },
    {
      id: 20,
      name: "Philips Air Fryer",
      image: "https://via.placeholder.com/300x300/1F74BA/FFFFFF?text=Philips+Fryer",
      price: 12990,
      originalPrice: 15990,
      discount: 19,
      rating: 4.4,
      category: "Electronics",
      subcategory: "TV & Appliances",
      brand: "Philips",
      description: "Healthy cooking with 90% less fat",
      features: ["1.2L Capacity", "Rapid Air Technology", "Dishwasher Safe", "Recipe App"]
    }
  ],
  categories: [
    {name: "Electronics", icon: "📱", subcategories: ["Mobiles", "Laptops", "Audio", "Cameras", "Wearables", "TV & Appliances", "Accessories"]},
    {name: "Fashion", icon: "👔", subcategories: ["Clothing", "Footwear", "Accessories", "Bags"]},
    {name: "Home & Kitchen", icon: "🏠", subcategories: ["Furniture", "Kitchen Appliances", "Home Decor"]},
    {name: "Books", icon: "📚", subcategories: ["Fiction", "Non-Fiction", "E-Readers"]},
    {name: "Sports", icon: "⚽", subcategories: ["Fitness", "Outdoor", "Team Sports"]}
  ],
  offers: [
    {title: "Up to 80% off", subtitle: "Electronics Sale", image: "https://via.placeholder.com/800x300/1F74BA/FFFFFF?text=Electronics+Sale"},
    {title: "Fashion Fest", subtitle: "Min 40% off on Fashion", image: "https://via.placeholder.com/800x300/F7E200/000000?text=Fashion+Fest"},
    {title: "Home Appliances", subtitle: "Great Indian Sale", image: "https://via.placeholder.com/800x300/F09120/FFFFFF?text=Home+Appliances"}
  ]
};

// DOM Elements
const DOM = {
  // Navigation elements
  navItems: document.getElementById('navItems'),
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  
  // Hero section
  heroSlider: document.getElementById('heroSlider'),
  
  // Categories section
  categoriesGrid: document.getElementById('categoriesGrid'),
  
  // Products section
  productsGrid: document.getElementById('productsGrid'),
  loading: document.getElementById('loading'),
  categoryFilter: document.getElementById('categoryFilter'),
  sortFilter: document.getElementById('sortFilter'),
  
  // Search
  searchInput: document.getElementById('searchInput'),
  searchBtn: document.getElementById('searchBtn'),
  searchSuggestions: document.getElementById('searchSuggestions'),
  
  // Cart
  cartBtn: document.getElementById('cartBtn'),
  cartCount: document.getElementById('cartCount'),
  cartSidebar: document.getElementById('cartSidebar'),
  cartClose: document.getElementById('cartClose'),
  cartContent: document.getElementById('cartContent'),
  cartItems: document.getElementById('cartItems'),
  cartTotal: document.getElementById('cartTotal'),
  emptyCart: document.getElementById('emptyCart'),
  cartFooter: document.getElementById('cartFooter'),
  
  // Product modal
  modalBackdrop: document.getElementById('modalBackdrop'),
  productModal: document.getElementById('productModal'),
  modalClose: document.getElementById('modalClose'),
  modalContent: document.getElementById('modalContent'),
  
  // Toast
  toastContainer: document.getElementById('toastContainer')
};

// Cart state
const cart = {
  items: [],
  
  // Add item to cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity
      });
    }
    
    this.updateCartUI();
    return true;
  },
  
  // Remove item from cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.updateCartUI();
  },
  
  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    
    if (item) {
      item.quantity = quantity;
      
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.updateCartUI();
      }
    }
  },
  
  // Calculate total price
  calculateTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  // Get total items count
  getItemsCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  },
  
  // Update cart UI
  updateCartUI() {
    // Update cart count
    DOM.cartCount.textContent = this.getItemsCount();
    
    // Update cart items
    if (this.items.length === 0) {
      DOM.emptyCart.style.display = 'flex';
      DOM.cartItems.style.display = 'none';
      DOM.cartFooter.style.display = 'none';
    } else {
      DOM.emptyCart.style.display = 'none';
      DOM.cartItems.style.display = 'flex';
      DOM.cartFooter.style.display = 'block';
      
      // Render cart items
      DOM.cartItems.innerHTML = this.items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">
              <span class="current-price">₹${item.price.toLocaleString()}</span>
              <span class="original-price">₹${item.originalPrice.toLocaleString()}</span>
              <span class="discount">${item.discount}% off</span>
            </div>
            <div class="cart-item-actions">
              <div class="quantity-control">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
              </div>
              <button class="remove-btn" data-id="${item.id}">REMOVE</button>
            </div>
          </div>
        </div>
      `).join('');
      
      // Update cart total
      DOM.cartTotal.textContent = this.calculateTotal().toLocaleString();
      
      // Add event listeners to cart items
      document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-id'));
          const item = this.items.find(item => item.id === id);
          if (item) this.updateQuantity(id, item.quantity - 1);
        });
      });
      
      document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-id'));
          const item = this.items.find(item => item.id === id);
          if (item) this.updateQuantity(id, item.quantity + 1);
        });
      });
      
      document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-id'));
          this.removeItem(id);
          app.showToast('Product removed from cart', 'success');
        });
      });
    }
  }
};

// Application logic
const app = {
  // Current filter state
  filters: {
    category: '',
    sort: 'default',
    search: ''
  },
  
  // Current slide index
  currentSlide: 0,
  
  // Initialize app
  init() {
    this.renderNavigation();
    this.renderHeroSlider();
    this.renderCategories();
    this.renderCategoryFilter();
    this.renderProducts();
    this.setupEventListeners();
  },
  
  // Render navigation menu
  renderNavigation() {
    DOM.navItems.innerHTML = appData.categories.map(category => `
      <div class="nav-item" data-category="${category.name}">
        <span class="category-icon">${category.icon}</span>
        <span>${category.name}</span>
      </div>
    `).join('');
  },
  
  // Render hero slider
  renderHeroSlider() {
    DOM.heroSlider.innerHTML = appData.offers.map((offer, index) => `
      <div class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${offer.image}')">
        <div class="hero-content">
          <h2>${offer.title}</h2>
          <p>${offer.subtitle}</p>
        </div>
      </div>
    `).join('');
    
    // Set up slider auto-rotation
    setInterval(() => {
      const slides = document.querySelectorAll('.hero-slide');
      slides[this.currentSlide].classList.remove('active');
      this.currentSlide = (this.currentSlide + 1) % slides.length;
      slides[this.currentSlide].classList.add('active');
    }, 5000);
  },
  
  // Render categories
  renderCategories() {
    DOM.categoriesGrid.innerHTML = appData.categories.map(category => `
      <div class="category-card" data-category="${category.name}">
        <div class="category-icon">${category.icon}</div>
        <div class="category-name">${category.name}</div>
      </div>
    `).join('');
  },
  
  // Render category filter
  renderCategoryFilter() {
    const categoryOptions = appData.categories.map(category => 
      `<option value="${category.name}">${category.name}</option>`
    ).join('');
    
    DOM.categoryFilter.innerHTML = `<option value="">All Categories</option>${categoryOptions}`;
  },
  
  // Filter and render products
  renderProducts() {
    // Show loading state
    DOM.loading.style.display = 'block';
    DOM.productsGrid.classList.add('loading');
    
    setTimeout(() => {
      let filteredProducts = [...appData.products];
      
      // Apply category filter
      if (this.filters.category) {
        filteredProducts = filteredProducts.filter(product => 
          product.category.toLowerCase() === this.filters.category.toLowerCase()
        );
      }
      
      // Apply search filter
      if (this.filters.search) {
        const searchLower = this.filters.search.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(searchLower) || 
          product.description.toLowerCase().includes(searchLower) || 
          product.brand.toLowerCase().includes(searchLower)
        );
      }
      
      // Apply sort
      switch (this.filters.sort) {
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'discount':
          filteredProducts.sort((a, b) => b.discount - a.discount);
          break;
        default:
          // Default sort (no specific sort)
          break;
      }
      
      // Hide loading
      DOM.loading.style.display = 'none';
      DOM.productsGrid.classList.remove('loading');
      
      // Render products
      if (filteredProducts.length === 0) {
        DOM.productsGrid.innerHTML = `
          <div class="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        `;
      } else {
        DOM.productsGrid.innerHTML = filteredProducts.map(product => `
          <div class="product-card" data-id="${product.id}">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
              <div class="product-brand">${product.brand}</div>
              <div class="product-name">${product.name}</div>
              <div class="product-rating">
                <div class="rating-badge">
                  ${product.rating} ★
                </div>
              </div>
              <div class="product-price">
                <span class="current-price">₹${product.price.toLocaleString()}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                <span class="discount">${product.discount}% off</span>
              </div>
            </div>
            <div class="product-actions">
              <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
              <button class="btn-buy-now" data-id="${product.id}">Buy Now</button>
            </div>
          </div>
        `).join('');
        
        // Add event listeners to product cards
        document.querySelectorAll('.product-card').forEach(card => {
          card.addEventListener('click', event => {
            // Prevent click on buttons from opening the modal
            if (event.target.closest('.btn-add-cart') || event.target.closest('.btn-buy-now')) {
              return;
            }
            
            const id = parseInt(card.getAttribute('data-id'));
            this.openProductModal(id);
          });
        });
        
        // Add event listeners to Add to Cart buttons
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
          btn.addEventListener('click', event => {
            event.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            const product = appData.products.find(p => p.id === id);
            if (product) {
              cart.addItem(product);
              this.showToast('Product added to cart', 'success');
            }
          });
        });
        
        // Add event listeners to Buy Now buttons
        document.querySelectorAll('.btn-buy-now').forEach(btn => {
          btn.addEventListener('click', event => {
            event.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            const product = appData.products.find(p => p.id === id);
            if (product) {
              cart.addItem(product);
              this.toggleCart(true);
            }
          });
        });
      }
    }, 500); // Simulate loading delay
  },
  
  // Open product details modal
  openProductModal(productId) {
    const product = appData.products.find(p => p.id === productId);
    
    if (!product) return;
    
    DOM.modalContent.innerHTML = `
      <div class="product-details-container">
        <div class="product-details-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details-info">
          <h2>${product.name}</h2>
          <div class="product-details-brand">${product.brand}</div>
          <div class="product-details-rating">
            <div class="rating-badge">
              ${product.rating} ★
            </div>
          </div>
          <div class="product-details-price">
            <span class="current-price">₹${product.price.toLocaleString()}</span>
            <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
            <span class="discount">${product.discount}% off</span>
          </div>
          <div class="product-details-description">
            <p>${product.description}</p>
          </div>
          <div class="product-details-features">
            <h3>Features</h3>
            <ul class="features-list">
              ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
          <div class="product-details-actions">
            <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
            <button class="btn-buy-now" data-id="${product.id}">Buy Now</button>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners to buttons in modal
    DOM.modalContent.querySelector('.btn-add-cart').addEventListener('click', () => {
      cart.addItem(product);
      this.showToast('Product added to cart', 'success');
    });
    
    DOM.modalContent.querySelector('.btn-buy-now').addEventListener('click', () => {
      cart.addItem(product);
      this.closeModal();
      this.toggleCart(true);
    });
    
    // Show modal
    DOM.modalBackdrop.classList.add('active');
  },
  
  // Close modal
  closeModal() {
    DOM.modalBackdrop.classList.remove('active');
  },
  
  // Toggle cart sidebar
  toggleCart(show) {
    if (show) {
      DOM.cartSidebar.classList.add('active');
    } else {
      DOM.cartSidebar.classList.remove('active');
    }
  },
  
  // Show search suggestions
  showSearchSuggestions(query) {
    if (!query) {
      DOM.searchSuggestions.classList.remove('active');
      return;
    }
    
    const queryLower = query.toLowerCase();
    const suggestions = appData.products
      .filter(product => 
        product.name.toLowerCase().includes(queryLower) || 
        product.brand.toLowerCase().includes(queryLower)
      )
      .slice(0, 5);
    
    if (suggestions.length === 0) {
      DOM.searchSuggestions.classList.remove('active');
      return;
    }
    
    DOM.searchSuggestions.innerHTML = suggestions.map(product => `
      <div class="suggestion-item" data-id="${product.id}">
        ${product.name} - ${product.brand}
      </div>
    `).join('');
    
    // Add event listeners to suggestions
    document.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.getAttribute('data-id'));
        this.openProductModal(id);
        DOM.searchSuggestions.classList.remove('active');
      });
    });
    
    DOM.searchSuggestions.classList.add('active');
  },
  
  // Show toast notification
  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    DOM.toastContainer.appendChild(toast);
    
    // Remove toast after animation completes
    setTimeout(() => {
      toast.remove();
    }, 3000);
  },
  
  // Setup event listeners
  setupEventListeners() {
    // Category filter change
    DOM.categoryFilter.addEventListener('change', () => {
      this.filters.category = DOM.categoryFilter.value;
      this.renderProducts();
    });
    
    // Sort filter change
    DOM.sortFilter.addEventListener('change', () => {
      this.filters.sort = DOM.sortFilter.value;
      this.renderProducts();
    });
    
    // Search input
    DOM.searchInput.addEventListener('input', () => {
      const query = DOM.searchInput.value.trim();
      this.showSearchSuggestions(query);
    });
    
    // Search button click
    DOM.searchBtn.addEventListener('click', () => {
      this.filters.search = DOM.searchInput.value.trim();
      DOM.searchSuggestions.classList.remove('active');
      this.renderProducts();
    });
    
    // Search input enter key
    DOM.searchInput.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        this.filters.search = DOM.searchInput.value.trim();
        DOM.searchSuggestions.classList.remove('active');
        this.renderProducts();
      }
    });
    
    // Close search suggestions when clicking outside
    document.addEventListener('click', event => {
      if (!event.target.closest('.search-container')) {
        DOM.searchSuggestions.classList.remove('active');
      }
    });
    
    // Cart button click
    DOM.cartBtn.addEventListener('click', () => {
      this.toggleCart(true);
    });
    
    // Cart close button click
    DOM.cartClose.addEventListener('click', () => {
      this.toggleCart(false);
    });
    
    // Modal close button click
    DOM.modalClose.addEventListener('click', () => {
      this.closeModal();
    });
    
    // Close modal when clicking on backdrop
    DOM.modalBackdrop.addEventListener('click', event => {
      if (event.target === DOM.modalBackdrop) {
        this.closeModal();
      }
    });
    
    // Category item click
    document.querySelectorAll('.nav-item, .category-card').forEach(item => {
      item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        if (category) {
          this.filters.category = category;
          DOM.categoryFilter.value = category;
          this.renderProducts();
          
          // Scroll to products section
          document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    
    // Mobile menu button
    DOM.mobileMenuBtn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
    });
  }
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});