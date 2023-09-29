import React from "react";
import styled from "styled-components";
import Trusted from "./Trusted/Trusted";
import { motion } from "framer-motion";
import Link from "next/link";

const SecondSectionContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  height: 100%;
  padding: 2.5rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  gap: 5rem;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 2.5rem 1rem;
  }

  .secondsectioncontainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    gap: 5rem;

    p {
      font-size: var(--para);
      color: var(--whites);
      font-weight: 300;
      font-family: var(--light-font);
      text-align: center;
    }

    .strokes {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      @media screen and (max-width: 767px) {
        flex-direction: column;
      }
    }

    .description {
      width: 70%;
      margin: 0 auto;
      p {
        font-size: var(--norm);
      }
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }
`;

const OutlineTxt = styled.h1`
  color: transparent;
  background-image: var(--grey-gradient);
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
  transition: background-image 0.5s ease-in-out;

  @media screen and (max-width: 767px) {
    font-size: 2.8rem;
  }

  &:hover {
    background-image: var(--text-gradient);
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
    transition: opacity 0.5s ease-in-out;
    transition-delay: 2s;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @media screen and (max-width: 767px) {
      top: -50%;
    }
  }
`;

const text = ["Development", "Branding", "Marketing"];

const imageUrls = [
  "https://res.cloudinary.com/divbobkmd/image/upload/v1695375278/web-design1_wmciwu.png",
  "https://images.prismic.io/noomo-website/d595988b-2a82-410b-aedc-81641e8bb0fc_wcf+case+preview-2.png?auto=compress,format",
  "https://images.unsplash.com/photo-1541537103745-ea3429c65dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=2000",
];

const textVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

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

const staggerChildrenVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

function SecondSection() {
  return (
    <SecondSectionContainer>
      <motion.div
        className="secondsectioncontainer"
        variants={staggerChildrenVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.p variants={fadeVariants}>We're Focused In</motion.p>
        <div className="strokes">
          {text.map((item, index) => (
            <motion.div key={index} variants={textVariants}>
              <Link href={item}>
                <OutlineTxt url={imageUrls[index]}>{item}</OutlineTxt>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="description">
          <motion.p variants={fadeVariants}>
            We are a team of passionate designers and developers who thrive to
            well craft tailored solutions for our clients. We have been working
            with startups, small businesses & corporations since 2023. Our
            expertise in the field includes brand identity design, UX/UI design,
            web design, web development, and marketing.
          </motion.p>
        </div>
      </motion.div>
      <Trusted />
    </SecondSectionContainer>
  );
}

export default SecondSection;
