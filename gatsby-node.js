const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
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
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: "asd"
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
                frontmatter {
                  title
                  name
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
                  softSkills
                  ci
                  nit
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
          // path: node.fields.slug,
          path: `a${i}`,
          component: cursosTemplate,
          context: node.childMarkdownRemark
        });
      } else if (node.sourceInstanceName === "servicios") {
        createPage({
          // path: node.fields.slug,
          path: `a${i}`,
          component: serviciosTemplate,
          context: node.childMarkdownRemark
        });
      } else if (node.sourceInstanceName === "personas") {
        createPage({
          // path: node.fields.slug,
          path: `a${i}`,
          component: personasTemplate,
          context: node.childMarkdownRemark
        });
      } else if (node.sourceInstanceName === "empresas") {
        createPage({
          // path: node.fields.slug,
          path: `a${i}`,
          component: empresasTemplate,
          context: node.childMarkdownRemark
        });
      }
    });
  });
};
