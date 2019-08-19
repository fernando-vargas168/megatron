import React from "react";
import HeaderPage from "../components/HeaderPage";
import ContainerPage from "../components/ContainerPage";
import MarkdownStyles from "../components/MarkdownStyles";
const serviciosTemplate = ({ pageContext }) => {
  const { title, icon } = pageContext.frontmatter;
  return (
    <ContainerPage>
      <HeaderPage icon={icon} text1={title} />
      <MarkdownStyles html={pageContext.html} />
    </ContainerPage>
  );
};

export default serviciosTemplate;
