import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectorCartItems,
  selectCartTotal,
} from "../redux/cart/cart.selectors";
import CheckoutItem from "../components/CheckoutItem";

import styled from "styled-components";
import StripeCheckoutButton from "../components/StripeButton";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem._id} cartItem={cartItem} />
    ))}
    <TotalSection>TOTAL: ${total}</TotalSection>
    <TextWarning>
      *Please use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TextWarning>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
  total: selectCartTotal,
});

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 22%;
  padding: 0 10px;

  &:last-child {
    width: 7%;
  }

  @media screen and (max-width: 800px) {
    width: 20%;
    padding: 0;

    &:last-child {
      width: 12%;
    }
  }
`;

const TotalSection = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`;

const StripeButton = styled(StripeCheckoutButton)`
  margin-left: auto;
  margin-top: 40px;
`;

const TextWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export default connect(mapStateToProps)(CheckoutPage);
