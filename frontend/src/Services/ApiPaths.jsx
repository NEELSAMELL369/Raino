// src/Services/ApiPaths.js
export const BASEURL = "http://127.0.0.1:8080";

export const API_PATHS = {
  PRODUCTS: {
    GET_DEPARTMENTS: "/api/products/departments",
    GET_CATEGORIES: "/api/products/departments/:department/categories", // dynamic department
    GET_BRANDS: "/api/products/brands", // optional category
    GET_PRODUCTS:
      "/api/products/departments/:department/categories/:category/products", // dynamic department & category
    GET_PRODUCT_BY_ID: "/api/products/:id", // dynamic id
  },
  CART: {
    ADD_CART: "/api/cart/add",
    GET_CART: "/api/cart",
    UPDATE_CART: "/api/cart/update",
    REMOVE_CART: "/api/cart/remove/:productId",
    CLEAR_CART: "/api/cart/clear",
  },
  ORDERS: {
    CHECKOUT: "/api/orders/checkout",
    GET_ORDERS: "/api/orders",
  },
};
