import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import styled from "styled-components";

import { SuperCopy, CopyH1 } from "../styles/widgets";
import ColorsBackground from "../components/ColorsBackground";
import TrailPresentation from "../components/TrailPresentation";
const flex = `
    display: flex !important;
    justify-content: center;
    align-items: flex-start;`;
const LandingText = styled(Container)`
  ${flex}
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const LandingH1 = styled(SuperCopy)`
  text-shadow: 2px 2px 5px black;
  cursor: pointer;
`;
const Landing = () => {
  const [toggle, setToggle] = useState(true);
  const items = [
    <ColorsBackground>
      <LandingH1>Creamos,</LandingH1>
    </ColorsBackground>,
    <ColorsBackground>
      <LandingH1>Enseñamos</LandingH1>
    </ColorsBackground>,
    <ColorsBackground>
      <LandingH1>Y Econtramos</LandingH1>
    </ColorsBackground>,
    <SuperCopy> INGENIERIA</SuperCopy>
  ];

  return (
    <div>
      <LandingText>
        <TrailPresentation items={items} toggle={toggle} />
        <Button onClick={() => setToggle(!toggle)}>Click</Button>
      </LandingText>
    </div>
  );
};

export default Landing;
