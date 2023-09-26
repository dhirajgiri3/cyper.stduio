import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import star1 from "@/Assets/Images/Star/cyper-start2-black.png";

const ProjectHeadContainer = styled.div`
  width: 100%;
  min-height: 20rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  border-top: 1px solid var(--grey);
  border-bottom: 1px solid var(--grey);

  @media screen and (max-width: 767px) {
    height: 40vh;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .video {
    position: absolute;
    top: 3rem;
    left: 5rem;
    width: 20rem;
    height: 20rem;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media screen and (max-width: 767px) {
      top: 5em;
      left: 3rem;
      width: 15rem;
      height: 15rem;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%; /* Changed to 50% */
      border: none;
      outline: none;
      mix-blend-mode: difference;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    z-index: 1;
    padding: 2.5rem 10rem;
    width: 100%;
    gap: 5rem;

    img {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
      animation: rotateanimation 5s var(--cubic) infinite;

      @media screen and (max-width: 767px) {
        width: 5rem;
        height: 5rem;
        flex-direction: column-reverse;
        justify-content: center;
      }
    }

    @media screen and (max-width: 1024px) {
      padding: 2.5rem 5rem;
      gap: 5rem;
    }

    @media screen and (max-width: 767px) {
      padding: 2.5rem 1rem;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3rem;
    }

    @keyframes rotateanimation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    h3 {
      font-size: var(--heading-sm);
      color: var(--white);
      font-weight: 500;
      font-family: var(--font);
      text-align: left;

      @media screen and (max-width: 767px) {
        font-size: var(--norm);
      }
    }
  }
`;

const videoVariants = {
  initial: {
    scale: 0.5,
    y: "-200px",
    x: 0,
    opacity: 0.5,
  },
  whileInView: {
    scale: 1,
    y: 0,
    x: 0,
    opacity: 0.7,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

function Head() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if window is defined (client-side) before accessing it
    if (typeof window !== "undefined") {
      // Access window.innerWidth safely here
      const windowWidth = window.innerWidth;
      // Use windowWidth in your logic
      const x = windowWidth < 767 ? 0 : 300;

      // Update the videoVariants with the calculated x value
      videoVariants.initial.x = x;
    }
  }, []);

  return (
    <ProjectHeadContainer>
      <div className="video">
        <motion.video
          variants={videoVariants}
          initial="initial"
          whileInView="whileInView"
          loop
          autoPlay
          muted
          playsInline
          ref={videoRef}
        >
          <source
            src="https://res.cloudinary.com/divbobkmd/video/upload/v1695302317/cuberto-3_mu3dae.webm"
            type="video/webm"
          />
        </motion.video>
      </div>
      <div className="content">
        <h3>
          At Cyper Studio, we cherish your vision as our own, nurturing it with
          a blend of heartfelt passion and unmatched expertise. Together, we'll
          create something extraordinary, turning dreams into remarkable
          realities.
        </h3>
        <Image src={star1} alt="cyper studio details" />
        <svg className="cb-svgsprite -star">
          <use xlinkHref="/assets/sprites/svgsprites.svg#star"></use>
        </svg>
      </div>
    </ProjectHeadContainer>
  );
}

export default Head;
