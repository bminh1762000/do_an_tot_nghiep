import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const HomePage = () => {
  const history = useHistory();
  return (
    <HomePageContainer>
      <HeroContainer>
        <h1>Think, Code, Deploy</h1>
        <h3>Embrace your choice - we do</h3>
        <button onClick={() => history.push("/products")}>OUR PRODUCTS</button>
      </HeroContainer>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.section`
  width: 100%;
  height: 400px;
  position: relative;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 50%,
      hsla(0, 0%, 100%, 0.1)
    ),
    url("https://images.unsplash.com/photo-1599843533756-8d3aac8ff16b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")
      50% / cover no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 2.5rem;
`;

const HeroContainer = styled.div`
  position: absolute;
  padding: 2rem 5rem;
  color: #d35400;

  h1 {
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  button {
    border: 0;
    background: #d35400;
    padding: 1rem 2rem;
    transition: 0.5s;

    &:hover {
      color: #d35400;
      border: 3px solid #d35400;
      background: none;
    }
  }
`;

export default HomePage;
