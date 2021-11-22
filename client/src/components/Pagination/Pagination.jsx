import React from "react";
import css from "./Pagination.module.css";
function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={css.container}>
      {pageNumbers.map((number) => (
        <button className={css.index} key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
