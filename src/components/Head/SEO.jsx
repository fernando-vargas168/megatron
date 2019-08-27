import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
const SEO = ({ title, description, image, path }) => {
  const data = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            siteTitle
            siteImage
            siteUrl
            siteDescription
            siteLanguage
          }
        }
      }
    `
  );
  const {
    siteTitle: defaultTitle,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
    siteUrl: defaultUrl,
    siteLanguage: defaultLanguage
  } = data.site.siteMetadata;
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <meta name="image" content={image ? image : defaultImage} />
      <meta name="language" content={defaultLanguage} />

      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={path ? `${defaultUrl}/${path}` : defaultUrl}
      />
      {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
      <meta property="og:title" content={title ? title : defaultTitle} />
      <meta
        property="og:description"
        content={description ? description : defaultDescription}
      />
      <meta property="og:image" content={image ? image : defaultImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? title : defaultTitle} />
      <meta
        name="twitter:description"
        content={description ? description : defaultDescription}
      />
      <meta name="twitter:image" content={image ? image : defaultImage} />
    </Helmet>
  );
};

export default SEO;
