import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ShoppingCart from "../components/ShoppingCart";
import ProductDetailCard from "../components/ProductDetailCard";
import {
  getCartItemsFromLocalStorage,
  saveCartItemsToLocalStorage,
} from "../locale/localeStorage";
import { fetchProductById } from "../api/api";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    saveCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  const handleAddToCart = () => {
    if (!product) return;
    const { name, price } = product;
    const existingItemIndex = cartItems.findIndex((item) => item.name === name);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
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

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={9}>
          <ProductDetailCard product={product} onAddToCart={handleAddToCart} />
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
};

export default DetailPage;
