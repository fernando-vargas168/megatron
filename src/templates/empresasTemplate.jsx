import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { Box, Grid, Dialog } from "@material-ui/core";
import HeaderPage from "../components/HeaderPage";
import ContainerPage from "../components/ContainerPage";
import MarkdownStyles from "../components/MarkdownStyles";
import ListBox from "../components/ListBox";
import { Responsive } from "../styles/vars";
import Form from "../components/Form";
import ButtonFixed from "../components/ButtonFixed";
const empresasTemplate = ({ pageContext }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const buttons = [
    {
      text: "Solicitar Contacto",
      color: "primary",
      onClick: handleOpen
    }
  ];
  const {
    nit,
    name,
    img,
    description,
    puesto,
    sueldo,
    categoria,
    publicado,
    contrato,
    vigente,
    beneficios,
    requisitos,
    valores,
    otrosRequisitos
  } = pageContext.frontmatter;
  const informationGeneral = [
    sueldo ? sueldo : "sueldo no definido",
    contrato,
    categoria,
    `Publicado el: ${publicado}`
  ];
  return (
    <ContainerPage>
      <HeaderPage
        component={
          <LogoEmpresa
            h1="hey"
            className="IMAGEN"
            fluid={img.childImageSharp.fluid}
          />
        }
        text1={name}
        text2={`Requiere: ${puesto}`}
        fontRead1
        fontRead2
      />
      <MarkdownStyles html={pageContext.html} />
      <ContainerInformation>
        <ListBox
          title="Información general"
          label="informationGeneral"
          array={informationGeneral}
        />
        <ListBox
          title="Requisitos en habilidades"
          label="requisitos"
          array={requisitos}
        />
        <ListBox
          title="Requisitos en Valores"
          label="valores"
          array={valores}
        />
        <ListBox
          title={`Otros requisitos`}
          label="otrosRequisitos"
          array={otrosRequisitos}
        />
        <ListBox
          title={`Beneficios de trabajar en ${name}`}
          label="beneficios"
          array={beneficios}
        />
      </ContainerInformation>
      <ButtonFixed buttons={buttons} />
      <Dialog open={open} onClose={handleClose}>
        <Form
          formName="contactos_empresas"
          name="contacto_empresa"
          value={`${name} ${nit}`}
          title={name}
        />
      </Dialog>
    </ContainerPage>
  );
};
const ImageContainer = props => (
  <Box {...props}>
    <Img style={{ width: "100%", height: "100%" }} fluid={props.fluid} />
  </Box>
);
const ContainerInformation = styled(props => (
  <Grid {...props} container spacing={2} />
))`
  margin-top: 7px;
  padding: 10px 32px;

  ${Responsive.tablet} {
    padding: 10px 24px;
  }
  ${Responsive.miniTablet} {
    padding: 10px 16px;
  }
`;
const LogoEmpresa = styled(ImageContainer)`
  display: flex;
  border-radius: 4px;
  // border: 5px dashed;
  background: rgba(255, 255, 255, 0.6);
  padding: 7px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
`;
export default empresasTemplate;
