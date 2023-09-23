import React from "react";
import styled from "styled-components";
import Image from "next/image";
import mockup1 from "@/Assets/Images/Mockups/Home/mockup-1.png";
import bg from "@/Assets/Images/Mockups/Home/bg.png";
import MagneticButton from "@/Components/Common/Buttons/MagneticButton";
import Link from "next/link";
import { motion } from "framer-motion";

const AiServicesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  margin-top: 5rem;
  display: grid;
  place-items: center;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    min-height: 80vh;
  }
  @media screen and (max-width: 767px) {
    min-height: 100vh;
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    z-index: 1;
    padding: 2.5rem 10rem;
    width: 100%;

    @media screen and (max-width: 1024px) {
      padding: 2.5rem 5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
    }

    @media screen and (max-width: 767px) {
      padding: 2.5rem 1rem;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3rem;
    }

    .information {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 5rem;

      @media screen and (max-width: 1024px) {
        width: 100%;
        gap: 3rem;
      }

      .top {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 5rem;

        @media screen and (max-width: 1024px) {
          width: 100%;
          gap: 3rem;
        }

        h1 {
          font-family: var(--heading-font);
          font-size: var(--heading);
          color: var(--white);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: 1px;
          text-align: left;

          @media screen and (max-width: 767px) {
            font-size: var(--heading-mid);
          }
        }

        p {
          font-size: var(--norm);
          color: var(--whites);
          font-weight: 500;
          font-family: var(--font);
          text-align: left;

          @media screen and (max-width: 767px) {
            font-size: var(--para);
          }
        }
      }

      .servicelist {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        ul {
          width: 70%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0.3rem 1rem;

          li {
            font-size: var(--norm);
            color: var(--secondary);
            color: #ccc;
            list-style: none;
            padding: 0.3rem 1rem;
            border: 3px solid #333;
            border-radius: 100px;
            transition: 0.5s all ease-in-out;

            &:hover {
              background: var(--primary);
              color: var(--white);
              border: 3px solid var(--primary);
            }
          }
        }
      }
    }

    .mockup {
      width: 100%;
      max-width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 0;

      img {
        width: 100%;
        height: 100vh;
        object-fit: contain;

        @media screen and (max-width: 1024px) {
          height: 40vh;
        }
        @media screen and (max-width: 767px) {
          height: 70vh;
        }
      }

      .btn {
        position: absolute;
        bottom: 50%;
        right: 0%;
        transform: translate(-50%, -50%);
        z-index: 1;
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
      delay: 1,
    },
  },
};

function AiServices() {
  return (
    <AiServicesWrapper>
      <motion.div
        variants={fadeVariants}
        initial="initial"
        whileInView="animate"
        className="bgvideo"
      >
        <Image src={bg} alt="Cyper studio ai related services" />
      </motion.div>
      <div className="content">
        <div className="information">
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            className="top"
          >
            <h1>
              On our way to revolutionizing Branding and Marketing with AI
            </h1>
            <p>
              Welcome to Cyber Studio, where we're at the forefront of the
              digital revolution, leveraging the power of AI to redefine
              branding and SMMA. In today's rapidly evolving digital landscape,
              success hinges on smart strategies, and our AI-integrated services
              are designed to keep you ahead of the curve.
            </p>
          </motion.div>
          <div className="servicelist">
            <ul>
              <motion.li
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
              >
                AI Graphics Interface
              </motion.li>
              <motion.li
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
              >
                Chatbots
              </motion.li>
              <motion.li
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
              >
                AI UI Interfaces
              </motion.li>
              <motion.li
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
              >
                AI Tool Integration
              </motion.li>
              <motion.li
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
              >
                Email Marketing Automation
              </motion.li>
              <motion.li
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
              >
                Workflow Automation
              </motion.li>
              <motion.li
                variants={fadeVariants}
                initial="initial"
                whileInView="animate"
              >
                AI-Powered Workforce Management
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="mockup">
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
          >
            <Image src={mockup1} alt="Cyper studio ai services" />
          </motion.div>

          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            className="btn"
          >
            <Link href="/ai">
              <MagneticButton
                label="See Our Work"
                height="3rem"
                width="3rem"
                background="#222"
                frontbg="#603dff"
                color="#fff"
                hoverbg="#222"
                hoverColor="#fff"
                fontsize="0.8rem"
                mfontsize="1rem"
                mobileHeight="7rem"
                mobileWidth="7rem"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </AiServicesWrapper>
  );
}

export default AiServices;
