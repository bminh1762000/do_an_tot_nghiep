import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { addItemStart } from "../redux/cart/cart.actions";
import { selectTokenId } from "../redux/user/user.selectors";

import styled from "styled-components";
import CustomButton from "./CustomButton";

const CollectionItem = ({ item, addItem, token, history }: any) => {
  const { name, price, imageUrl, _id } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        onClick={() =>
          token ? addItem({ _id, token }) : history.push("/signin")
        }
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const CollectionItemContainer = styled.div`
  position: relative;
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  margin-top: 20px;

  &:hover {
    button {
      display: block;
      opacity: 0.85;
    }

    .image {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

const AddButton = styled(CustomButton)`
  display: none;
  position: absolute;
  top: 255px;
  width: 80%;
  opacity: 0.6;
  font-family: "Open Sans Condensed", sans-serif;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    border-radius: 0.2rem;
  }
`;

const CollectionItemImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  box-shadow: 1px 2px 12px #636e72;
  border-radius: 0.25rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const PriceContainer = styled.span`
  width: 10%;
  text-align: right;

  @media screen and (max-width: 800px) {
    width: 20%;
  }
`;

const mapStateToProps = createStructuredSelector({
  token: selectTokenId,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemStart(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CollectionItem));
