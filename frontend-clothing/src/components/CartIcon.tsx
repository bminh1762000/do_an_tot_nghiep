import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FaShoppingCart } from "react-icons/fa";

import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";
import styled from "styled-components";

const CartIcon = ({ toggleCartHidden, count }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <FaShoppingCart size={20} />
    <ItemCountContainer>{count}</ItemCountContainer>
  </CartIconContainer>
);

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIconContainer = styled.img`
  width: 24px;
  height: 24px;
`;

const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 13px;
`;

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  count: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
