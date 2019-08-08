import React from "react";
import Head from "./Head/index.jsx";
import { Container } from "semantic-ui-react";
import Menu from "./Menu.jsx";
const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Container fluid>
        <Menu />
        {children}
      </Container>
    </>
  );
};

export default Layout;
