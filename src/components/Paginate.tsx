import React from "react";
import ReactPaginate from "react-paginate";
function Paginate({ onPageChange }: any) {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={40}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
}

export default Paginate;
