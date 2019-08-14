import React from "react";
import styled from "styled-components";
import { SuperCopy, CopyH1, CopyH2, CopyH3, P } from "../styles/widgets";
import ColorsBackground from "./ColorsBackground";
import { Container, Box } from "@material-ui/core";
import { Responsive } from "../styles/vars";
const HeaderPage = ({ img, altImg, text1, text2 }) => {
  return (
    <Banner>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        // alignItems="center"
      >
        <ColorsBackground>
          <BannerText>{text1}</BannerText>
        </ColorsBackground>
        <BannerText2>{text2}</BannerText2>
      </Box>
      <Img src={img} alt={altImg} />
    </Banner>
  );
};

const Banner = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background: url(/img/background.png);
  background-attachment: fixed;
  background-size: 100% !important;
  ${Responsive.tablet} {
    background-size: 140% !important;
  }
`;
const BannerText = styled(SuperCopy)`
  ${Responsive.mobile} {
    font-size: 1.2em;
  }
`;
const BannerText2 = styled(CopyH2)`
  ${Responsive.mobile} {
    font-size: 1em;
  }
`;
const Img = styled.img`
  height: 30vw;
  ${Responsive.miniTablet} {
    // width: 150px;
  }
`;
export default HeaderPage;
