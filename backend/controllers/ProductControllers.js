import { productsData } from "../data/products.js";

// Get all departments
export const getDepartments = (req, res) => {
  const departments = productsData.departments.map((dep) => dep.name);
  res.json({ departments });
};

// Get categories by department
export const getCategoriesByDepartment = (req, res) => {
  const { department } = req.params;
  const dep = productsData.departments.find(
    (d) => d.name.toLowerCase() === department.toLowerCase()
  );
  if (!dep) return res.status(404).json({ error: "Department not found" });
  res.json({ categories: dep.categories.map((c) => c.name) });
};

// Get products by department & category
export const getProductsByCategory = (req, res) => {
  const { department, category } = req.params;
  const dep = productsData.departments.find(
    (d) => d.name.toLowerCase() === department.toLowerCase()
  );
  if (!dep) return res.status(404).json({ error: "Department not found" });

  const cat = dep.categories.find(
    (c) => c.name.toLowerCase() === category.toLowerCase()
  );
  if (!cat) return res.status(404).json({ error: "Category not found" });

  res.json({ products: cat.products });
};

// Get product by ID
export const getProductById = (req, res) => {
  const { id } = req.params;
  let productFound = null;

  for (let dep of productsData.departments) {
    for (let cat of dep.categories) {
      const product = cat.products.find((p) => p.id === parseInt(id));
      if (product) productFound = product;
    }
  }

  if (!productFound)
    return res.status(404).json({ error: "Product not found" });
  res.json({ product: productFound });
};
