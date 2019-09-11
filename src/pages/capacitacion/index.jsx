import React, { useState } from "react";
import Img from "gatsby-image";
import { navigate } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import {
  Grid,
  Box,
  Card as C,
  CardMedia as CM,
  CardActions,
  Button,
  CardContent,
  CardHeader,
  Typography,
  Dialog,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Icon
} from "@material-ui/core";
import Circle from "@material-ui/icons/FiberManualRecord";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";
import ContainerPage from "../../components/ContainerPage";
import HeaderPage from "../../components/HeaderPage";
import Form from "../../components/Form";
import SEO from "../../components/Head/SEO";
import find from "../../../lib/findDataPages";

const Capacitacion = ({ data }) => {
  const { customBackground, customText } = find(data, "capacitacion");
  let capacitacion = []; //SEO

  let refrigeracion = []; //Category
  let electricidad = []; //Category
  let electronica = []; //Category
  let automatizacion = []; //Category
  let mecatronica = []; //Category
  const stylesCategory = {
    refrigeracion: { color: "#00d8f9" },
    electricidad: { color: "#e5383b" },
    electronica: { color: "#145f3a" },
    automatizacion: { color: "#ff3f00" },
    mecatronica: { color: "#231991" }
  };
  for (let i = 0; i < data.allFile.edges.length; i++) {
    if (data.allFile.edges[i].node.extension == "md") {
      capacitacion.push(
        data.allFile.edges[i].node.childMarkdownRemark.frontmatter.title
      );
      switch (
        data.allFile.edges[i].node.childMarkdownRemark.frontmatter.category
      ) {
        case "refrigeracion":
          refrigeracion.push(data.allFile.edges[i].node.childMarkdownRemark);
          break;
        case "electricidad":
          electricidad.push(data.allFile.edges[i].node.childMarkdownRemark);
          break;
        case "electronica":
          electronica.push(data.allFile.edges[i].node.childMarkdownRemark);
          break;
        case "automatizacion":
          automatizacion.push(data.allFile.edges[i].node.childMarkdownRemark);
          break;
        case "mecatronica":
          mecatronica.push(data.allFile.edges[i].node.childMarkdownRemark);
          break;
      }
    }
  }

  return (
    <div>
      <SEO
        title="MEGATRON | capacitacion de ingeniería en BOLIVIA"
        description={capacitacion.join(" | ")}
        path="/capacitacion"
      />
      <ContainerPage className="Capacitacion" style={{ minHeight: "200vh" }}>
        <HeaderPage
          background={customBackground}
          icon="/img/capacitacionCover.svg"
          text1="Enseñamos"
          text2={customText}
          alt="Ingeniero dando clases / clases de ingeniería de Megatron"
          bottom="true"
        />
        <ExpandContainer>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Circle style={stylesCategory.automatizacion} />
              <Typography>Automatización</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <CardsContainer container spacing={3}>
                {automatizacion.map((element, index) => (
                  <CursoCard
                    key={index}
                    title={element.frontmatter.title}
                    img={element.frontmatter.img}
                    date={element.frontmatter.date}
                    slug={element.fields.slug}
                    styleAvatar={stylesCategory.automatizacion}
                  />
                ))}
              </CardsContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Circle style={stylesCategory.electricidad} />
              <Typography>Electricidad</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <CardsContainer container spacing={3}>
                {electricidad.map((element, index) => (
                  <CursoCard
                    key={index}
                    title={element.frontmatter.title}
                    img={element.frontmatter.img}
                    date={element.frontmatter.date}
                    slug={element.fields.slug}
                    styleAvatar={stylesCategory.electricidad}
                  />
                ))}
              </CardsContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Circle style={stylesCategory.refrigeracion} />
              <Typography>Refrigeración</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <CardsContainer container spacing={3}>
                {refrigeracion.map((element, index) => (
                  <CursoCard
                    key={index}
                    title={element.frontmatter.title}
                    img={element.frontmatter.img}
                    date={element.frontmatter.date}
                    slug={element.fields.slug}
                    styleAvatar={stylesCategory.refrigeracion}
                  />
                ))}
              </CardsContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Circle style={stylesCategory.electronica} />
              <Typography>Electrónica</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <CardsContainer container spacing={3}>
                {electronica.map((element, index) => (
                  <CursoCard
                    key={index}
                    title={element.frontmatter.title}
                    img={element.frontmatter.img}
                    date={element.frontmatter.date}
                    slug={element.fields.slug}
                    styleAvatar={stylesCategory.electronica}
                  />
                ))}
              </CardsContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Circle style={stylesCategory.mecatronica} />
              <Typography>Mecatrónica</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <CardsContainer container spacing={3}>
                {mecatronica.map((element, index) => (
                  <CursoCard
                    key={index}
                    title={element.frontmatter.title}
                    img={element.frontmatter.img}
                    date={element.frontmatter.date}
                    slug={element.fields.slug}
                    styleAvatar={stylesCategory.mecatronica}
                  />
                ))}
              </CardsContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </ExpandContainer>
      </ContainerPage>
    </div>
  );
};

export default Capacitacion;
// const Background = ()=>(<BackgroundImage fluid={img.childImageSharp.fluid}/>)
const CursoCard = ({ title, img, date, slug, styleAvatar }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CardContainer item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          avatar={<Circle style={styleAvatar}></Circle>}
          title={title}
          subheader={date}
        />
        <Background fluid={img.childImageSharp.fluid} />
        {/* <CardContent>
          <Typography>{title}</Typography>
        </CardContent> */}
        <CardActions>
          <Button
            onClick={handleOpen}
            variant="contained"
            size="small"
            color="primary"
          >
            Reservar
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate(`/capacitacion${slug}`)}
            size="small"
          >
            Más información
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <Form
          formName="capacitacion"
          name="curso"
          value={`Quiero reservar el curso "${title}"`}
          title={title}
        />
      </Dialog>
    </CardContainer>
  );
};

const ExpandContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-contente: center;
  align-itemas: center;
`;

const CardsContainer = styled(Grid)`
  margin-top: 15px !important;
`;
const CardContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled(C)`
  min-width: 290px;
  max-width: 350px;
  width: 300px;
  // background: #aaafff !important;
`;
const CardMedia = styled(CM)`
  padding-top: 56.25%; //16:9
`;
const Background = styled(BackgroundImage)`
  // height: 300px !important;
  padding-top: 56.25%; //16:9
`;
export const query = graphql`
  query Capacitacion {
    allFile(
      filter: {
        sourceInstanceName: { in: ["capacitacion", "siteConfig"] }
        extension: { in: ["md", "yml"] }
      }
    ) {
      edges {
        node {
          relativePath
          extension
          childMarkdownRemark {
            frontmatter {
              title
              img {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              date
              category
            }
            fields {
              slug
            }
          }
          childSiteConfigYaml {
            default
            capacitacion {
              background {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
            }
          }
        }
      }
    }
  }
`;
