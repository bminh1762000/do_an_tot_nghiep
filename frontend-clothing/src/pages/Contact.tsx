import React from "react";

import styled from "styled-components";

import Contact from "../components/ContactItem";

const ContactPage = () => (
  <ContactContainer>
    <Contact />
  </ContactContainer>
);

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

export default ContactPage;
