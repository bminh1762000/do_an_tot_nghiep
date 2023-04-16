import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const ProductItem = ({ product: { title, imageUrl, price, _id } }) => {
  const history = useHistory();
  return (
    <CartItemContainer onClick={() => history.push(`products/${_id}`)}>
      <CartImage imageUrl={imageUrl} />
      <CartDetail>
        <p className="title">{title}</p>
        <p className="price">{price}đ</p>
      </CartDetail>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  width: 20%;
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  box-shadow: 1px 5px 16px #000;
  cursor: pointer;
  margin: 0 1rem 2rem 1rem;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
const CartImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 85%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 0.2rem;
`;

const CartDetail = styled.div`
  width: 100%;
  // display: flex;
  // justify-content: space-between;
  // margin-top: 1.5rem;
  padding: 0 1rem;

  p {
    font-weight: 600;
    font-size: 1.125rem;
  }
`;

export default ProductItem;
