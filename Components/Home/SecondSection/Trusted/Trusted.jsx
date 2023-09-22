import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import star from "@/Assets/Images/Star/star-blue.png";
import sharda from "@/Assets/Images/Companies logo/shardauniversity-logo.jpg";
import styled from "styled-components";

const TrustContainer = styled(motion.div)`
  width: 100%;
  min-height: 10vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 5rem;
      height: 5rem;
      object-fit: contain;
    }

    h1 {
      font-size: var(--norm);
      font-family: var(--font);
      font-weight: 600;
      color: var(--white);
    }
  }

  .company {
    width: calc(100vw - 20rem);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    padding: 0 1rem;

    @media screen and (max-width: 1024px) {
      width: calc(100vw - 10rem);
    }

    @media screen and (max-width: 768px) {
      width: calc(100vw - 4rem);
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    img {
      width: 8rem;
      height: 5rem;
      object-fit: cover;
    }

    h1 {
      color: var(--white);
      white-space: nowrap;
    }
  }
`;

const text = [
  "Sharda University",
  "Navkar Selection",
  "Shipex India",
  "Fast Guide",
  "FAD",
];

const textVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
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
      delay: 0.3,
    },
  },
};

const staggerChildrenVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3, // Adjust the stagger delay as needed
    },
  },
};

function Trusted() {
  return (
    <TrustContainer
      variants={staggerChildrenVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={fadeVariants} className="title">
        <Image src={star} alt="shipex india" />
        <h1> Trusted By</h1>
      </motion.div>
      <div className="company">
        {text.map((company, index) => (
          <motion.h1 key={index} variants={textVariants}>
            {company}
          </motion.h1>
        ))}
      </div>
    </TrustContainer>
  );
}

export default Trusted;

