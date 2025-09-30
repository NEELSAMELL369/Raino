const productsData = {
  departments: [
    {
      name: "Electronics",
      categories: [
        {
          name: "Mobiles",
          products: [
            {
              id: 1,
              name: "iPhone 15",
              company: "Apple",
              department: "Electronics",
              category: "Mobiles",
              price: 120000,
              discount: 10,
              priceAfterDiscount: 108000,
              condition: "New",
              images: {
                main: "https://example.com/electronics/mobiles/iphone15/main.jpg",
                subImages: [
                  "https://example.com/electronics/mobiles/iphone15/1.jpg",
                  "https://example.com/electronics/mobiles/iphone15/2.jpg",
                ],
                colorVariants: {
                  black:
                    "https://example.com/electronics/mobiles/iphone15/black.jpg",
                  white:
                    "https://example.com/electronics/mobiles/iphone15/white.jpg",
                },
              },
              rating: { average: 4.8, count: 2345 },
              reviews: [
                { stars: 5, comment: "Amazing performance!" },
                { stars: 4, comment: "Very expensive but worth it." },
              ],
              specifications: {
                general: {
                  modelNumber: "iPhone15-256GB",
                  launchDate: "2025-09-30",
                  weight: "174g",
                  colors: ["Black", "White", "Red"],
                },
                display: {
                  screenSize: "6.1 inches",
                  resolution: "1170 x 2532 pixels",
                  type: "Super Retina XDR OLED",
                },
                performance: {
                  processor: "A17 Bionic",
                  ram: "8GB",
                  storageOptions: ["128GB", "256GB", "512GB"],
                },
                camera: {
                  rear: "48MP + 12MP Dual",
                  front: "12MP TrueDepth",
                  features: ["Night mode", "Portrait mode", "4K video"],
                },
                battery: {
                  capacity: "3279mAh",
                  charging: ["Fast charging 20W", "Wireless charging"],
                },
                connectivity: {
                  sim: "Dual SIM",
                  network: ["5G", "4G LTE", "Wi-Fi 6"],
                },
                others: {
                  os: "iOS 18",
                  waterResistance: "IP68",
                  sensors: [
                    "Face ID",
                    "Accelerometer",
                    "Gyroscope",
                    "Proximity",
                  ],
                },
              },
            },
            {
              id: 2,
              name: "Samsung Galaxy S25 Ultra",
              company: "Samsung",
              department: "Electronics",
              category: "Mobiles",
              price: 110000,
              discount: 12,
              priceAfterDiscount: 96800,
              condition: "New",
              images: {
                main: "https://example.com/electronics/mobiles/galaxys25/main.jpg",
                subImages: [
                  "https://example.com/electronics/mobiles/galaxys25/1.jpg",
                  "https://example.com/electronics/mobiles/galaxys25/2.jpg",
                ],
                colorVariants: {
                  black:
                    "https://example.com/electronics/mobiles/galaxys25/black.jpg",
                  green:
                    "https://example.com/electronics/mobiles/galaxys25/green.jpg",
                },
              },
              rating: { average: 4.7, count: 1800 },
              reviews: [
                { stars: 5, comment: "Top-notch display!" },
                { stars: 4, comment: "Battery could be better." },
              ],
              specifications: {
                general: {
                  modelNumber: "GalaxyS25Ultra",
                  launchDate: "2025-05-10",
                  weight: "195g",
                  colors: ["Black", "Green", "Silver"],
                },
                display: {
                  screenSize: "6.8 inches",
                  resolution: "1440 x 3200 pixels",
                  type: "Dynamic AMOLED 2X",
                },
                performance: {
                  processor: "Snapdragon 8 Gen 4",
                  ram: "12GB",
                  storageOptions: ["256GB", "512GB", "1TB"],
                },
                camera: {
                  rear: "200MP + 12MP + 10MP + 10MP Quad",
                  front: "40MP",
                  features: ["Space Zoom", "Nightography", "8K video"],
                },
                battery: {
                  capacity: "5000mAh",
                  charging: ["Fast charging 45W", "Wireless charging 15W"],
                },
                connectivity: {
                  sim: "Dual SIM",
                  network: ["5G", "Wi-Fi 7"],
                },
                others: {
                  os: "Android 15",
                  waterResistance: "IP68",
                  sensors: ["Fingerprint", "Accelerometer", "Gyroscope"],
                },
              },
            },
            {
              id: 3,
              name: "Google Pixel 10 Pro",
              company: "Google",
              department: "Electronics",
              category: "Mobiles",
              price: 95000,
              discount: 8,
              priceAfterDiscount: 87400,
              condition: "New",
              images: {
                main: "https://example.com/electronics/mobiles/pixel10pro/main.jpg",
                subImages: [
                  "https://example.com/electronics/mobiles/pixel10pro/1.jpg",
                  "https://example.com/electronics/mobiles/pixel10pro/2.jpg",
                ],
                colorVariants: {
                  obsidian:
                    "https://example.com/electronics/mobiles/pixel10pro/obsidian.jpg",
                  snow: "https://example.com/electronics/mobiles/pixel10pro/snow.jpg",
                },
              },
              rating: { average: 4.6, count: 1200 },
              reviews: [
                { stars: 5, comment: "Best Android camera!" },
                { stars: 4, comment: "Limited storage options." },
              ],
              specifications: {
                general: {
                  modelNumber: "Pixel10Pro",
                  launchDate: "2025-06-15",
                  weight: "187g",
                  colors: ["Obsidian", "Snow", "Blue"],
                },
                display: {
                  screenSize: "6.7 inches",
                  resolution: "1344 x 2992 pixels",
                  type: "LTPO OLED",
                },
                performance: {
                  processor: "Google Tensor G4",
                  ram: "12GB",
                  storageOptions: ["256GB", "512GB"],
                },
                camera: {
                  rear: "50MP + 48MP + 12MP Triple",
                  front: "12MP",
                  features: ["Magic Eraser", "Astrophotography", "4K video"],
                },
                battery: {
                  capacity: "4800mAh",
                  charging: ["Fast charging 30W", "Wireless charging 15W"],
                },
                connectivity: {
                  sim: "Dual SIM",
                  network: ["5G", "Wi-Fi 7"],
                },
                others: {
                  os: "Android 15",
                  waterResistance: "IP68",
                  sensors: ["Fingerprint", "Accelerometer", "Gyroscope"],
                },
              },
            },
            {
              id: 4,
              name: "OnePlus 13 Pro",
              company: "OnePlus",
              department: "Electronics",
              category: "Mobiles",
              price: 75000,
              discount: 15,
              priceAfterDiscount: 63750,
              condition: "New",
              images: {
                main: "https://example.com/electronics/mobiles/oneplus13/main.jpg",
                subImages: [
                  "https://example.com/electronics/mobiles/oneplus13/1.jpg",
                  "https://example.com/electronics/mobiles/oneplus13/2.jpg",
                ],
                colorVariants: {
                  black:
                    "https://example.com/electronics/mobiles/oneplus13/black.jpg",
                  silver:
                    "https://example.com/electronics/mobiles/oneplus13/silver.jpg",
                },
              },
              rating: { average: 4.5, count: 900 },
              reviews: [
                { stars: 5, comment: "Super fast charging!" },
                { stars: 4, comment: "UI can improve." },
              ],
              specifications: {
                general: {
                  modelNumber: "OnePlus13Pro",
                  launchDate: "2025-07-20",
                  weight: "190g",
                  colors: ["Black", "Silver", "Blue"],
                },
                display: {
                  screenSize: "6.78 inches",
                  resolution: "1440 x 3168 pixels",
                  type: "Fluid AMOLED",
                },
                performance: {
                  processor: "Snapdragon 8 Gen 4",
                  ram: "16GB",
                  storageOptions: ["256GB", "512GB"],
                },
                camera: {
                  rear: "50MP + 48MP + 64MP Triple",
                  front: "32MP",
                  features: ["Hasselblad tuning", "Night mode", "4K video"],
                },
                battery: {
                  capacity: "5500mAh",
                  charging: ["Fast charging 100W", "Wireless charging 50W"],
                },
                connectivity: {
                  sim: "Dual SIM",
                  network: ["5G", "Wi-Fi 7"],
                },
                others: {
                  os: "OxygenOS 15 (Android 15)",
                  waterResistance: "IP68",
                  sensors: ["Fingerprint", "Accelerometer", "Gyroscope"],
                },
              },
            },
            {
              id: 5,
              name: "Xiaomi 15 Ultra",
              company: "Xiaomi",
              department: "Electronics",
              category: "Mobiles",
              price: 65000,
              discount: 10,
              priceAfterDiscount: 58500,
              condition: "New",
              images: {
                main: "https://example.com/electronics/mobiles/xiaomi15ultra/main.jpg",
                subImages: [
                  "https://example.com/electronics/mobiles/xiaomi15ultra/1.jpg",
                  "https://example.com/electronics/mobiles/xiaomi15ultra/2.jpg",
                ],
                colorVariants: {
                  black:
                    "https://example.com/electronics/mobiles/xiaomi15ultra/black.jpg",
                  white:
                    "https://example.com/electronics/mobiles/xiaomi15ultra/white.jpg",
                },
              },
              rating: { average: 4.4, count: 700 },
              reviews: [
                { stars: 5, comment: "Value for money!" },
                { stars: 4, comment: "MIUI has ads." },
              ],
              specifications: {
                general: {
                  modelNumber: "Xiaomi15Ultra",
                  launchDate: "2025-08-05",
                  weight: "198g",
                  colors: ["Black", "White", "Gold"],
                },
                display: {
                  screenSize: "6.73 inches",
                  resolution: "1440 x 3200 pixels",
                  type: "AMOLED",
                },
                performance: {
                  processor: "Snapdragon 8 Gen 4",
                  ram: "12GB",
                  storageOptions: ["256GB", "512GB"],
                },
                camera: {
                  rear: "50MP + 50MP + 50MP Triple",
                  front: "32MP",
                  features: ["Leica optics", "8K video", "Night mode"],
                },
                battery: {
                  capacity: "5000mAh",
                  charging: ["Fast charging 90W", "Wireless charging 50W"],
                },
                connectivity: {
                  sim: "Dual SIM",
                  network: ["5G", "Wi-Fi 7"],
                },
                others: {
                  os: "Android 15 (MIUI 17)",
                  waterResistance: "IP68",
                  sensors: ["Fingerprint", "Accelerometer", "Gyroscope"],
                },
              },
            },
          ],
        },
        { name: "T.V", products: [] },
        { name: "A.C", products: [] },
        { name: "Accessories", products: [] },
        { name: "Laptop", products: [] },
      ],
    },
    {
      name: "Jewellery",
      categories: [
        {
          name: "Necklaces",
          products: [
            {
              id: 101,
              name: "Gold Plated Necklace",
              company: "Zaveri Jewellers",
              department: "Jewellery",
              category: "Necklaces",
              price: 15000,
              discount: 5,
              priceAfterDiscount: 14250,
              condition: "New",
              images: {
                main: "https://example.com/jewellery/necklaces/gold/main.jpg",
                subImages: [
                  "https://example.com/jewellery/necklaces/gold/1.jpg",
                  "https://example.com/jewellery/necklaces/gold/2.jpg",
                ],
                colorVariants: {
                  gold: "https://example.com/jewellery/necklaces/gold/gold.jpg",
                  silver:
                    "https://example.com/jewellery/necklaces/gold/silver.jpg",
                },
              },
              rating: { average: 4.5, count: 320 },
              reviews: [
                { stars: 5, comment: "Beautiful and elegant!" },
                { stars: 4, comment: "Looks good but slightly heavy." },
              ],
              specifications: {
                material: "Gold Plated",
                weight: "50g",
                length: "18 inches",
                gemstones: ["None"],
                careInstructions: "Avoid water and chemicals",
                design: "Traditional Indian",
              },
            },
          ],
        },
        { name: "Earrings", products: [] },
        { name: "Bracelets", products: [] },
        { name: "Rings", products: [] },
        { name: "Anklets", products: [] },
      ],
    },
  ],
};

export default productsData;
