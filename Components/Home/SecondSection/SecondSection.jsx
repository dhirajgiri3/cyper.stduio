import React from "react";
import styled from "styled-components";
import Trusted from "./Trusted/Trusted";

const SecondSectionContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  height: 100%;
  padding: 5rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    padding: 5rem 5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 1rem;
  }

  .secondsectioncontainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    gap: 3rem;

    p {
      font-size: var(--para);
      color: var(--para-color);
      font-weight: 300;
      font-family: var(--light-font);
    }

    .strokes {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    .description {
      p {
        font-size: var(--norm);
      }
    }
  }
`;

const OutlineTxt = styled.h1`
  color: transparent;
  background-image: var(--text-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: none;
  font-size: 3.5rem;
  transition: all 0.5s ease-in-out;
  position: relative;
  z-index: 2;
  font-family: var(--font);
  font-weight: 700;
  letter-spacing: 5px;
  color: #000;
  -webkit-text-stroke: 3px transparent;

  &:hover {
    mix-blend-mode: difference;
    color: transparent;
    background-image: linear-gradient(#00000000, #00000000);
    -webkit-text-stroke: 1px #eee;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 3rem;
  }

  &::after {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: -70%;
    left: 20%;
    width: 15rem;
    height: 15rem;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: -1;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    transition: all 0.5s ease-in-out;
    mix-blend-mode: difference;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @media screen and (max-width: 768px) {
      top: -50%;
    }
  }
`;

function SecondSection() {
  return (
    <SecondSectionContainer>
      <div className="secondsectioncontainer">
        <p>We're Focused In</p>
        <div className="strokes">
          <OutlineTxt url="https://res.cloudinary.com/divbobkmd/image/upload/v1695375278/web-design1_wmciwu.png">
            Development
          </OutlineTxt>
          <OutlineTxt url="https://images.prismic.io/noomo-website/d595988b-2a82-410b-aedc-81641e8bb0fc_wcf+case+preview-2.png?auto=compress,format">
            Branding
          </OutlineTxt>
          <OutlineTxt url="https://images.unsplash.com/photo-1541537103745-ea3429c65dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=2000">
            Marketing
          </OutlineTxt>
        </div>
        <div className="description">
          <p>
            We are a team of passionate designers and developers who thrive to
            well craft tailored solutions for our clients. We have been working
            with startups, small businesses & corporations since 2023. Our
            expertise in the field includes brand identity design, UX/UI design,
            web design, web development and marketing.
          </p>
        </div>
      </div>
      <Trusted/>
    </SecondSectionContainer>
  );
}

export default SecondSection;
