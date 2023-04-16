import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "./CartItem";
import { selectorCartItems } from "../redux/cart/cart.selectors";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";
import CustomButton from "./CustomButton";
import styled from "styled-components";

const CartDropdown = ({ cartItems, history, toggleCartHidden, count }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {count ? (
          cartItems.map((item) => <CartItem key={item._id} item={item} />)
        ) : (
          <NotifyContainer>Cart is empty</NotifyContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #ffffff;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  overflow-y: auto;
`;

const NotifyContainer = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
`;

const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
  count: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
