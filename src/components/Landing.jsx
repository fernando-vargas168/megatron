import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import styled from "styled-components";
import { Link as L } from "gatsby";
import { useSpring, animated } from "react-spring";
import { SuperCopy, CopyH1 } from "../styles/widgets";
import ColorsBackground from "../components/ColorsBackground";
import TrailPresentation from "../components/TrailPresentation";
import Parrallax from "./Parrallax";
import { Responsive } from "../styles/vars";
const flex = `
    display: flex !important;
    justify-content: center;
    align-items: flex-start;`;
const LandingContainer = styled.div`
  ${flex}

  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: calc(100vh - 85px);
  ${Responsive.miniTablet} {
    justify-content: flex-end;
  }
  ${Responsive.miniMobile} {
    align-items: flex-start;
    justify-content: center;
  }
`;
const LandingText = styled.div`
  ${flex}
  flex-direction: column;
  width: 50%;
  width: 50%;
  margin-left: 10%;
  min-width: 35%;
  max-width: 50%;
  ${Responsive.miniTablet} {
    width: 40%;
    margin-left: 0;
  }
  ${Responsive.mobile} {
    width: 50%;
  }
  ${Responsive.miniMobile} {
    max-width: 100%;
    width: 90%;
  }
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
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const Landing = () => {
  const [toggle, setToggle] = useState(true);
  const [parrallax, setParrallax] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  const items = [
    <Link to="/servicios">
      <ColorsBackground colors={["#F04D40", "#F9DA5E"]}>
        <LandingH1>Creamos,</LandingH1>
      </ColorsBackground>
    </Link>,
    <Link to="/cursos">
      <ColorsBackground colors={["#F9DA5E", "#6FCAC7"]}>
        <LandingH1>Enseñamos</LandingH1>
      </ColorsBackground>
    </Link>,
    <Link to="/trabajo">
      <ColorsBackground colors={["#6FCAC7", "#526dd9"]}>
        <LandingH1>Y Econtramos</LandingH1>
      </ColorsBackground>
    </Link>,
    <SuperCopy> INGENIERIA</SuperCopy>
  ];

  return (
    <LandingContainer
      className="LandingContainer"
      onMouseMove={({ clientX: x, clientY: y }) =>
        setParrallax({ xy: calc(x, y) })
      }
    >
      <LandingText className="LandingText">
        <TrailPresentation items={items} toggle={toggle} />
        {/* <Button onClick={() => setToggle(!toggle)}>Click</Button> */}
      </LandingText>
      <Parrallax parrallax={parrallax} setParrallax={setParrallax} />
    </LandingContainer>
  );
};

export default Landing;
