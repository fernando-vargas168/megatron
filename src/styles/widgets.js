import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Colors } from "./vars";

const mobile = `@media screen and (max-width: 500px)`;
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
  ${mobile} {
    font-size: 1.5em;
  }
`;
