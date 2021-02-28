import React from "react";

const Pagination = ({ currentPage, itemsPerPage, totalItems }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul class="pagination">
        {pageNumber.map(num => (
          <li class="page-item">
            <a class="page-link" href="#">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
