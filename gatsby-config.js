module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: `Megatron | 👷‍♂ Servicios de ingeniería, investigación y capacitación en BOLIVIA Santa Cruz`,
    siteDescription: `⭐Empresa Privada dedicada al desarrollo de ingeniería, investigación y capacitación ofreciendo así un servicio integral en el área industrial BOLIVIANA Misión: Desarrollar, Asesorar y Capacitar innovaciones de  Ingeniería y Técnica Industrial. Visión: Convertirse en una de las mejores empresas integrales del área Industrial.`,
    siteUrl: `https://megatron.netlify.com`,
    siteLanguage: `es`,
    siteImage: `seoImages/banner.png`,
    faviconDefault: `favicon/favicon.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        fileName: false,
        ssr: false
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `servicios`,
        path: `${__dirname}/src/pages/servicios`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `cursos`,
        path: `${__dirname}/src/pages/cursos`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `personas`,
        path: `${__dirname}/src/pages/trabajo/personas`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `empresas`,
        path: `${__dirname}/src/pages/trabajo/empresas`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: "img"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    }
  ]
};
