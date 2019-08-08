import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import styled from "styled-components";
import { Link as L } from "gatsby";
import { SuperCopy, CopyH1 } from "../styles/widgets";
import ColorsBackground from "../components/ColorsBackground";
import TrailPresentation from "../components/TrailPresentation";
import Parrallax from "./Parrallax";
const flex = `
    display: flex !important;
    justify-content: center;
    align-items: flex-start;`;
const LandingContainer = styled.div`
  ${flex}
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 85px);
`;
const LandingText = styled.div`
  ${flex}
  flex-direction: column;
  min-width: 35%;
  max-width: 50%;
`;
const LandingH1 = styled(SuperCopy)`
  text-shadow: 2px 2px 5px black;
  cursor: pointer;
`;
const Link = styled(L)`
  color: black;
  &:hover {
    color: black;
  }
`;
const Landing = () => {
  const [toggle, setToggle] = useState(true);
  const items = [
    <Link to="/servicios">
      <ColorsBackground>
        <LandingH1>Creamos,</LandingH1>
      </ColorsBackground>
    </Link>,
    <Link to="/cursos">
      <ColorsBackground>
        <LandingH1>Enseñamos</LandingH1>
      </ColorsBackground>
    </Link>,
    <Link to="/trabajo">
      <ColorsBackground>
        <LandingH1>Y Econtramos</LandingH1>
      </ColorsBackground>
    </Link>,
    <SuperCopy> INGENIERIA</SuperCopy>
  ];

  return (
    <LandingContainer>
      <LandingText>
        <TrailPresentation items={items} toggle={toggle} />
        <Button onClick={() => setToggle(!toggle)}>Click</Button>
      </LandingText>
      <Parrallax />
    </LandingContainer>
  );
};

export default Landing;
