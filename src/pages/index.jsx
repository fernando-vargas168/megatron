import React from "react";
import Landing from "../components/Landing";
import SEO from "../components/Head/SEO";
import FormNetlify from "../components/FormNetlify";
const index = () => {
  return (
    <div className="home">
      <SEO />
      <Landing />
      <FormNetlify />
    </div>
  );
};

export default index;
