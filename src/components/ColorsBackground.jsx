import React, { cloneElement, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
const ColorsBackground = ({ children }) => {
  const ChildrenComponent = ({ style }) => (
    <>
      {cloneElement(children, { style: { ...style, ...children.props.style } })}
    </>
  );
  const [color, setColor] = useState(0);
  const colors = ["#F04D40", "#F9DA5E", "#6FCAC7", "#526dd9"];
  const springProps = useSpring({
    background: `${colors[color]}`
  });
  useEffect(() => {
    let fixexRequire = false;
    const interval = setInterval(() => {
      !fixexRequire && setColor(state => (state + 1) % colors.length);
    }, 1000);
    const clear = () => {
      console.log("Clear");
      fixexRequire = true;
      clearInterval(interval);
    };
    return () => clear();
  }, []);
  //   const Animated = animated(children);
  const Animated = animated(ChildrenComponent);
  return <Animated style={springProps} />;
};

export default ColorsBackground;
