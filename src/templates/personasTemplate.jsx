import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import HeaderPage from "../components/HeaderPage";
import ContainerPage from "../components/ContainerPage";
import MarkdownStyles from "../components/MarkdownStyles";
import ListBox from "../components/ListBox";
import { Grid, Dialog } from "@material-ui/core";
import { Responsive } from "../styles/vars";
import Form from "../components/Form";
import ButtonFixed from "../components/ButtonFixed";
import SEO from "../components/Head/SEO";
const personasTemplate = ({ pageContext }) => {
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
    ci,
    name,
    img,
    description,
    softSkills,
    hardSkills,
    edad,
    ciudad,
    estadoCivil,
    licenciaDeConducir,
    educacion,
    experiencia
  } = pageContext.frontmatter;
  const informationGeneral = [
    ciudad,
    `${edad} años de edad`,
    estadoCivil,
    licenciaDeConducir
      ? "Con licencia para conducir"
      : "Sin licencia de conducir"
  ];

  return (
    <div>
      <SEO
        title={`MEGATRON TRABAJOS | ${name}`}
        description={description}
        image={img}
      />
      <ContainerPage>
        <HeaderPage
          component={<FotoPersona fluid={img.childImageSharp.fluid} />}
          text1={name}
          text2={description}
          fontRead1
          fontRead2
        />
        <ContainerInformation>
          <ListBox
            title="Información General"
            label="informationGeneral"
            array={informationGeneral}
          />
          <ListBox
            title="Habilidades Blandas"
            label="softSkills"
            array={softSkills}
          />
          <ListBox
            title="Habilidades Duras"
            label="hardSkills"
            array={hardSkills}
          />
          <ListBox title="Educación" label="educacion" array={educacion} />
          <ListBox
            title="Experiencia"
            label="experiencia"
            array={experiencia}
          />
        </ContainerInformation>
        <MarkdownStyles html={pageContext.html} />
        <ButtonFixed buttons={buttons} />
        <Dialog open={open} onClose={handleClose}>
          <Form
            formName="contactos_empresas"
            name="contacto_empresa"
            value={`${name} ${ci}`}
            title={name}
          />
        </Dialog>
      </ContainerPage>
    </div>
  );
};
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
const FotoPersona = styled(BackgroundImage)`
  display: flex;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.6);
  overflow: hidden;
  background-position: top !important;
  // background: rgba(255, 255, 255, 0.6);
  // padding: 7px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
`;

export default personasTemplate;
