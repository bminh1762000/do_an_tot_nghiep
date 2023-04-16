import React from "react";

import CollectionPreview from "./CollectionPreview";

import styled from "styled-components";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ _id, ...otherCollectionsProps }) => (
      <CollectionPreview key={_id} {...otherCollectionsProps} />
    ))}
  </CollectionsOverviewContainer>
);

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CollectionsOverview;
