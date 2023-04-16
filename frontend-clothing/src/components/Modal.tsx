import React from "react";
import ReactDOM from "react-dom";

import CustomButton from "./CustomButton";

import styled from "styled-components";

const Modal = (props) =>
  ReactDOM.createPortal(
    <ModalContainer>
      <ModalHeaderContainer>
        <h1>{props.title}</h1>
      </ModalHeaderContainer>
      <ModalContentContainer>{props.children}</ModalContentContainer>
      <ModalActionContainer>
        <CustomButton onClick={props.onAcceptModal}>Cancel</CustomButton>
        <CustomButton onClick={props.onCancelModal}>Accept</CustomButton>
      </ModalActionContainer>
    </ModalContainer>,
    document.getElementById("modal-root")
  );

const ModalContainer = styled.div`
  position: fixed;
  width: 90%;
  left: 5%;
  top: 20vh;
  background: white;
  border-radius: 5px;
  z-index: 200;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  @media (min-width: 768px) {
    width: 40rem;
    left: calc((100% - 40rem) / 2);
  }
`;

const ModalHeaderContainer = styled.header`
  border-bottom: 2px solid #3b0062;
  h1 {
    font-size: 1.5rem;
    color: #3b0062;
    margin: 1rem;
  }
`;

const ModalContentContainer = styled.div`
  padding: 1rem;
`;

const ModalActionContainer = styled.div`
  padding: 1rem;
  text-align: right;
`;

export default Modal;
