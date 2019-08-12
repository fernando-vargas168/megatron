import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Responsive } from "../styles/vars";
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 9}px,${y / 9}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 7.5}px,${y / 7.5}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 6.1}px,${y / 6.5}px,0)`;
const transc1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const transc2 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const transc3 = (x, y) => `translate3d(${x / 45}px,${y / 45}px,0)`;
const transc4 = (x, y) => `translate3d(${x / 44}px,${y / 44}px,0)`;
const transc5 = (x, y) => `translate3d(${x / 43}px,${y / 43}px,0)`;
const transc6 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;

const Svg = animated.img;
const ContainerParrallax1 = styled.div`
  position: absolute;
  right: 10%;
  width: 400px;
  height: 400px;
  ${Responsive.miniDesktop} {
    width: 300px;
    height: 300px;
  }
  ${Responsive.tablet} {
    width: 250px;
    height: 250px;
  }
  ${Responsive.miniTablet} {
    width: 200px;
    height: 200px;
    right: auto;
    left: 5%;
  }
  ${Responsive.mobile} {
    // display: none;
    width: 250px;
    height: 250px;
    left: 48%;
    transform: translate(-50%, 0);
    top: 1%;
  }
  .card {
    position: absolute;
    will-change: transform;
  }

  .card1 {
    width: 100%;
    height: 100%;
    bottom: 0%;
    top: 0%;
    right: 0%;
    left: 0%;
    ${Responsive.mobile} {
      display: none;
    }
  }

  .card2 {
    width: 105%;
    height: 105%;
    bottom: 8%;
    left: -2%;
    ${Responsive.mobile} {
      display: none;
    }
  }

  .card3 {
    width: 65%;
    height: 65%;
    bottom: 8%;
    left: -4.5%;
  }

  .card4 {
    width: 65%;
    height: 65%;
    bottom: 8%;
    right: -1%;
  }
  .card5 {
    width: 25%;
    height: 25%;
    bottom: 20%;
    right: 40%;
  }
`;
const ContainerParrallax2 = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  ${Responsive.tablet} {
    display: none;
  }
  .c {
    position: absolute;
    will-change: transform;
    max-width: 40vw;
  }
  .c1 {
    width: 40vw;
    bottom: -50px;
    left: -160px;
  }
  .c2 {
    width: 40vw;
    top: 0;
    right: -160px;
  }
  .c3 {
    width: 13vw;
    top: 0;
    left: -50px;
  }
  .c4 {
    width: 10vw;
    bottom: 0;
    left: 50%;
  }
  .c5 {
    width: 20vw;
    bottom: -200px;
    right: 10%;
  }
  .c6 {
    width: 5vw;
    top: 5%;
    left: 50%;
  }
`;
const Parrallax = ({ parrallax: props, setParrallax: set }) => {
  return (
    <>
      <ContainerParrallax1 className="Parrallax1">
        <Svg
          src="img/fondo.svg"
          className="card card1"
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <Svg
          src="img/torre.svg"
          className="card card2"
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <Svg
          src="img/ingeniero1.svg"
          className="card card3"
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <Svg
          src="img/ingeniero2.svg"
          className="card card4"
          style={{ transform: props.xy.interpolate(trans4) }}
        />
        <Svg
          src="img/planos.svg"
          className="card card5"
          style={{ transform: props.xy.interpolate(trans5) }}
        />
      </ContainerParrallax1>
      <ContainerParrallax2 className="Parrallax2">
        <Svg
          src="img/c1.svg"
          className="c c1"
          style={{ transform: props.xy.interpolate(transc1) }}
        />
        <Svg
          src="img/c2.svg"
          className="c c2"
          style={{ transform: props.xy.interpolate(transc2) }}
        />
        <Svg
          src="img/c3.svg"
          className="c c3"
          style={{ transform: props.xy.interpolate(transc3) }}
        />
        <Svg
          src="img/c4.svg"
          className="c c4"
          style={{ transform: props.xy.interpolate(transc4) }}
        />
        <Svg
          src="img/c5.svg"
          className="c c5"
          style={{ transform: props.xy.interpolate(transc5) }}
        />
        <Svg
          src="img/c6.svg"
          className="c c6"
          style={{ transform: props.xy.interpolate(transc6) }}
        />
      </ContainerParrallax2>
    </>
  );
};

export default Parrallax;
