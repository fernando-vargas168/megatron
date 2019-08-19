import React from "react";
import styled from "styled-components";
import { Container as C, Box } from "@material-ui/core";
const MarkdownStyles = ({ html }) => {
  return (
    <Container maxWidth={false}>
      <Box dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

export default MarkdownStyles;

const Container = styled(C)`
  margin-bottom: 45px;
`;
