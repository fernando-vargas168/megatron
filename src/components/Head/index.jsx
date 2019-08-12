import React from "react";
import SEO from "./SEO.jsx";
import Helmet from "react-helmet";
const Head = () => {
  return (
    <Helmet>
      <SEO />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no"
      />
    </Helmet>
  );
};

export default Head;
