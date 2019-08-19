import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import { SuperCopy, CopyH1, CopyH2, CopyH3, P } from "../styles/widgets";
import ColorsBackground from "./ColorsBackground";
import { Container, Box } from "@material-ui/core";
import { Responsive, Fonts } from "../styles/vars";
import Img from "gatsby-image";
const HeaderPage = ({
  icon,
  img,
  altImg,
  text1,
  text2,
  background,
  component,
  bottom,
  fontRead1,
  fontRead2
}) => {
  const dataBackground = useStaticQuery(graphql`
    query Background {
      file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Banner
      fluid={
        background ? background : dataBackground.file.childImageSharp.fluid
      }
      bottom={bottom}
      center={background ? "true" : "false"}
    >
      {icon && <Icon src={icon} alt={altImg} />}
      {img && <Image fluid={img} alt={altImg} />}
      {component && component}
      <TextContainer>
        <ColorsBackground>
          <BannerText fontRead1={fontRead1}>{text1}</BannerText>
        </ColorsBackground>
        {text2 && <BannerText2 fontRead2={fontRead2}>{text2}</BannerText2>}
      </TextContainer>
    </Banner>
  );
};

const TextContainer = styled(props => (
  <Box
    {...props}
    display="flex"
    flexDirection="column"
    justifyContent="center"
  />
))`
  max-width: 70vw;
  ${Responsive.tablet} {
    max-width: 60vw;
  }
  ${Responsive.miniTablet} {
    max-width: initial;
  }
`;
const Banner = styled(BackgroundImage)`
  display: flex;
  justify-content: space-around;
  align-items: ${props => (props.bottom ? "flex-end" : "center")};
  padding: 0;
  background-attachment: fixed !important;
  background-position: ${props =>
    props.center ? "center !important" : "top !important"};
  min-height: 300px !important;

  ${Responsive.miniTablet} {
    flex-direction: ${props => (props.bottom ? "column-reverse" : "column")};
    align-items: center;
    justify-content: ${props => (props.bottom ? "end" : "center")};
  }
`;
const BannerText = styled(SuperCopy)`
  color: white;
  ${({ fontRead1 }) =>
    fontRead1 &&
    `
    font-family: ${Fonts.font1} !important;
  `}
  ${Responsive.mobile} {
    font-size: 1.5em;
  }
`;
const BannerText2 = styled(CopyH2)`
  color: white;
  ${({ fontRead2 }) =>
    fontRead2 &&
    `
    font-family: ${Fonts.font1} !important;
  `}
  ${Responsive.mobile} {
    font-size: 1.5em;
  }
`;
const Image = styled(Img)`
  // border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;
const Icon = styled.img`
  margin-top: 10px;
  height: 250px;
  // width: 20vw;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // background: white;
  // border-radius: 50%;
  ${Responsive.miniTablet} {
    height: 180px;
  }
  ${Responsive.miniTablet} {
    width: 200px;
    height: auto;
  }
`;
export default HeaderPage;
