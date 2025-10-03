// src/hooks/useCatalog.js
import { useQuery } from "@tanstack/react-query";
import {
  departmentService,
  categoriesService,
  productsService,
  productsByIdService,
  brandsService,
} from "../Services/CatalogService";

// ---------------- Departments ----------------
export const useDepartments = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: departmentService,
  });
};

// ---------------- Categories by Department ----------------
export const useCategories = (department) => {
  return useQuery({
    queryKey: ["categories", department],
    queryFn: () => categoriesService(department),
    enabled: !!department, // fetch only if department exists
  });
};

// ---------------- Brands by Department & optional Category ----------------
export const useBrands = (department = "all", category = "all") => {
  return useQuery({
    queryKey: ["brands", department, category],
    queryFn: () => brandsService(department, category),
    enabled: true, // always enabled, department/category defaults handled
  });
};

// ---------------- Products by Department, Category & optional Brand + Search ----------------
export const useProducts = (
  department = "all",
  category = "all",
  brand = "all",
  rating = "all",
  priceRange = null,
  discountRange = null,
  search = "" // <-- new search parameter
) => {
  return useQuery({
    queryKey: [
      "products",
      department,
      category,
      brand,
      rating,
      priceRange,
      discountRange,
      search, // include search in queryKey
    ],
    queryFn: () =>
      productsService(
        department,
        category,
        brand,
        rating,
        priceRange,
        discountRange,
        search // pass search to service
      ),
    enabled: true,
    keepPreviousData: false,
  });
};


// ---------------- Product by ID ----------------
export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productsByIdService(id),
    enabled: !!id,
  });
};
