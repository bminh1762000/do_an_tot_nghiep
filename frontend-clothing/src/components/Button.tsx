import React from "react";
import styled from "styled-components";

const Button = ({ children, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.button`
  padding: 0.75rem 4rem;
  border: none;
  background-color: #e17055;
  color: white;
  margin: 3rem 0;
  transition: 0.2s;

  &:hover {
    background: #ff5900;
  }
`;
