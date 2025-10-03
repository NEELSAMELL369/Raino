// src/controllers/productController.js
import productsData from "../data/products.js";

// ---------------- Get all departments ----------------
export const getDepartments = (req, res) => {
  try {
    const departments = (productsData.departments || []).map((dep) => ({
      id: dep.id || dep.name,
      name: dep.name || "Unnamed Department",
    }));

    res.json({ departments });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch departments" });
  }
};

// ---------------- Get categories by department ----------------
export const getCategoriesByDepartment = (req, res) => {
  try {
    const { department } = req.params;

    if (!department || department.toLowerCase() === "all") {
      // Return all categories from all departments
      const allCategories = productsData.departments.flatMap((dep) =>
        (dep.categories || []).map((c, i) => ({
          id: `${dep.name}-${i}`,
          name: c.name,
          department: dep.name,
        }))
      );
      return res.json({ categories: allCategories });
    }

    const dep = productsData.departments.find(
      (d) => d.name.toLowerCase() === department.toLowerCase()
    );

    if (!dep) return res.status(404).json({ error: "Department not found" });

    const categories = (dep.categories || []).map((c, i) => ({
      id: `${dep.name}-${i}`,
      name: c.name,
    }));

    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// GET /api/brands/:department?category=xyz
export const getBrands = (req, res) => {
  try {
    const { department, category } = req.query;

    let products = [];

    if (!department || department.toLowerCase() === "all") {
      // All products from all departments
      products = productsData.departments.flatMap((dep) =>
        (dep.categories || []).flatMap((cat) => cat.products || [])
      );
    } else {
      const dep = productsData.departments.find(
        (d) => d.name.toLowerCase() === department.toLowerCase()
      );
      if (!dep) return res.status(404).json({ error: "Department not found" });

      if (!category || category.toLowerCase() === "all") {
        products = dep.categories.flatMap((cat) => cat.products || []);
      } else {
        const cat = dep.categories.find(
          (c) => c.name.toLowerCase() === category.toLowerCase()
        );
        if (!cat) return res.status(404).json({ error: "Category not found" });
        products = cat.products || [];
      }
    }

    // Extract unique brands
    const brands = [...new Set(products.map((p) => p.company).filter(Boolean))];

    res.json({ brands });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch brands" });
  }
};

// ---------------- Get products by department & category & Brand ----------------
export const getProducts = (req, res) => {
  try {
    const { department, category } = req.params;
    const { brand, rating, minPrice, maxPrice, minDiscount, maxDiscount } =
      req.query;

    let products = [];

    // 1️⃣ Filter by department & category
    if (!department || department.toLowerCase() === "all") {
      products = productsData.departments.flatMap((dep) =>
        (dep.categories || [])
          .filter(
            (cat) =>
              !category ||
              category.toLowerCase() === "all" ||
              cat.name.toLowerCase() === category.toLowerCase()
          )
          .flatMap((cat) => cat.products || [])
      );
    } else {
      const dep = productsData.departments.find(
        (d) => d.name.toLowerCase() === department.toLowerCase()
      );
      if (!dep) return res.status(404).json({ error: "Department not found" });

      if (!category || category.toLowerCase() === "all") {
        products = dep.categories.flatMap((cat) => cat.products || []);
      } else {
        const cat = dep.categories.find(
          (c) => c.name.toLowerCase() === category.toLowerCase()
        );
        if (!cat) return res.status(404).json({ error: "Category not found" });
        products = cat.products || [];
      }
    }

    // 2️⃣ Filter by brand
    if (brand && brand.toLowerCase() !== "all") {
      products = products.filter(
        (p) => p.company?.toLowerCase() === brand.toLowerCase()
      );
    }

    // 3️⃣ Filter by rating
    if (rating && rating.toLowerCase() !== "all") {
      const ratingNum = Number(rating);
      products = products.filter(
        (p) => Math.floor(p.rating?.average || 0) === ratingNum
      );
    }

    // 4️⃣ Filter by price
    if (minPrice || maxPrice) {
      products = products.filter((p) => {
        const price = p.priceAfterDiscount || p.price;
        if (minPrice && price < Number(minPrice)) return false;
        if (maxPrice && price > Number(maxPrice)) return false;
        return true;
      });
    }

    // 5️⃣ Filter by discount
    if (minDiscount || maxDiscount) {
      products = products.filter((p) => {
        const discount = p.discount || 0;
        if (minDiscount && discount < Number(minDiscount)) return false;
        if (maxDiscount && discount > Number(maxDiscount)) return false;
        return true;
      });
    }

    // 6️⃣ Search query
    if (req.query.search && req.query.search.trim() !== "") {
      const searchLower = req.query.search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name?.toLowerCase().includes(searchLower) ||
          p.company?.toLowerCase().includes(searchLower) ||
          p.category?.toLowerCase().includes(searchLower) ||
          p.department?.toLowerCase().includes(searchLower)
      );
    }

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// ---------------- Get product by ID ----------------
export const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    let productFound = null;

    for (const dep of productsData.departments || []) {
      for (const cat of dep.categories || []) {
        const product = (cat.products || []).find((p) => p.id === parseInt(id));
        if (product) {
          productFound = product;
          break;
        }
      }
      if (productFound) break;
    }

    if (!productFound)
      return res.status(404).json({ error: "Product not found" });

    res.json({ product: productFound });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
