import React from "react";
import Head from "./Head/index.jsx";
import Menu from "./Menu.jsx";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
// const Container = styled.div``;

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Menu />
      <Container fluid>{children}</Container>
    </>
  );
};

export default Layout;
