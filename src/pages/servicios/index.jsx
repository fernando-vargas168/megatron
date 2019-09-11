import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { navigate } from "gatsby";
import Img from "gatsby-image";
import {
  Container,
  Grid,
  Box,
  Card as C,
  CardContent as CC,
  CardActionArea,
  CardMedia,
  Typography,
  Dialog
} from "@material-ui/core";
import styled from "styled-components";
import HeaderPage from "../../components/HeaderPage.jsx";
import ContainerPage from "../../components/ContainerPage.jsx";
import Form from "../../components/Form";
import SEO from "../../components/Head/SEO.jsx";
import find from "../../../lib/findDataPages";
const servicios = ({ data }) => {
  const { customBackground, customText } = find(data, "servicios");

  let servicios = [];
  data.allFile.edges.forEach(({ node }) => {
    if (node.extension === "md") {
      servicios.push(node.childMarkdownRemark.frontmatter.title);
    }
  });

  return (
    <div>
      <SEO
        title="MEGATRON | Servicios de Ingeniería en Bolivia"
        path="/servicios"
        description={servicios.join(" | ")}
      />
      <ContainerPage className="Servicios">
        <HeaderPage
          background={customBackground}
          icon="/img/serviciosCover.svg"
          text1="Creamos"
          text2={customText}
          altImg="Persona Dibujando un plano de un cohete en representación de los servicios de Megatron"
          bottom="true"
        />
        <CardsContainer container spacing={3}>
          {data.allFile.edges.map(
            ({ node }, index) =>
              node.extension === "md" && (
                <CardChild
                  key={index}
                  title={node.childMarkdownRemark.frontmatter.title}
                  description={node.childMarkdownRemark.frontmatter.description}
                  icon={node.childMarkdownRemark.frontmatter.icon}
                  slug={node.childMarkdownRemark.fields.slug}
                />
              )
          )}
        </CardsContainer>
      </ContainerPage>
    </div>
  );
};
const CardChild = ({ title, description, icon, slug }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CardContainer item xs={12} sm={6}>
      <Card>
        {/* <CardActionArea onClick={() => navigate(`/servicios${slug}`)}> */}
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            {/* <Img fluid={img.childImageSharp.fluid} /> */}
            <IconServicio src={icon} alt="" />
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <Form
          formName="servicios"
          name="servicio"
          value={`Estoy interesado en este servicio "${title}"`}
          title={title}
          description={description}
        />
      </Dialog>
    </CardContainer>
  );
};
const CardsContainer = styled(Grid)`
  margin-top: 15px !important;
  width: 100%;
`;
const Card = styled(C)`
  background: white !important;
  box-shadow: 2px 2px 5px 0.5px !important;
  width: 300px;
`;
const CardContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContent = styled(CC)`
  padding: 10px !important;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const IconServicio = styled.img`
  margin-right: 10px;
  height: 50px;
`;
export default servicios;

export const query = graphql`
  query Servicios {
    allFile(
      filter: {
        sourceInstanceName: { in: ["servicios", "siteConfig"] }
        extension: { in: ["md", "yml"] }
      }
    ) {
      edges {
        node {
          relativePath
          extension
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
              icon
              description
            }
          }
          childSiteConfigYaml {
            default
            servicios {
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
