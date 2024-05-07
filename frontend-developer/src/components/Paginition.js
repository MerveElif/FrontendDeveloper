// ProductPagination.js

import React from "react";
import { Pagination } from "react-bootstrap";

const ProductPagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Pagination className="mt-3 justify-content-center">
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default ProductPagination;
