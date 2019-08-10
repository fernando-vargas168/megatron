import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Colors, Responsive, Font } from "./vars";

export const CopyH1 = styled.h1`
  font-family: "Montserrat", monospace;
  font-family: "Share Tech Mono", monospace;
  padding: 5px 10px;
`;
export const CopyH2 = styled.h2`
  font-family: "Montserrat", monospace;
  font-family: "Share Tech Mono", monospace;
  padding: 5px 10px;
`;
export const CopyH3 = styled.h3`
  font-family: "Montserrat", monospace;
`;
export const P = styled.p`
  font-family: "Montserrat", monospace;
  padding: 5px 10px;
`;

export const SuperCopy = styled(CopyH1)`
  font-size: 4em;
  ${Responsive.tablet} {
    font-size: 2em;
  }
  ${Responsive.miniTablet} {
    font-size: 1.5em;
  }
  ${Responsive.mobile} {
    font-size: 1.5em;
  }
  ${Responsive.miniMobile} {
    font-size: 2em;
  }
`;
