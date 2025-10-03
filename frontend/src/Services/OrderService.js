import AxiosInstance from "./AxiosInstance";
import { API_PATHS } from "./ApiPaths";

// Checkout cart
export const checkOutService = async () => {
  try {
    const { data } = await AxiosInstance.post(API_PATHS.ORDERS.CHECKOUT);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Checkout failed" };
  }
};

// Get all orders
export const orderService = async () => {
  try {
    const { data } = await AxiosInstance.get(API_PATHS.ORDERS.GET_ORDERS);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch orders" };
  }
};
