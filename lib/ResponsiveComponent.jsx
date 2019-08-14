import React, { useState, useEffect } from "react";

const ResponsiveComponent = ({ children, mobile, tablet, desktop }) => {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const mqm = "(max-width: 450px)"; //mqm = mediaQueryMobile
  const mqt = `(max-width: 800px) and (min-width: 451px)`; //mqT = mediaQueryTablet
  const mqd = `(min-width: 801px)`; //mqD = mediaQueryDesktop
  useEffect(() => {
    setDesktop(window.matchMedia(mqd).matches);
    setTablet(window.matchMedia(mqt).matches);
    setMobile(window.matchMedia(mqm).matches);
    window.addEventListener("resize", () => {
      setDesktop(window.matchMedia(mqd).matches);
      setTablet(window.matchMedia(mqt).matches);
      setMobile(window.matchMedia(mqm).matches);
    });
  }, []);
  return (
    <>
      {desktop && isDesktop && children}
      {tablet && isTablet && children}
      {mobile && isMobile && children}
    </>
  );
};

export default ResponsiveComponent;
