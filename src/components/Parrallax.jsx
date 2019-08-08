import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.3}px,${y / 3.5}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3.1}px,${y / 3.5}px,0)`;

const ContainerParrallax = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    position: absolute;
    border-radius: 5px;
    sbackground-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
  }

  .card1 {
    min-width: 40ch;
    min-height: 40ch;
    width: 57ch;
    height: 57ch;
    max-width: 100ch;
    max-height: 100ch;
    background-image: url(img/fondo.svg);
  }

  .card2 {
    width: 60ch;
    height: 60ch;
    bottom: -20ch;
    right: 3.5ch;
    background-image: url(img/torre.svg);
  }

  .card3 {
    width: 40ch;
    height: 40ch;
    bottom: 9ch;
    right: 23ch;
    background-image: url(img/ingeniero1.svg);
  }

  .card4 {
    width: 40ch;
    height: 40ch;
    bottom: 9ch;
    right: 0ch;
    background-image: url(img/ingeniero2.svg);
  }
  .card5 {
    width: 15ch;
    height: 15ch;
    bottom: 12ch;
    right: 27ch;
    background-image: url(img/planos.svg);
  }
`;
const Parrallax = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  return (
    <ContainerParrallax
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        class="card card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        class="card card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        class="card card4"
        style={{ transform: props.xy.interpolate(trans4) }}
      />
      <animated.div
        class="card card5"
        style={{ transform: props.xy.interpolate(trans5) }}
      />
    </ContainerParrallax>
  );
};

export default Parrallax;
