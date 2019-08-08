import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Image,
  Grid,
  Button,
  Segment
} from "semantic-ui-react";
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
      <Header as="h2">
        <Grid columns={2} padded="vertically">
          <Grid.Column
            width={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Header.Content>
              <ColorsBackground>
                <ServiceSuper>Creamos</ServiceSuper>
              </ColorsBackground>
              <CopyH2>INGENIERÍA</CopyH2>
            </Header.Content>
          </Grid.Column>
          <Grid.Column
            width={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image src="img/serviciosCover.png" />
          </Grid.Column>
        </Grid>
      </Header>
    </Container>
  );
};

export default servicios;
