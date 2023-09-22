import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/Components/Common/Buttons/Button";

const FirstSectioncontainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 70vh;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }

  .bgvideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0.7;

      @media screen and (max-width: 768px) {
        object-fit: cover;
      }
    }
  }

  .container {
    position: relative;
    z-index: 10000;
    width: 100%;
    height: 88vh;
    margin-top: 12vh;
    display: flex;
    padding: 0 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    @media screen and (max-width: 1024px) {
      height: 64vh;
      padding: 0 5rem;
    }

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      height: 88vh;
    }

    h1 {
      font-family: var(--heading-font);
      font-size: var(--large);
      color: var(--white);

      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }

      .studio {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        a {
          text-decoration: none;

          .span {
            padding: 0.3rem 1.8rem;
            background: #00000010;
            backdrop-filter: blur(50px);
            border-radius: 100px;
            border: 1px solid var(--grey);
            transition: all .5s ease-in-out;

            &:hover {
              border: 1px solid var(--text-gradient-stroke);
            }

            span {
              color: transparent;
              background: var(--text-gradient);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 0.5px var(--text-gradient-stroke);
            }
          }
        }
      }
    }

    p {
      font-family: var(--light-font);
      width: 70%;
      font-weight: 300;
      color: var(--white);

      @media screen and (max-width: 1024px) {
        width: 90%;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

function FirstSection() {
  return (
    <div>
      <FirstSectioncontainer>
        <div className="bgvideo">
          <video
            src="https://res.cloudinary.com/divbobkmd/video/upload/v1695302345/cube-loop_pwawki.webm"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="container">
          <h1>
            We are <br />{" "}
            <div className="studio">
              <Link href="/about">
                <div className="span">
                  <span>Cyper</span>
                </div>
              </Link>
              Studio
            </div>
          </h1>
          <p>
            Our commitment lies in nurturing the growth of your online business.
            Armed with our vast expertise in software development, branding, and
            social media marketing, we are well-prepared to guide you on the
            path to realizing your aspirations and achieving success.
          </p>
          <Button text="Let's Talk" />
        </div>
      </FirstSectioncontainer>
    </div>
  );
}

export default FirstSection;
