import React, { useState, useEffect } from "react";
import { Container, Header, Image, Grid } from "@material-ui/core";
import ColorsBackground from "../../components/ColorsBackground";
import styled from "styled-components";
import { SuperCopy, CopyH1, CopyH2, CopyH3, P } from "../../styles/widgets";
import { servicios as data } from "./servicios.yml";
const ServiceSuper = styled(SuperCopy)`
  font-size: 3em;
`;
const servicios = () => {
  const [tablet, setTablet] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setTablet(window.matchMedia("(max-width: 800px)").matches);
    setMobile(window.matchMedia("(max-width: 650px)").matches);
    window.addEventListener("resize", () => {
      setTablet(window.matchMedia("(max-width: 800px)").matches);
      setMobile(window.matchMedia("(max-width: 650px)").matches);
    });
  }, []);
  return (
    <Container className="Services">
      <h1>Servicios</h1>
    </Container>
  );
};

export default servicios;
