import React from "react";

import MenuItem from "./MenuItem";
import styled from "styled-components";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ _id, ...otherSectionProps }) => (
        <MenuItem key={_id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

export default Directory;
