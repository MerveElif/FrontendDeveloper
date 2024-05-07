import React from "react";
import { Card, Button } from "react-bootstrap";

const Sort = ({ onSort }) => {
  const handleSortChange = (sortType) => {
    onSort(sortType);
  };

  return (
    <Card className="p-3 mb-3">
      <Card.Title className="mb-0">Sırala</Card.Title>
      <div className="d-flex flex-column mt-3">
        <Button
          variant="outline-success"
          size="sm"
          className="mb-2"
          onClick={() => handleSortChange("asc")}
        >
          En Düşük Fiyat
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => handleSortChange("desc")}
        >
          En Yüksek Fiyat
        </Button>
      </div>
    </Card>
  );
};

export default Sort;
