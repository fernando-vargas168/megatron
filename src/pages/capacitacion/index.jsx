import React, { useState } from "react";
import Img from "gatsby-image";
import { navigate } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import {
  Grid,
  Card as C,
  CardMedia as CM,
  CardActions,
  Button,
  CardContent,
  CardHeader,
  Typography,
  Dialog
} from "@material-ui/core";
import styled from "styled-components";
import ContainerPage from "../../components/ContainerPage";
import HeaderPage from "../../components/HeaderPage";
import Form from "../../components/Form";
import SEO from "../../components/Head/SEO";
const Capacitacion = ({ data }) => {
  let capacitacion = [];
  data.allFile.edges.forEach(({ node }) =>
    capacitacion.push(node.childMarkdownRemark.frontmatter.title)
  );
  return (
    <div>
      <SEO
        title="MEGATRON | capacitacion de ingeniería en BOLIVIA"
        description={capacitacion.join(" | ")}
        path="/capacitacion"
      />
      <ContainerPage className="Capacitacion">
        <HeaderPage
          icon="/img/capacitacionCover.svg"
          text1="Enseñamos"
          text2="Curso Taller"
          alt="Ingeniero dando clases / clases de ingeniería de Megatron"
          bottom="true"
        />
        <CardsContainer container spacing={3}>
          {data.allFile.edges.map(({ node }, index) => (
            <CursoCard
              key={index}
              title={node.childMarkdownRemark.frontmatter.title}
              img={node.childMarkdownRemark.frontmatter.img}
              date={node.childMarkdownRemark.frontmatter.date}
              slug={node.childMarkdownRemark.fields.slug}
            />
          ))}
        </CardsContainer>
      </ContainerPage>
    </div>
  );
};

export default Capacitacion;
// const Background = ()=>(<BackgroundImage fluid={img.childImageSharp.fluid}/>)
const CursoCard = ({ title, img, date, slug }) => {
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
        <CardHeader title={title} subheader={date} />
        <Background fluid={img.childImageSharp.fluid} />
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
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
          name="capacitacion"
          value={title}
          title={title}
        />
      </Dialog>
    </CardContainer>
  );
};

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
        sourceInstanceName: { eq: "capacitacion" }
        extension: { eq: "md" }
      }
    ) {
      edges {
        node {
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
            }
            fields {
              slug
            }
          }
        }
      }
    }
    file(relativePath: { eq: "automatas_programables.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
