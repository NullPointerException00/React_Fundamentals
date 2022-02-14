/* eslint-disable react/prop-types */
import Styled from "styled-components";
import React from "react";

const StyledButton = Styled.button`
  padding: 4px 32px;
  border-radius: 2px;
  background-color: ${(porps) => TypeBackgroundColorMap[porps.type]};
  color: ${(porps) => TypeColorMap[porps.type]};
  border: ${(porps) => TypeBorderMap[porps.type]};
  cursor: pointer;
  
  &:active {
    background-color: ${(porps) => TypeActiveMap[porps.type]};
  }
  &:hover {
    background-color: ${(porps) => TypeHoverMap[porps.type]};
  }
`;

const TypeActiveMap = {
  default: "#E6E6E6 !important",
  primary: "rebeccapurple !important",
};
const TypeHoverMap = {
  default: "#F3F3F3",
  primary: "mediumpurple",
};

const TypeBackgroundColorMap = {
  default: "white",
  primary: "purple",
};

const TypeColorMap = {
  default: "purple",
  primary: "white",
};

const TypeBorderMap = {
  default: "1px solid purple",
  primary: "1px solid purple",
};

export const Button = (props) => {
  const { value, text, onClick, className, type = "default" } = props;
  return (
    <StyledButton value={value} type={type} className={className} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

