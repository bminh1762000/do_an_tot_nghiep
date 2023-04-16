import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "./CollectionItem";

import styled from "styled-components";

const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
}: any) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item._id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: #b2bec3;
  }

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

export default withRouter(CollectionPreview);
