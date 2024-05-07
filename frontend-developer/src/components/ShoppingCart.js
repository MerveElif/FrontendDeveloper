import React from "react";
import {
  Button,
  Container,
  Card,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";

function ShoppingCart({ items, onIncreaseQuantity, onDecreaseQuantity }) {
  const totalPrice = items.reduce((acc, item) => {
    const price = item.price || 0;
    const quantity = item.quantity || 0;
    return acc + price * quantity;
  }, 0);

  return (
    <Container>
      <Card className="shopping-cart">
        <Card.Body>
          <Card.Title className="text-center">Sepet</Card.Title>
          <ListGroup variant="flush">
            {items &&
              items.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                  style={{ marginBottom: "15px", padding: "15px" }}
                >
                  <div>
                    <h6>{item.name}</h6>
                    <p>Fiyat: {item.price} TL</p>
                    <p>Adet: {item.quantity}</p>
                  </div>
                  <ButtonGroup>
                    <Button
                      variant="outline-success"
                      onClick={() => onIncreaseQuantity(index)}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => onDecreaseQuantity(index)}
                    >
                      -
                    </Button>
                  </ButtonGroup>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <div className="total-price text-center">
            Toplam Fiyat: {totalPrice.toFixed(2)} TL
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ShoppingCart;
