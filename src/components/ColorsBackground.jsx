import React, { cloneElement, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Colors } from "../styles/vars";
const { red, blue, yellow, green } = Colors;
const ColorsBackground = ({
  children,
  colors = [red, blue, yellow, green]
}) => {
  const ChildrenComponent = ({ style }) => (
    <>
      {cloneElement(children, { style: { ...style, ...children.props.style } })}
    </>
  );
  const [color, setColor] = useState(0);
  const springProps = useSpring({
    background: `${colors[color]}`
  });
  useEffect(() => {
    let fixexRequire = false;
    const interval = setInterval(() => {
      !fixexRequire && setColor(state => (state + 1) % colors.length);
    }, 1000);
    const clear = () => {
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
