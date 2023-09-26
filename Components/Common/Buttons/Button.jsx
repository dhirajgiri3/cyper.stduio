import React from "react";
import styled from "styled-components";

function Button({
  text,
  fontsize,
  paddingy,
  paddingx,
  borderRadius,
  mpaddingx,
  mpaddingy,
  mfontsisze,
}) {
  const Buttons = styled.button`
    position: relative;
    padding: ${paddingy} ${paddingx};
    border-radius: ${borderRadius};
    background: linear-gradient(77deg, #6b49ffb9 60%, #aa00ffb9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #fff;
    border: 1px #5a3cdf solid;
    box-shadow: 2px 5px 40px #aa00ff99;
    font-size: ${fontsize};
    font-weight: 300;
    font-family: var(--light-font);
    letter-spacing: 0.5px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;

    @media screen and (max-width: 767px) {
      padding: ${mpaddingy} ${mpaddingx};
      font-size: ${mfontsisze};
    }

    &:hover {
      background: linear-gradient(77deg, #5a3cdf99 70%, #aa00ff99);
      box-shadow: 2px 5px 40px #aa00fff0;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(77deg, #5a3cdfc0, #aa00ffc0);
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
      background: linear-gradient(77deg, #5a3cdfc0, #aa00ffc0);
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
  return <Buttons>{text}</Buttons>;
}

export default Button;
