import React from "react";

import CartItem from "./CartItem";
import styled from "styled-components";

type Props = {
  cart: any[];
};

const CartList = ({ cart }: Props) => {
  return (
    <CartListContainer>
      {cart.map((cartItem) => (
        <CartItem key={cartItem._id} item={cartItem} />
      ))}
    </CartListContainer>
  );
};

const CartListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export default CartList;
