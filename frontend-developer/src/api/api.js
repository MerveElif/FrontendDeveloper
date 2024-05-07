// api.js

import axios from "axios";

const BASE_URL = "https://5fc9346b2af77700165ae514.mockapi.io";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Veri alınamadı: ", error);
    return null;
  }
};
