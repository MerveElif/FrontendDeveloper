import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";
import ProductPagination from "../components/ProductPagination";
import Sort from "../components/Sort";
import Search from "../components/Search";
import { fetchProducts } from "../api/api";
import {
  getCartItemsFromLocalStorage,
  saveCartItemsToLocalStorage,
} from "../locale/localeStorage";
import { sortByPrice } from "../utils/sorting";
import { filterByName } from "../utils/filtering";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const productsPerPage = 12;

  useEffect(() => {
    fetchProductsData();
  }, []);

  useEffect(() => {
    saveCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  const fetchProductsData = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      setErrorMessage(
        "Ürünler alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
      );
      console.error("Ürünler alınırken bir hata oluştu: ", error);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    const { name, price } = product;
    const existingItem = cartItems.find((item) => item.name === name);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const newItem = { name, price, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const sortedProducts = sortByPrice(products, sortOrder);
  const filteredProducts = filterByName(sortedProducts, searchTerm);
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={2}>
          <Sort onSort={handleSort} />
          <Search onSearch={handleSearch} />
        </Col>

        <Col md={7}>
          {errorMessage && <p>{errorMessage}</p>}
          <ProductList
            products={currentProducts}
            onAddToCart={handleAddToCart}
          />
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </Col>
        <Col md={3}>
          <ShoppingCart
            items={cartItems}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
