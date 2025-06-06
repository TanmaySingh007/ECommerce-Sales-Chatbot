import { Product } from '@/types';

// Enhanced E-commerce Product Database (150+ items)
export const mockProducts: Product[] = [
// Electronics - Smartphones
{
  id: 'phone-001',
  name: 'iPhone 15 Pro Max',
  description: 'The ultimate iPhone with titanium design, Action Button, and Pro camera system',
  price: 1199,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
  rating: 4.9,
  reviews: 2450,
  inStock: true,
  brand: 'Apple',
  specifications: {
    'Screen Size': '6.7 inches',
    'Storage': '256GB',
    'Camera': '48MP Pro Camera System',
    'Battery': 'Up to 29 hours video playback'
  }
},
{
  id: 'phone-002',
  name: 'Samsung Galaxy S24 Ultra',
  description: 'Flagship Android with S Pen, 200MP camera, and AI-powered features',
  price: 1299,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
  rating: 4.8,
  reviews: 1890,
  inStock: true,
  brand: 'Samsung',
  specifications: {
    'Screen Size': '6.8 inches',
    'Storage': '512GB',
    'Camera': '200MP Quad Camera',
    'Battery': '5000mAh with 45W fast charging'
  }
},
{
  id: 'phone-003',
  name: 'Google Pixel 8 Pro',
  description: 'AI-first smartphone with Magic Eraser, Best Take, and pure Android',
  price: 999,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
  rating: 4.7,
  reviews: 1250,
  inStock: true,
  brand: 'Google',
  specifications: {
    'Screen Size': '6.7 inches',
    'Storage': '256GB',
    'Camera': '50MP Pro Triple Camera',
    'Battery': '5050mAh with wireless charging'
  }
},
{
  id: 'phone-004',
  name: 'OnePlus 12',
  description: 'Flagship killer with Snapdragon 8 Gen 3 and ultra-fast charging',
  price: 799,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
  rating: 4.6,
  reviews: 890,
  inStock: true,
  brand: 'OnePlus',
  specifications: {
    'Screen Size': '6.82 inches',
    'Storage': '256GB',
    'Camera': '50MP Triple Camera',
    'Battery': '5400mAh with 100W SuperVOOC'
  }
},

// Electronics - Laptops
{
  id: 'laptop-001',
  name: 'MacBook Pro 16"',
  description: 'Professional powerhouse with M3 Max chip for demanding workflows',
  price: 2999,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
  rating: 4.9,
  reviews: 1450,
  inStock: true,
  brand: 'Apple',
  specifications: {
    'Screen Size': '16.2 inches',
    'Processor': 'Apple M3 Max',
    'RAM': '32GB',
    'Storage': '1TB SSD'
  }
},
{
  id: 'laptop-002',
  name: 'Dell XPS 15',
  description: 'Creator laptop with OLED display and RTX graphics',
  price: 2199,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
  rating: 4.6,
  reviews: 920,
  inStock: true,
  brand: 'Dell',
  specifications: {
    'Screen Size': '15.6 inches OLED',
    'Processor': 'Intel Core i7-13700H',
    'RAM': '32GB',
    'Storage': '1TB SSD'
  }
},
{
  id: 'laptop-003',
  name: 'ASUS ROG Zephyrus G16',
  description: 'Gaming laptop with RTX 4080 and 240Hz display',
  price: 2799,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
  rating: 4.7,
  reviews: 780,
  inStock: true,
  brand: 'ASUS',
  specifications: {
    'Screen Size': '16 inches QHD',
    'Processor': 'AMD Ryzen 9 7940HS',
    'GPU': 'RTX 4080',
    'RAM': '32GB DDR5'
  }
},
{
  id: 'laptop-004',
  name: 'Surface Laptop Studio 2',
  description: 'Versatile 2-in-1 laptop with touchscreen and RTX graphics',
  price: 2399,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
  rating: 4.5,
  reviews: 650,
  inStock: true,
  brand: 'Microsoft',
  specifications: {
    'Screen Size': '14.4 inches Touchscreen',
    'Processor': 'Intel Core i7-13700H',
    'GPU': 'RTX 4060',
    'RAM': '32GB'
  }
},

// Electronics - Audio
{
  id: 'headphones-001',
  name: 'Sony WH-1000XM5',
  description: 'Industry-leading noise canceling with 30-hour battery life',
  price: 399,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  rating: 4.8,
  reviews: 2150,
  inStock: true,
  brand: 'Sony',
  specifications: {
    'Type': 'Over-ear Wireless',
    'Noise Canceling': 'Industry-leading',
    'Battery Life': '30 hours',
    'Quick Charge': '3 min = 3 hours'
  }
},
{
  id: 'headphones-002',
  name: 'AirPods Pro 2nd Gen',
  description: 'Adaptive Audio with Personalized Spatial Audio and MagSafe charging',
  price: 249,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
  rating: 4.7,
  reviews: 3200,
  inStock: true,
  brand: 'Apple',
  specifications: {
    'Type': 'True Wireless Earbuds',
    'Noise Canceling': 'Adaptive Transparency',
    'Battery Life': '6 hours + 24 hours case',
    'Charging': 'Lightning + MagSafe'
  }
},
{
  id: 'headphones-003',
  name: 'Bose QuietComfort Ultra',
  description: 'Immersive audio with world-class noise cancellation',
  price: 429,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
  rating: 4.6,
  reviews: 1190,
  inStock: true,
  brand: 'Bose',
  specifications: {
    'Type': 'Over-ear Wireless',
    'Noise Canceling': 'World-class',
    'Battery Life': '24 hours',
    'Immersive Audio': 'Spatial Audio'
  }
},
{
  id: 'speakers-001',
  name: 'Sonos Era 300',
  description: 'Spatial Audio speaker with Dolby Atmos and voice control',
  price: 449,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
  rating: 4.8,
  reviews: 890,
  inStock: true,
  brand: 'Sonos',
  specifications: {
    'Type': 'Smart Speaker',
    'Audio': 'Dolby Atmos',
    'Connectivity': 'WiFi + Bluetooth',
    'Voice Control': 'Alexa + Google'
  }
},

// Fashion - Women's
{
  id: 'fashion-w-001',
  name: 'Premium Cashmere Sweater',
  description: 'Luxuriously soft 100% cashmere sweater in elegant neutral tones',
  price: 189,
  category: 'Fashion',
  image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400',
  rating: 4.7,
  reviews: 450,
  inStock: true,
  brand: 'LuxeWear',
  specifications: {
    'Material': '100% Cashmere',
    'Care': 'Dry Clean Only',
    'Fit': 'Relaxed',
    'Origin': 'Scottish Cashmere'
  }
},
{
  id: 'fashion-w-002',
  name: 'Silk Midi Dress',
  description: 'Elegant silk dress perfect for both office and evening wear',
  price: 159,
  category: 'Fashion',
  image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
  rating: 4.6,
  reviews: 520,
  inStock: true,
  brand: 'Elegante',
  specifications: {
    'Material': '100% Mulberry Silk',
    'Length': 'Midi',
    'Sleeve': 'Three-quarter',
    'Occasion': 'Versatile'
  }
},
{
  id: 'fashion-w-003',
  name: 'Designer Handbag',
  description: 'Genuine leather handbag with gold hardware and adjustable strap',
  price: 299,
  category: 'Fashion',
  image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
  rating: 4.8,
  reviews: 780,
  inStock: true,
  brand: 'Bellissimo',
  specifications: {
    'Material': 'Italian Leather',
    'Hardware': '24k Gold Plated',
    'Size': 'Medium',
    'Interior': 'Silk Lined'
  }
},

// Fashion - Men's
{
  id: 'fashion-m-001',
  name: 'Merino Wool Suit',
  description: 'Tailored slim-fit suit in premium merino wool',
  price: 599,
  category: 'Fashion',
  image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
  rating: 4.9,
  reviews: 320,
  inStock: true,
  brand: 'Sartorial',
  specifications: {
    'Material': '100% Merino Wool',
    'Fit': 'Slim Tailored',
    'Lining': 'Half Canvas',
    'Occasions': 'Business, Formal'
  }
},
{
  id: 'fashion-m-002',
  name: 'Leather Dress Shoes',
  description: 'Handcrafted Oxford shoes in premium Italian leather',
  price: 329,
  category: 'Fashion',
  image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
  rating: 4.7,
  reviews: 450,
  inStock: true,
  brand: 'Cobbler & Co',
  specifications: {
    'Material': 'Italian Calfskin',
    'Construction': 'Goodyear Welted',
    'Sole': 'Leather',
    'Style': 'Oxford'
  }
},
{
  id: 'fashion-m-003',
  name: 'Swiss Automatic Watch',
  description: 'Precision Swiss movement with sapphire crystal and steel bracelet',
  price: 1299,
  category: 'Fashion',
  image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400',
  rating: 4.8,
  reviews: 290,
  inStock: true,
  brand: 'Chronos',
  specifications: {
    'Movement': 'Swiss Automatic',
    'Case': '42mm Stainless Steel',
    'Crystal': 'Sapphire',
    'Water Resistance': '100m'
  }
},

// Home & Living
{
  id: 'home-001',
  name: 'Smart Home Hub',
  description: 'Control all your smart devices with voice commands and app',
  price: 199,
  category: 'Home & Living',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
  rating: 4.5,
  reviews: 1250,
  inStock: true,
  brand: 'SmartLife',
  specifications: {
    'Compatibility': 'Alexa, Google, Apple',
    'Connectivity': 'WiFi, Zigbee, Z-Wave',
    'Range': 'Up to 300ft',
    'Devices': 'Control 200+ devices'
  }
},
{
  id: 'home-002',
  name: 'Luxury Bedding Set',
  description: 'Egyptian cotton bedding set with 1000 thread count',
  price: 249,
  category: 'Home & Living',
  image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
  rating: 4.8,
  reviews: 890,
  inStock: true,
  brand: 'DreamCloud',
  specifications: {
    'Material': '100% Egyptian Cotton',
    'Thread Count': '1000 TC',
    'Weave': 'Percale',
    'Set Includes': 'Duvet, 2 Pillowcases, Fitted Sheet'
  }
},
{
  id: 'home-003',
  name: 'Robot Vacuum & Mop',
  description: 'AI-powered cleaning with LiDAR mapping and auto-empty station',
  price: 899,
  category: 'Home & Living',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
  rating: 4.6,
  reviews: 1450,
  inStock: true,
  brand: 'CleanBot Pro',
  specifications: {
    'Navigation': 'LiDAR Mapping',
    'Runtime': '180 minutes',
    'Features': 'Vacuum + Mop + Auto-empty',
    'App Control': 'iOS + Android'
  }
},
{
  id: 'home-004',
  name: 'Espresso Machine',
  description: 'Professional-grade espresso machine with milk frother',
  price: 699,
  category: 'Home & Living',
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
  rating: 4.7,
  reviews: 650,
  inStock: true,
  brand: 'BrewMaster',
  specifications: {
    'Pressure': '15 Bar',
    'Boiler': 'Dual Boiler System',
    'Grinder': 'Built-in Burr Grinder',
    'Capacity': '2.5L Water Tank'
  }
},

// Sports & Fitness
{
  id: 'fitness-001',
  name: 'Smart Fitness Mirror',
  description: 'Interactive workout mirror with live and on-demand classes',
  price: 1495,
  category: 'Sports & Fitness',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
  rating: 4.6,
  reviews: 450,
  inStock: true,
  brand: 'FitMirror',
  specifications: {
    'Display': '43" 4K Mirror Display',
    'Classes': '10,000+ On-Demand',
    'Trainers': 'Certified Personal Trainers',
    'Subscription': 'Monthly membership required'
  }
},
{
  id: 'fitness-002',
  name: 'Premium Yoga Mat',
  description: 'Non-slip eco-friendly yoga mat with alignment guide',
  price: 89,
  category: 'Sports & Fitness',
  image: 'https://images.unsplash.com/photo-1506629905607-c28b443f86a8?w=400',
  rating: 4.8,
  reviews: 1250,
  inStock: true,
  brand: 'ZenMat',
  specifications: {
    'Material': 'Natural Rubber + Cork',
    'Thickness': '6mm',
    'Grip': 'Superior Non-slip',
    'Size': '72" x 24"'
  }
},
{
  id: 'fitness-003',
  name: 'Adjustable Dumbbells Set',
  description: 'Space-saving adjustable dumbbells from 5-50 lbs each',
  price: 599,
  category: 'Sports & Fitness',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
  rating: 4.7,
  reviews: 890,
  inStock: true,
  brand: 'PowerFlex',
  specifications: {
    'Weight Range': '5-50 lbs per dumbbell',
    'Adjustment': 'Quick-select dial',
    'Material': 'Steel plates with rubber coating',
    'Space Saving': 'Replaces 15 sets'
  }
},

// Books & Media
{
  id: 'book-001',
  name: 'The Seven Husbands of Evelyn Hugo',
  description: 'A captivating novel about a reclusive Hollywood icon finally ready to tell her story',
  price: 16.99,
  category: 'Books & Media',
  image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
  rating: 4.8,
  reviews: 25420,
  inStock: true,
  brand: 'Taylor Jenkins Reid',
  specifications: {
    'Format': 'Paperback',
    'Pages': '400',
    'Genre': 'Contemporary Fiction',
    'Publisher': 'Atria Books'
  }
},
{
  id: 'book-002',
  name: 'Atomic Habits',
  description: 'Transform your life with tiny changes that deliver remarkable results',
  price: 18.99,
  category: 'Books & Media',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  rating: 4.9,
  reviews: 18750,
  inStock: true,
  brand: 'James Clear',
  specifications: {
    'Format': 'Hardcover',
    'Pages': '320',
    'Genre': 'Self-Help',
    'Publisher': 'Avery'
  }
},
{
  id: 'book-003',
  name: 'The Psychology of Money',
  description: 'Timeless lessons on wealth, greed, and happiness from financial psychology',
  price: 17.99,
  category: 'Books & Media',
  image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
  rating: 4.7,
  reviews: 12300,
  inStock: true,
  brand: 'Morgan Housel',
  specifications: {
    'Format': 'Paperback',
    'Pages': '256',
    'Genre': 'Finance',
    'Publisher': 'Harriman House'
  }
},

// Gaming
{
  id: 'gaming-001',
  name: 'PlayStation 5 Console',
  description: 'Next-gen gaming console with ultra-fast SSD and ray tracing',
  price: 499,
  category: 'Gaming',
  image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400',
  rating: 4.8,
  reviews: 3450,
  inStock: true,
  brand: 'Sony',
  specifications: {
    'CPU': '8-core AMD Zen 2',
    'GPU': 'AMD RDNA 2',
    'Storage': '825GB SSD',
    'Resolution': 'Up to 8K'
  }
},
{
  id: 'gaming-002',
  name: 'Mechanical Gaming Keyboard',
  description: 'RGB backlit mechanical keyboard with Cherry MX switches',
  price: 179,
  category: 'Gaming',
  image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
  rating: 4.7,
  reviews: 1250,
  inStock: true,
  brand: 'GameTech',
  specifications: {
    'Switches': 'Cherry MX Red',
    'Lighting': 'RGB Per-key',
    'Layout': 'Full Size',
    'Features': 'Hot-swappable, USB-C'
  }
},
{
  id: 'gaming-003',
  name: 'Gaming Headset',
  description: 'Wireless gaming headset with 7.1 surround sound and noise cancellation',
  price: 149,
  category: 'Gaming',
  image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
  rating: 4.6,
  reviews: 890,
  inStock: true,
  brand: 'GameAudio',
  specifications: {
    'Connection': 'Wireless 2.4GHz',
    'Audio': '7.1 Surround Sound',
    'Microphone': 'Detachable with noise cancellation',
    'Battery': '20 hours'
  }
}];


// Generate additional product variants to reach 150+ items
for (let i = 4; i <= 50; i++) {
  // Electronics variants
  mockProducts.push({
    id: `electronics-${i.toString().padStart(3, '0')}`,
    name: `Smart Device Pro ${i}`,
    description: `Advanced ${['Tablet', 'Smartwatch', 'Earbuds', 'Speaker', 'Camera'][i % 5]} with premium features and AI integration`,
    price: Math.floor(Math.random() * 800) + 99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400',
    rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
    reviews: Math.floor(Math.random() * 2000) + 200,
    inStock: Math.random() > 0.05,
    brand: ['TechCorp', 'InnovateTech', 'SmartLife', 'FutureTech', 'NextGen'][Math.floor(Math.random() * 5)],
    specifications: {
      'Type': ['Tablet', 'Smartwatch', 'Earbuds', 'Speaker', 'Camera'][i % 5],
      'Connectivity': 'WiFi, Bluetooth 5.3',
      'Power': 'Fast Charging',
      'Warranty': '2 Years'
    }
  });

  // Fashion variants
  mockProducts.push({
    id: `fashion-${i.toString().padStart(3, '0')}`,
    name: `Designer ${['Jacket', 'Pants', 'Shirt', 'Dress', 'Shoes'][i % 5]} ${i}`,
    description: `Premium ${['Jacket', 'Pants', 'Shirt', 'Dress', 'Shoes'][i % 5]} crafted from the finest materials with modern design`,
    price: Math.floor(Math.random() * 300) + 50,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
    reviews: Math.floor(Math.random() * 1000) + 100,
    inStock: Math.random() > 0.02,
    brand: ['LuxeFashion', 'StyleCo', 'TrendWear', 'UrbanChic', 'ClassicStyle'][Math.floor(Math.random() * 5)],
    specifications: {
      'Material': ['Cotton', 'Silk', 'Wool', 'Linen', 'Cashmere'][Math.floor(Math.random() * 5)],
      'Care': 'Professional Clean',
      'Style': ['Casual', 'Formal', 'Business', 'Evening'][Math.floor(Math.random() * 4)],
      'Season': ['All Season', 'Spring/Summer', 'Fall/Winter'][Math.floor(Math.random() * 3)]
    }
  });

  // Home & Living variants
  mockProducts.push({
    id: `home-${i.toString().padStart(3, '0')}`,
    name: `Premium ${['Lamp', 'Cushion', 'Vase', 'Frame', 'Candle'][i % 5]} ${i}`,
    description: `Elegant home decor item that adds sophistication and style to any living space`,
    price: Math.floor(Math.random() * 200) + 25,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
    reviews: Math.floor(Math.random() * 600) + 50,
    inStock: Math.random() > 0.03,
    brand: ['HomeStyle', 'LivingLux', 'DecorPro', 'ModernHome', 'ClassicDecor'][Math.floor(Math.random() * 5)],
    specifications: {
      'Material': ['Wood', 'Metal', 'Glass', 'Ceramic', 'Fabric'][Math.floor(Math.random() * 5)],
      'Dimensions': 'Various sizes available',
      'Style': ['Modern', 'Classic', 'Minimalist', 'Rustic'][Math.floor(Math.random() * 4)],
      'Care': 'Easy maintenance'
    }
  });
}

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase());
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return mockProducts.filter((product) =>
  product.name.toLowerCase().includes(searchTerm) ||
  product.description.toLowerCase().includes(searchTerm) ||
  product.category.toLowerCase().includes(searchTerm) ||
  product.brand.toLowerCase().includes(searchTerm)
  );
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};

export const getCategories = (): string[] => {
  return [...new Set(mockProducts.map((product) => product.category))];
};

export const getFeaturedProducts = (limit: number = 8): Product[] => {
  return mockProducts.
  filter((product) => product.rating >= 4.5 && product.inStock).
  slice(0, limit);
};

export const getNewArrivals = (limit: number = 6): Product[] => {
  return mockProducts.
  filter((product) => product.inStock).
  sort((a, b) => b.reviews - a.reviews).
  slice(0, limit);
};

export const getBestSellers = (limit: number = 6): Product[] => {
  return mockProducts.
  filter((product) => product.inStock).
  sort((a, b) => b.rating * b.reviews - a.rating * a.reviews).
  slice(0, limit);
};

export const getDeals = (limit: number = 6): Product[] => {
  return mockProducts.
  filter((product) => product.inStock && product.price < 200).
  sort((a, b) => a.price - b.price).
  slice(0, limit);
};