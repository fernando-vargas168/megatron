import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link as L } from "gatsby";
import { useSpring, animated } from "react-spring";
import { SuperCopy, CopyH1 } from "../styles/widgets";
import ColorsBackground from "../components/ColorsBackground";
import TrailPresentation from "../components/TrailPresentation";
import Parrallax from "./Parrallax";
import { Responsive } from "../styles/vars";
import { Colors } from "../styles/vars";
const { red, blue, yellow, green } = Colors;
const GlobalStyle = createGlobalStyle`
body {
  overflow: hidden;
  
}`;
const LandingContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: calc(100vh - 75px);
  ${Responsive.miniTablet} {
    justify-content: flex-end;
    // align-items: center;
  }
  ${Responsive.mobile} {
    display: flex;
    height: calc(100vh - 57px);
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
`;
const LandingText = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 80vh;
  width: 50%;
  margin-left: 10%;
  min-width: 35%;
  ${Responsive.miniTablet} {
    width: 45%;
    margin-left: 0;
  }
  ${Responsive.mobile} {
    width: 100%;
    display: flex;
    height: calc(100vh - 57px);
    align-items: center;
    justify-content: center;
  }
`;
const LandingH1 = styled(SuperCopy)`
  color: white;
  // text-shadow: 2px 2px 5px black;
  box-shadow: 2px 2px 5px black;
  cursor: pointer;
  text-align: center;
  ${Responsive.mobile} {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }
`;
const Link = styled(L)`
  color: black;
  &:hover {
    color: black;
  }
`;
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const Landing = () => {
  const [toggle, setToggle] = useState(true);
  const [parrallax, setParrallax] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  const items = [
    <Link to="/servicios">
      <ColorsBackground colors={[red, blue]}>
        <LandingH1>Creamos,</LandingH1>
      </ColorsBackground>
    </Link>,
    <Link to="/cursos">
      <ColorsBackground colors={[blue, yellow]}>
        <LandingH1>Enseñamos</LandingH1>
      </ColorsBackground>
    </Link>,
    <Link to="/trabajo">
      <ColorsBackground colors={[yellow, green]}>
        <LandingH1>Y Econtramos</LandingH1>
      </ColorsBackground>
    </Link>,
    <LandingH1
      style={{
        textShadow: "none",
        color: "black",
        cursor: "initial",
        boxShadow: "none"
      }}
    >
      INGENIERIA
    </LandingH1>
  ];

  return (
    <LandingContainer
      maxWidth={false}
      className="LContainer"
      onMouseMove={({ clientX: x, clientY: y }) =>
        setParrallax({ xy: calc(x, y) })
      }
    >
      <LandingText className="LandingText">
        <TrailPresentation items={items} toggle={toggle} />
      </LandingText>
      <Parrallax parrallax={parrallax} setParrallax={setParrallax} />
      <GlobalStyle />
    </LandingContainer>
  );
};

export default Landing;
