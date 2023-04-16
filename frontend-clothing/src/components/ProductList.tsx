import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { paginate } from "../utils/product";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import Filter from "./Filter";

import styled from "styled-components";
import { fetchProductsStart } from "../redux/products";

const ProductList = ({ loading, page, products, fetchProductsStart }) => {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetchProductsStart();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const newProduct = paginate(products, page);
    setNewProduct(newProduct);
  }, [products]);

  if (loading) {
    return <h1>Loading ....</h1>;
  }
  return (
    <ProductListContainer>
      <Filter />
      <ListContainer>
        {newProduct.length > 0 ? (
          newProduct.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })
        ) : (
          <p>No products</p>
        )}
      </ListContainer>
      <Pagination />
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  margin-top: 2rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const mapStateToProps = (state) => {
  return {
    loading: state.product.loading,
    page: state.product.page,
    products: state.product.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsStart: () => dispatch(fetchProductsStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
