import React from "react";
import styled from "styled-components";
import { Container as C } from "@material-ui/core";
const ContainerPage = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled(C)`
  padding: 0 !important;
  max-width: none !important;
  margin: 0;
  width: 100%;
`;
export default ContainerPage;
