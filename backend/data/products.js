const productsData = {
  departments: [
    {
      departments: [
        {
          name: "Mobiles",
          categories: [
            {
              name: "Smartphones",
              products: [
                {
                  id: 1,
                  name: "iPhone 15",
                  company: "Apple",
                  department: "Mobiles",
                  category: "Smartphones",
                  price: 120000,
                  discount: 10,
                  priceAfterDiscount: 108000,
                  condition: "New",
                  images: {
                    main: "https://example.com/mobiles/iphone15/main.jpg",
                    subImages: [
                      "https://example.com/mobiles/iphone15/1.jpg",
                      "https://example.com/mobiles/iphone15/2.jpg",
                    ],
                    colorVariants: {
                      black: "https://example.com/mobiles/iphone15/black.jpg",
                      white: "https://example.com/mobiles/iphone15/white.jpg",
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
              ],
            },
            { name: "Feature Phones", products: [] },
            { name: "Accessories", products: [] },
            { name: "Tablets", products: [] },
            { name: "Smartwatches", products: [] },
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
    },
  ],
};

module.exports = productsData;
