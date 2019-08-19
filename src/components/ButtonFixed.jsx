import React from "react";
import { Button as B, Box } from "@material-ui/core";
import styled from "styled-components";
const ButtonFixed = ({ buttons }) => {
  return (
    <ButtonContainer>
      {buttons.length === 1 && "👉🏻"}
      {buttons.map(({ text, onClick, color }, i) => (
        <Button
          key={i}
          onClick={onClick ? onClick : () => null}
          variant="contained"
          color={color}
        >
          {text}
        </Button>
      ))}
      {buttons.length === 1 && "👈🏻"}
    </ButtonContainer>
  );
};
const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100vw;
  background: rgba(0, 0, 0, 0.73) !important;
  position: fixed !important;
  bottom: 0;
`;
const Button = styled(B)`
  margin: 0px 10px !important;
`;
export default ButtonFixed;
