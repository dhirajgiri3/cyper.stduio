import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  position: relative;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  background: linear-gradient(77deg, #7400ff99 60%, #3911ff99);
  backdrop-filter: blur(10px);
  color: #eee;
  border: 1px #7400ff solid;
  box-shadow: 2px 5px 40px #7400ff99;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: linear-gradient(77deg, #7400ff99 70%, #3911ff99);
    box-shadow: 2px 5px 40px #7400ff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(77deg, #7400ff99, #3911ff90);
    transform: translateX(-110%);
    transition: transform 0.5s ease-in-out;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(77deg, #7400ff99, #3911ff90);
    transform: translateX(110%);
    transition: transform 0.5s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0%);
  }

  &:hover::after {
    transform: translateX(0%);
  }
`;

function Button({ text }) {
  return <Buttons>{text}</Buttons>;
}

export default Button;
