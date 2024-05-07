import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TruncatedText from "../utils/TruncatedText";
import TruncatedTitle from "../utils/TruncatedTitle";

function ProductCard({ product, onAddToCart }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>
          <TruncatedTitle title={product.name} maxLength={10} />
        </Card.Title>
        <Card.Text>
          <TruncatedText text={product.description} maxLength={30} />
        </Card.Text>
        <Card.Text>Price: {product.price}</Card.Text>
        <Button
          variant="outline-primary"
          className="mb-2 w-100"
          onClick={() => onAddToCart(product)}
        >
          Sepete Ekle
        </Button>
        <Link
          to={`/detail/${product.id}`}
          className="btn btn-outline-secondary w-100"
        >
          Detaylar
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
