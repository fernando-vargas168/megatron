import React, { useState } from "react";
import HeaderPage from "../components/HeaderPage";
import ContainerPage from "../components/ContainerPage";
import MarkdownStyles from "../components/MarkdownStyles";
import styled from "styled-components";
import { Grid, Dialog } from "@material-ui/core";
import ListBox from "../components/ListBox";
import { Responsive } from "../styles/vars";
import ButtonFixed from "../components/ButtonFixed";
import Form from "../components/Form";
import SEO from "../components/Head/SEO";
const capacitacionTemplate = ({ pageContext }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    title,
    img,
    date,
    description,
    contenido,
    requisitosRecomendados
  } = pageContext.frontmatter;
  const buttons = [
    {
      text: "Reservar curso",
      onClick: handleOpen,
      color: "primary"
    }
  ];
  return (
    <div>
      <SEO
        title={`MEGATRON CPACITACIÓN | ${title}`}
        description={description}
        image={img}
      />
      <ContainerPage>
        <HeaderPage
          background={[
            img.childImageSharp.fluid,
            `linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73))`
          ].reverse()}
          text1={title}
          text2={description}
          fontRead1
          fontRead2
        />
        <ContainerInformation>
          <ListBox
            lg={6}
            md={6}
            xs={12}
            title="Contenido del curso"
            label="contenido"
            array={contenido}
          />
          <ListBox
            lg={6}
            md={6}
            xs={12}
            title="Requisitos Recomendados"
            label="requisitosRecomendados"
            array={requisitosRecomendados}
          />
        </ContainerInformation>
        <MarkdownStyles
          style={{ marginBottom: "25px" }}
          html={pageContext.html}
        />
        <ButtonFixed buttons={buttons} />
        <Dialog open={open} onClose={handleClose}>
          <Form
            formName="capacitacion"
            name="capacitacion"
            value={title}
            title={title}
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
  margin-bottom: 45px !important;
  padding: 10px 32px;

  ${Responsive.tablet} {
    padding: 10px 24px;
  }
  ${Responsive.miniTablet} {
    padding: 10px 16px;
  }
`;
export default capacitacionTemplate;
