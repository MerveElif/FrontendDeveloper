// ProductList.js
import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
