import React from "react";

const Pagination = ({
  currentPage,
  pageSelected,
  itemsPerPage,
  totalItems,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination d-flex justify-content-end">
        {pageNumber.map((num, i) => (
          <li key={i} className="page-item">
            <a onClick={() => pageSelected(num)} className="page-link" href="#">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
