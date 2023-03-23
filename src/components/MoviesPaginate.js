import React from "react";
import ReactPaginate from "react-paginate";
const MoviesPaginate = ({getDataPage, numberPages}) => {
  const handlePageClick = (data) => {
    getDataPage(data.selected + 1)
  };
  return (
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={numberPages}
        previousLabel="< previous" 
        containerClassName="pagination my-5 align-items-center justify-content-center text-light"
        pageClassName="page-item"
        pageLinkClassName="item-pagination"
        nextClassName="page-item"
        nextLinkClassName="item-pagination next-pag"
        previousClassName="page-item"
        previousLinkClassName="item-pagination previous-pag"
        breakClassName="page-item"
        breakLinkClassName="item-pagination"
        activeLinkClassName="active-pagination"
      />
  );
};

export default MoviesPaginate;
