import React from "react";

import styled from "styled-components";

const Pagination = (props: any) => {
  const { changePage, page, lastPage } = props;

  const getPaginationGroup = () => {
    const start = Math.floor((page - 1) / 4) * 4;
    return new Array(4)
      .fill(0)
      .map((_, idx) => start + idx + 1)
      .filter((i) => i <= lastPage);
  };
  return (
    <PaginationContainer>
      {
        <button
          onClick={() => changePage(page - 1)}
          className={["prev", page === 1 ? "disabled" : ""].join(" ")}
        >
          Prev
        </button>
      }
      {getPaginationGroup().map((value, idx) => (
        <button
          key={idx}
          className={["paginationItem", page === value ? "active" : null].join(
            " "
          )}
          onClick={() => changePage(value)}
        >
          {value}
        </button>
      ))}
      {
        <button
          onClick={() => changePage(page + 1)}
          className={["next", page === lastPage ? "disabled" : ""].join(" ")}
        >
          Next
        </button>
      }
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1rem auto;

  button {
    border: none;
    padding: 0.5rem 0.8rem;
    margin-right: 0.5rem;
    border-radius: 0.15rem;

    &.active {
      background: #0984e3;
    }

    &.disabled {
      pointer-events: none;
      box-shadow: none;
      color: #999;
    }
  }
`;

export default Pagination;
