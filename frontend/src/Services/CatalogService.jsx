// src/Services/CatalogService.js
import AxiosInstance from "./AxiosInstance";
import { API_PATHS } from "./ApiPaths";

// 1️⃣ Get Departments
export const departmentService = async () => {
  try {
    const { data } = await AxiosInstance.get(
      API_PATHS.PRODUCTS.GET_DEPARTMENTS
    );
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch departments" };
  }
};

// 2️⃣ Get Categories by Department
export const categoriesService = async (department) => {
  try {
    const endpoint = API_PATHS.PRODUCTS.GET_CATEGORIES.replace(
      ":department",
      department
    );
    const { data } = await AxiosInstance.get(endpoint);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch categories" };
  }
};


// 3️⃣ Get Products by Department & Category with optional brand, rating, price & discount
export const productsService = async (
  department,
  category,
  brand,
  rating,
  priceRange, // { min, max }
  discountRange // { min, max }
) => {
  try {
    let endpoint = API_PATHS.PRODUCTS.GET_PRODUCTS.replace(
      ":department",
      department
    ).replace(":category", category);

    const params = new URLSearchParams();
    if (brand && brand !== "all") params.append("brand", brand);
    if (rating && rating !== "all") params.append("rating", rating);
    if (priceRange) {
      if (priceRange.min != null) params.append("minPrice", priceRange.min);
      if (priceRange.max != null) params.append("maxPrice", priceRange.max);
    }
    if (discountRange) {
      if (discountRange.min != null)
        params.append("minDiscount", discountRange.min);
      if (discountRange.max != null)
        params.append("maxDiscount", discountRange.max);
    }

    if ([...params].length) endpoint += `?${params.toString()}`;

    const { data } = await AxiosInstance.get(endpoint);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch products" };
  }
};

// 4️⃣ Get Product by ID
export const productsByIdService = async (id) => {
  try {
    const endpoint = API_PATHS.PRODUCTS.GET_PRODUCT_BY_ID.replace(":id", id);
    const { data } = await AxiosInstance.get(endpoint);
    return data.product; // <-- return the actual product object
  } catch (error) {
    throw (
      error.response?.data || { message: "Failed to fetch product details" }
    );
  }
};

// 5️⃣ Get Brands by Department & optional Category (using query params)
export const brandsService = async (department = "all", category = "all") => {
  try {
    let endpoint = API_PATHS.PRODUCTS.GET_BRANDS;
    const params = new URLSearchParams();

    if (department && department.toLowerCase() !== "all") {
      params.append("department", department);
    }
    if (category && category.toLowerCase() !== "all") {
      params.append("category", category);
    }

    if ([...params].length) {
      endpoint += `?${params.toString()}`;
    }

    const { data } = await AxiosInstance.get(endpoint);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch brands" };
  }
};
