import React from "react";
import SEO from "./SEO.jsx";
import Helmet from "react-helmet";
import "semantic-ui-css/semantic.min.css";
const Head = () => {
  return (
    <Helmet>
      <SEO />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
  );
};

export default Head;
