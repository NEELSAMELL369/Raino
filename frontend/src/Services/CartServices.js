import AxiosInstance from "./AxiosInstance";
import { API_PATHS } from "./ApiPaths";

// Add product to cart
export const addCartService = async (product) => {
  try {
    const payload = {
      product: {
        productId: product.id,
        name: product.name,
        price: product.price,
        priceAfterDiscount: product.priceAfterDiscount,
        image: product.images?.main,
        department: product.department,
        category: product.category,
        quantity: 1,
      },
    };
    const { data } = await AxiosInstance.post(API_PATHS.CART.ADD_CART, payload);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to add to cart" };
  }
};

// Get cart
export const GetCartService = async () => {
  try {
    const { data } = await AxiosInstance.get(API_PATHS.CART.GET_CART);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch cart" };
  }
};

// Update quantity of cart item
// CartServices.js
export const updateCartService = async (productId, quantity) => {
  try {
    const payload = { productId, quantity };
    const { data } = await AxiosInstance.put(
      API_PATHS.CART.UPDATE_CART, // make sure spelling matches exactly
      payload
    );
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update cart" };
  }
};


// Remove product from cart
export const removeCartService = async (productId) => {
  try {
    const url = API_PATHS.CART.REMOVE_CART.replace(":productId", productId);
    const { data } = await AxiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to remove from cart" };
  }
};

// Clear cart
export const clearCartService = async () => {
  try {
    const { data } = await AxiosInstance.delete(API_PATHS.CART.CLEAR_CART);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to clear cart" };
  }
};
