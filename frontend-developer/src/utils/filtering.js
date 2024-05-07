export const filterByName = (products, searchTerm) => {
  return products.filter(
    (product) =>
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
