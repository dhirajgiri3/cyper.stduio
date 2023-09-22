import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

    @media screen and (max-width: 1024px) {
      width: calc(100vw - 10rem);
    }

    @media screen and (max-width: 768px) {
      width: calc(100vw - 2rem);
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
      color: var(--grey);
      white-space: nowrap;
    }
  }
`;

const text = [
  "Sharda Univeristy",
  "Navkar Selection",
  "Shipex India",
  "Fast Guide",
  "FAD",
];

function Trusted() {
  return (
    <TrustContainer>
      <div className="title">
        <Image src={star} alt="shipex india" />
        <h1> Trusted By</h1>
      </div>
      <div className="company">
        <h1>Sharda University</h1>
        <h1>Navkar Selection</h1>
        <h1>Shipex india</h1>
        <h1>Fast Guide</h1>
        <h1>FAD</h1>
      </div>
    </TrustContainer>
  );
}

export default Trusted;
