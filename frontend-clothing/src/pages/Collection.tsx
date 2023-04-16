import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../components/CollectionItem";

import { selectCollection } from "../redux/shop/shop.selector";
import styled from "styled-components";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <h2>{title.toUpperCase()}</h2>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item._id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 38px;
    margin: 0 auto 30px;
  }
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export default connect(mapStateToProps)(CollectionPage);
