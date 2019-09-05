module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: `Megatron | 👷‍♂ Servicios de ingeniería, investigación y capacitación en BOLIVIA Santa Cruz`,
    siteDescription: `⭐Empresa Privada dedicada al desarrollo de ingeniería, investigación y capacitación ofreciendo así un servicio integral en el área industrial BOLIVIANA Misión: Desarrollar, Asesorar y Capacitar innovaciones de  Ingeniería y Técnica Industrial. Visión: Convertirse en una de las mejores empresas integrales del área Industrial.`,
    siteUrl: `https://megatron-ingenieria.com`,
    siteLanguage: `es`,
    siteImage: `seoImg/index.png`,
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
        name: `capacitacion`,
        path: `${__dirname}/src/pages/capacitacion`
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/site-config`,
        name: "siteConfig"
      }
    },
    `gatsby-transformer-yaml-plus`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
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
