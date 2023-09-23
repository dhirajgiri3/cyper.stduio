import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;

  .introvid {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1024px) {
      height: 30vh;
      object-fit: contain;
    }

    @media screen and (max-width: 768px) {
      height: 50vh;
    }
  }
`;

function Video() {
  return (
    <div>
      <Container>
        <motion.video
          initial={{
            opacity: 0,
            width: "500px",
            height: "500px",
            borderRadius: "100%",
          }}
          whileInView={{
            opacity: 1,
            width: "100%",
            height: "100%",
            borderRadius: "0",
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 10,
            ease: "easeInOut",
            delay: 1,
          }}
          playsInline
          loop
          muted
          autoPlay
          className="introvid"
        >
          <source
            src="https://res.cloudinary.com/divbobkmd/video/upload/v1695302321/cyper-intro_zcyuip.mp4"
            type="video/mp4"
          />
        </motion.video>
      </Container>
    </div>
  );
}

export default Video;
