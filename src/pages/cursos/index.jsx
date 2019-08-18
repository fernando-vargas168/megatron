import React from "react";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import {
  Grid,
  Card as C,
  CardMedia as CM,
  CardActions,
  Button,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";
import styled from "styled-components";
import ContainerPage from "../../components/ContainerPage";
import HeaderPage from "../../components/HeaderPage";
const cursos = ({ data }) => {
  return (
    <ContainerPage className="Cursos">
      <HeaderPage
        img="/img/cursosCover.svg"
        text1="Enseñamos"
        text2="Cursos"
        alt="Ingeniero dando clases / clases de ingeniería de Megatron"
      />
      <CardsContainer container spacing={3}>
        {data.allFile.edges.map(({ node }, index) => (
          <CursoCard
            key={index}
            title={node.childMarkdownRemark.frontmatter.title}
            img={node.childMarkdownRemark.frontmatter.img}
            date={node.childMarkdownRemark.frontmatter.date}
          />
        ))}
      </CardsContainer>
    </ContainerPage>
  );
};

export default cursos;
// const Background = ()=>(<BackgroundImage fluid={img.childImageSharp.fluid}/>)
const CursoCard = ({ title, img, date }) => {
  return (
    <CardContainer item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader title={title} subheader={date} />
        <Background fluid={img.childImageSharp.fluid} />
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" color="primary">
            Reservar
          </Button>
          <Button variant="contained" size="small">
            Más información
          </Button>
        </CardActions>
      </Card>
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
  query Cursos {
    allFile(
      filter: { sourceInstanceName: { eq: "cursos" }, extension: { eq: "md" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              date
            }
          }
          parent {
            ... on File {
              name
              sourceInstanceName
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
