import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductDetailCard = ({ product, onAddToCart }) => {
  return (
    <Card className="text-center">
      <div className="row g-0">
        <div className="col-md-4 mt-5">
          <Card.Img src={product.image} alt={product.name} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Fiyat: {product.price}</Card.Text>
            <Button
              variant="outline-primary"
              className="me-2 mb-2 w-100"
              onClick={onAddToCart}
            >
              Sepete Ekle
            </Button>
            <Button
              variant="outline-secondary"
              className="w-100"
              onClick={() => window.history.back()}
            >
              Geri Git
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetailCard;
