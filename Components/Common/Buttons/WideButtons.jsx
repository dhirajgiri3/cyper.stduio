"use client";

import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const WideButton = ({
  text,
  fontsize,
  paddingx,
  paddingy,
  mpaddingy,
  mpaddingx,
  mfontsize,
  color,
  hoverbg,
  hovercolor,
  bordercolor,
  hoverborder,
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const handleMouseMove = (event) => {
      const buttonRect = button.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      const offsetX = (x - buttonRect.left - buttonRect.width / 2) / 2;
      const offsetY = (y - buttonRect.top - buttonRect.height / 2) / 2;
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    button.addEventListener("mousemove", handleMouseMove);
    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    const resetTransform = () => {
      const buttonElement = buttonRef.current;
      buttonElement.style.transform = "none";
    };

    const handleMouseLeave = () => {
      resetTransform();
    };

    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const Buttons = styled.div`
    background: #00000000;
    border: none;

    .c-button {
      font-size: ${fontsize};
      text-decoration: none;
      padding: ${paddingy} ${paddingx};
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      z-index: 1;
      transition: all 1s cubic-bezier(0.25, 0.5, 0.75, 1);
      overflow: hidden;
      border-radius: 50px;
      font-family: var(--light-font);
      background: linear-gradient(77deg, #7253ffb9 60%, #aa00ffb9);
      box-shadow: 2px 5px 50px #a200ff85;
      white-space: nowrap;

      &:hover {
        box-shadow: 2px 5px 80px #a200ff;
        
      }

      @media (max-width: 768px) {
        padding: ${mpaddingy} ${mpaddingx};
        font-size: ${mfontsize};
      }
    }

    .c-button--gooey {
      color: ${color};
      border: 1px solid ${bordercolor};
      position: relative;
      transition: all 1s cubic-bezier(0.25, 0.5, 0.75, 1);

      &:hover {
        border: 1px solid ${hoverborder};
      }
    }

    .c-button--gooey .c-button__blobs {
      height: 100%;
      filter: url(#goo);
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      bottom: -3px;
      right: -1px;
      z-index: -1;
    }

    .c-button--gooey .c-button__blobs div {
      background-color: ${hoverbg};
      width: 34%;
      height: 100%;
      border-radius: 100%;
      position: absolute;
      transform: scale(1.4) translateY(125%) translateZ(0);
      transition: all 0.7s cubic-bezier(0.25, 0.5, 0.75, 1);
    }

    .c-button--gooey .c-button__blobs div:nth-child(1) {
      left: -5%;
    }

    .c-button--gooey .c-button__blobs div:nth-child(2) {
      left: 30%;
      transition-delay: 60ms;
    }

    .c-button--gooey .c-button__blobs div:nth-child(3) {
      left: 66%;
      transition-delay: 25ms;
    }

    .c-button--gooey:hover {
      color: ${hovercolor};
    }

    .c-button--gooey:hover .c-button__blobs div {
      transform: scale(1.4) translateY(0) translateZ(0);
    }
  `;

  return (
    <Buttons>
      <button ref={buttonRef} className="c-button c-button--gooey">
        {" "}
        {text}
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "block", height: 0, width: 0 }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </Buttons>
  );
};

export default WideButton;

// How to use this button

{
  /*                  <WideButton
            text="See all cases"
            paddingx="4rem"
            paddingy="1rem"
            mpaddingx="1.5rem"
            mpaddingy="1rem"
            fontsize="1rem"
            mfontsize=".8rem"
            color="#eee"
            hoverbg="#000"
            hovercolor="#eee"
            bordercolor="##a200ff"
            hoverborder="#000"
          /> */
}
