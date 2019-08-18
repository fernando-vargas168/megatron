import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import {
  Container,
  Grid,
  Box,
  Card as C,
  CardContent as CC,
  CardActionArea,
  CardMedia,
  Typography
} from "@material-ui/core";
import styled from "styled-components";
import HeaderPage from "../../components/HeaderPage.jsx";
import ContainerPage from "../../components/ContainerPage.jsx";

const servicios = ({ data }) => {
  return (
    <ContainerPage className="Servicios">
      <HeaderPage
        img="/img/serviciosCover.svg"
        text1="Creamos"
        text2="Servicios y proyectos"
        altImg="Persona Dibujando un plano de un cohete en representación de los servicios de Megatron"
      />
      <CardsContainer container spacing={3}>
        {data.allFile.edges.map(({ node }, index) => (
          <CardChild
            key={index}
            text={node.childMarkdownRemark.frontmatter.title}
            icon={node.childMarkdownRemark.frontmatter.icon}
          />
        ))}
      </CardsContainer>
    </ContainerPage>
  );
};
const CardChild = ({ text, icon }) => (
  <CardContainer item xs={12} sm={6}>
    <Card>
      <CardActionArea>
        <CardContent>
          {/* <Img fluid={img.childImageSharp.fluid} /> */}
          <IconServicio src={icon} alt="" />
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </CardContainer>
);
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
        sourceInstanceName: { eq: "servicios" }
        extension: { eq: "md" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              icon
            }
          }
        }
      }
    }
  }
`;
