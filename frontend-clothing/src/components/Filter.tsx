import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

type Props = {
  filters: {
    price: string | number;
    category: string;
    shipping: boolean;
    sort: string;
  };
  changeFilter: (e: any) => void;
};

const Filter = (props: Props) => {
  const {
    filters: { price, category, shipping, sort },
    changeFilter,
  } = props;
  return (
    <SectionContainer>
      <FilterForm>
        <div>
          <div className="form-group">
            <label htmlFor="category">Hãng</label>
            <select
              className="form-control"
              name="category"
              id="category"
              onChange={changeFilter}
              value={category}
            >
              <option value="all">All</option>
              <option value="hp">HP</option>
              <option value="lenovo">Lenovo</option>
              <option value="dell">Dell</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Sắp xếp</label>
            <select
              className="form-control"
              name="sort"
              id="sort"
              onChange={changeFilter}
              value={sort}
            >
              <option value="asc">Tăng dần</option>
              <option value="desc">Giảm dần</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={changeFilter}
            />
            <label htmlFor="shipping">Free ship</label>
          </div>
        </div>
        <PriceGroup>
          <p>Price</p>
          <label>
            <input
              type="radio"
              name="price"
              id="all"
              value="all"
              checked={price === "all"}
              onChange={changeFilter}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={changeFilter}
            />
            10000000đ - 15000000đ
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="10000000"
              checked={price === 10000000}
              onChange={changeFilter}
            />
            15000000đ - 20000000đ
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="20000000"
              checked={price === 20000000}
              onChange={changeFilter}
            />
            20000000đ trở lên
          </label>
        </PriceGroup>
      </FilterForm>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  margin: 2rem 0 3rem 0;
`;

const FilterForm = styled.form`
  display: flex;
  align-items: center;

  input {
    display: inline-block;
    margin-right: 1rem;
  }
`;

const PriceGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

const mapStateToProps = (state) => {
  return {
    filters: state.product.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (e) => {
      let filterValue;
      const { name, value, type } = e.target;
      if (type === "checkbox") {
        filterValue = e.target.checked;
      } else if (type === "radio") {
        filterValue = value === "all" ? value : parseInt(value);
      } else {
        filterValue = value;
      }
      dispatch({
        type: "CHANGE_FILTER",
        payload: { name, value: filterValue, type },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
