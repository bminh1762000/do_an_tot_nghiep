import React from "react";

import styled from "styled-components";

const AboutPage = () => (
  <AboutPageContainer>
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor amet pok pok blue bottle fanny pack bushwick mumblecore
      photo booth. Unicorn coloring book letterpress small batch, before they
      sold out pour-over four loko ethical. Gentrify letterpress XOXO, kale
      chips occupy mumblecore pickled cred sustainable. Hot chicken brooklyn
      vape chartreuse 3 wolf moon chicharrones ugh synth craft beer sustainable.
      Occupy sriracha keytar paleo migas, fashion axe taxidermy lumbersexual
      pabst swag bitters drinking vinegar fingerstache put a bird on it
      semiotics.
    </p>
  </AboutPageContainer>
);

 const AboutPageContainer = styled.div`
  width: 80%;
  padding: 2rem 10rem;
  margin-top: 5rem;
  margin: 5rem auto 0 auto;

  h1 {
    color: #dc3028;
  }

  p {
    font-size: 1.125rem;
    line-height: 2.25rem;
  }
`;

export default AboutPage;
