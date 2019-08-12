import React from "react";
import { useSpring, useTrail, animated } from "react-spring";
import styled from "styled-components";
import { Responsive } from "../styles/vars";
const TrailsText = styled(animated.div)`
  ${Responsive.mobile} {
    width: 100%;
  }
`;
const TrailPresentation = ({ items, toggle }) => {
  const xVar = -1000;
  const trail = useTrail(4, {
    // config,
    from: { opacity: 0, x: xVar },
    x: 0,
    opacity: 1
  });
  return trail.map(({ x, height, ...rest }, index) => (
    <TrailsText
      key={index}
      className="trails-text"
      style={{
        transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
      }}
    >
      {items[index]}
    </TrailsText>
  ));
};
export default TrailPresentation;
