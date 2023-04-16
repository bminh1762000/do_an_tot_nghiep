import React from "react";
import styled, { css } from "styled-components";

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={handleChange}
      {...props}
      className={props.isValid ? "" : "noValid"}
    />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -25px;
  left: 0px;
  font-size: 12px;
  color: ${mainColor};
`;

const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &.noValid {
    border: 1px solid #ed4c67;
  }

  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export default FormInput;
