import React from "react";

import styled from "styled-components";

const CartItem = ({
  item: {
    product: { imageUrl, price, name },
    quantity,
  },
}) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const ItemImage = styled.img`
  width: 30%;
`;

const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export default CartItem;
