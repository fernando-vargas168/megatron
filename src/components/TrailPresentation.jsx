import React from "react";
import { useSpring, useTrail, animated } from "react-spring";
const TrailPresentation = ({ items, toggle }) => {
  const xVar = -50;
  const trail = useTrail(4, {
    // config,
    x: toggle ? 0 : xVar,
    opacity: toggle ? 1 : 0,
    from: { opacity: 0, x: xVar }
  });
  return trail.map(({ x, height, ...rest }, index) => (
    <animated.div
      key={index}
      className="trails-text"
      style={{
        ...rest,
        transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
        margin: "10px 0"
      }}
    >
      {items[index]}
    </animated.div>
  ));
};
export default TrailPresentation;
