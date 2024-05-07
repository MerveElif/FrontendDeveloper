// utils/localStorage.js

// Sepet bilgilerini LocalStorage'dan al
export const getCartItemsFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
};

// Sepet bilgilerini LocalStorage'a kaydet
export const saveCartItemsToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
