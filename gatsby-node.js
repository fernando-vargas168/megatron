const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const { frontmatter } = node;
    if (frontmatter) {
      const { img } = frontmatter;
      if (img) {
        if (img.indexOf("/img") === 0) {
          frontmatter.img = path
            .relative(
              path.dirname(node.fileAbsolutePath),
              path.join(__dirname, "/static/", img)
            )
            .replace(/\/\/|\\/gi, "/");
        }
      }
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: value
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const personasTemplate = path.resolve("src/templates/personasTemplate.jsx");
  const empresasTemplate = path.resolve("src/templates/empresasTemplate.jsx");
  const cursosTemplate = path.resolve("src/templates/cursosTemplate.jsx");
  const serviciosTemplate = path.resolve("src/templates/serviciosTemplate.jsx");
  return graphql(
    `
      query pagesTeamplate {
        allFile(
          filter: {
            sourceInstanceName: {
              in: ["personas", "empresas", "cursos", "servicios"]
            }
            extension: { eq: "md" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                html
                frontmatter {
                  title
                  puestos {
                    title
                    description
                    sueldo
                    categoria
                    publicado
                    contrato
                    vigente
                    requisitos
                    valores
                    otrosRequisitos
                    beneficios
                  }
                  name
                  icon
                  img {
                    childImageSharp {
                      fluid {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                      }
                    }
                  }
                  description
                  hardSkills
                  ciudad
                  edad
                  ci
                  nit
                  softSkills
                  licenciaDeConducir
                  estadoCivil
                  educacion
                  experiencia
                  contenido
                  requisitosRecomendados
                }
                fields {
                  slug
                }
              }

              sourceInstanceName
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allFile.edges.forEach(({ node }, i) => {
      if (node.sourceInstanceName === "cursos") {
        createPage({
          path: `/cursos${node.childMarkdownRemark.fields.slug}`,
          // path: `a${i}`,
          component: cursosTemplate,
          context: node.childMarkdownRemark
        });
      } else if (node.sourceInstanceName === "servicios") {
        createPage({
          path: `/servicios${node.childMarkdownRemark.fields.slug}`,
          // path: `a${i}`,
          component: serviciosTemplate,
          context: node.childMarkdownRemark
        });
      } else if (node.sourceInstanceName === "personas") {
        createPage({
          path: `/trabajo${node.childMarkdownRemark.fields.slug}`,
          // path: `a${i}`,
          component: personasTemplate,
          context: node.childMarkdownRemark
        });
      } else if (node.sourceInstanceName === "empresas") {
        node.childMarkdownRemark.frontmatter.puestos.forEach((element, i) => {
          const newPath = `/trabajo${
            node.childMarkdownRemark.fields.slug
          }${element.title.replace(/ /gi, "-")}/${`puesto${i}`}`;
          console.log(newPath);
          createPage({
            path: newPath,
            // path: `a${i}`,
            component: empresasTemplate,
            context: {
              empresa: node.childMarkdownRemark.frontmatter,
              puesto: element
            }
          });
        });
      }
    });
  });
};
