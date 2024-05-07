// ProductPagination.js
import React from "react";
import Pagination from "./Paginition";

function ProductPagination({ currentPage, totalPages, onPageChange }) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}

export default ProductPagination;
