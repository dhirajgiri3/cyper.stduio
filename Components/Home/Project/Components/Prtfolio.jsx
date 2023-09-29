import WideButton from "@/Components/Common/Buttons/WideButtons";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Right from "./Right";
import SidebarCursor from "@/Components/Common/Cursor/SidebarCursor";

const ProjectPortfolioContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 5rem 10rem;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;

  .link {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    padding: 5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 5rem 1rem;
  }

  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 3rem;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 3rem;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }

    h1 {
      font-size: 8rem;
      font-weight: 900;
      font-family: var(--grot-bold);
      line-height: 1;

      @media screen and (max-width: 1024px) {
        font-size: 6rem;
      }

      @media screen and (max-width: 767px) {
        font-size: 4rem;
      }
    }

    p {
      font-size: var(--para);
      font-weight: 500;
      font-family: var(--font);
      color: var(--whites);
    }
  }

  .projects {
    width: 100%;
    height: 100%;
    padding: 2rem auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }

    .buttonss {
      flex: 0.5;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    a {
      text-decoration: none;
    }
  }
`;

function Prtfolio() {
  return (
    <ProjectPortfolioContainer>
      <div className="head">
        <h1>Our Recent Projects</h1>
        <p>Made with lot of excitement and love</p>
      </div>
      <div className="projects">
        <div className="buttonss">
          <WideButton
            text="See all cases"
            paddingx="4rem"
            paddingy="1rem"
            mpaddingx="2rem"
            mpaddingy=".7rem"
            fontsize="1rem"
            mfontsize="1rem"
            color="#eee"
            hoverbg="#000"
            hovercolor="#eee"
            bordercolor="#a200ff80"
            hoverborder="#000"
          />
        </div>
        <div>
          <Link href="/" className="link">
            <Right
              title="FAD"
              desc="Discover a vibrant community that celebrates fashion, creativity, and individuality.
Join Fad and be a part of India's first Fashion Community Platform."
              span="Website - Landing Platform"
              videosrc="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
            />
          </Link>
          <Link href="/" className="link">
            <Right
              title="Shipex Inida"
              desc="Shipex is a shipping company that offers shipping services
            in india.
            We have been working on this project for almost two years
            now, we are still trying to make it better by adding more
            features like tracking and more. We are here to provide you
            the best service for your shipment, we have been providing
            our customers with quality products since last one year now."
              span="Website - Landing Platform"
              videosrc="https://lazarev.kiev.ua/website-la/cases/metaq-vid-cover.mp4"
            />
          </Link>
          <Link href="/" className="link">
            <Right
              title="FAD"
              desc="Discover a vibrant community that celebrates fashion, creativity, and individuality.
Join Fad and be a part of India's first Fashion Community Platform."
              span="Website - Landing Platform"
              videosrc="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
            />
          </Link>
          <Link href="/" className="link">
            <Right
              title="Shipex Inida"
              desc="Shipex is a shipping company that offers shipping services
            in india.
            We have been working on this project for almost two years
            now, we are still trying to make it better by adding more
            features like tracking and more. We are here to provide you
            the best service for your shipment, we have been providing
            our customers with quality products since last one year now."
              span="Website - Landing Platform"
              videosrc="https://lazarev.kiev.ua/website-la/cases/metaq-vid-cover.mp4"
            />
          </Link>
          <Link href="/" className="link">
            <Right
              title="FAD"
              desc="Discover a vibrant community that celebrates fashion, creativity, and individuality.
Join Fad and be a part of India's first Fashion Community Platform."
              span="Website - Landing Platform"
              videosrc="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
            />
          </Link>
          <Link href="/" className="link">
            <Right
              title="Shipex Inida"
              desc="Shipex is a shipping company that offers shipping services
            in india.
            We have been working on this project for almost two years
            now, we are still trying to make it better by adding more
            features like tracking and more. We are here to provide you
            the best service for your shipment, we have been providing
            our customers with quality products since last one year now."
              span="Website - Landing Platform"
              videosrc="https://lazarev.kiev.ua/website-la/cases/metaq-vid-cover.mp4"
            />
          </Link>
        </div>
        <SidebarCursor />
      </div>
    </ProjectPortfolioContainer>
  );
}

export default Prtfolio;
