import React from "react";
import styled from "styled-components";
import SplitReveal from "@/Components/Animations/TextAnimations/SplitReveal";
import Up from "./Components/Up/Up";
import { motion } from "framer-motion";

const DashboardSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 10rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }

  .about-sec {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--light-font);
    font-size: var(--para);
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }

    .split {
      width: 65%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .meme-video {
      width: 35%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    video {
      height: 15rem;
      width: 15rem;
      object-fit: cover;
      border-radius: 100rem;
    }
  }

  hr {
    margin: 3rem 0;
    border: 0.3px #ffffff solid;
    height: 0.5px;
  }

  .dashboard {
    width: 100%;
    min-height: 90vh;
    height: 100%;
    position: relative;
    z-index: 0;

    .bottom {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 7rem;

      @media screen and (max-width: 768px) {
        gap: 3rem;
      }

      .primary {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 3rem;

        @media screen and (max-width: 768px) {
          gap: 1.5rem;
        }

        p {
          font-size: var(--para);
          color: var(--white);
          font-weight: 500;
          font-family: var(--font);
        }

        h1 {
          font-size: var(--heading);
          color: var(--white);
          font-weight: 500;
          font-family: var(--heading-font);
          width: 90%;
          margin: 0 auto;

          @media screen and (max-width: 768px) {
            font-size: var(--heading-mid);
            width: 98%;
          }
        }
      }

      .secondary {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 3rem;
        margin-top: 3rem;

        @media screen and (max-width: 1024px) {
          gap: 1.5rem;
          width: 80%;
        }

        @media screen and (max-width: 768px) {
          gap: 1.5rem;
          width: 98%;
        }

        p {
          font-size: var(--norm);
          color: var(--white);
          font-weight: 300;
          font-family: var(--light-font);
          width: 80%;
          margin: 0 auto;

          @media screen and (max-width: 768px) {
            width: 100%;
          }
        }
      }
    }
  }
`;

const fadeVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

const DashboardSection = () => {
  return (
    <DashboardSectionContainer>
      <div className="about-sec">
        <div className="split">
          <SplitReveal
            width="100%"
            fontsize="1rem"
            lineheight="1.5"
            fontweight="300"
            letterSpace="0"
            tfont="1rem"
            mfont="1rem"
            text="Cyper Studio, an emerging agency, embodies dynamism and creativity, driven by a dedicated team eager to bring your vision to life. We are your partners in progress, committed to exceeding expectations and pushing boundaries in the digital landscape."
            dangerouslySetInnerHTML={true}
          />
        </div>
        {/* <div className="meme-video">
          <video
            loop
            autoPlay
            muted
            src="https://res.cloudinary.com/divbobkmd/video/upload/v1695425223/Cyper%20studio/yes-oh_mnadqn.mp4"
          />
        </div> */}
      </div>
      <hr />
      <div className="dashboard">
        <div className="bottom">
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            className="primary"
          >
            <p>Only for clients</p>
            <h1>
              We have developed a system that provides real-time updates on the
              progress of our current project.
            </h1>
          </motion.div>
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            className="secondary"
          >
            <p>Hey excited for this...?</p>
            <p>
              Once the agreement is formalized between our parties, you will be
              provided with a unique project ID. This project ID will grant you
              access to our dedicated client portal, allowing you to monitor the
              real-time progress of your project.
            </p>
          </motion.div>
        </div>
        <Up />
      </div>
    </DashboardSectionContainer>
  );
};

export default DashboardSection;
