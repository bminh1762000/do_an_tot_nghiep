import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  removeItemStart,
  addItemStart,
  clearItemFromCartStart,
} from "../redux/cart/cart.actions";
import { selectTokenId } from "../redux/user/user.selectors";
import styled from "styled-components";

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem, token }) => {
  const {
    product: { imageUrl, name, price, _id },
    quantity,
  } = cartItem;
  return (
    <CheckoutItemContainer>
      <ItemImageContainer>
        <img src={imageUrl} alt="items" />
      </ItemImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem({ _id, token })}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem({ _id, token })}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem({ _id, token })}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid grey;
  min-height: 100px;
  font-size: 20px;
`;

const ItemImageContainer = styled.div`
  width: 23%;
  padding-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.span`
  width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const mapStateToProps = createStructuredSelector({
  token: selectTokenId,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemStart(item)),
  addItem: (item) => dispatch(addItemStart(item)),
  clearItem: (item) => dispatch(clearItemFromCartStart(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
