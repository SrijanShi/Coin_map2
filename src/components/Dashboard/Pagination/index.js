import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css";

export default function PaginationComponent({ page, handlePageChange, totalPages }) {
  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
    />
  );
}