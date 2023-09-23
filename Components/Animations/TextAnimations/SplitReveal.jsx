"use client";

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const SplitReveal = ({
  text,
  width,
  fontsize,
  lineheight,
  letterSpace,
  fontweight,
  color,
  tfont,
  mfont,
}) => {
  const letters = text.split("");
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const Container = styled.div`
    width: ${width};

    span {
      font-size: ${fontsize};
      color: ${color};
      line-height: ${lineheight};
      letter-spacing: ${letterSpace};
      font-weight: ${fontweight};
      font-family: var(--font);

      @media screen and (max-width: 1000px) {
        font-size: ${tfont};
      }

      @media screen and (max-width: 768px) {
        font-size: ${mfont};
      }
    }
  `;

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  const transition = {
    duration: 0.3,
    delay: 0.03,
    ease: "easeInOut",
  };

  return (
    <div ref={ref}>
      <Container>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={animationVariants.hidden}
            animate={
              inView ? animationVariants.visible : animationVariants.hidden
            }
            transition={{ ...transition, delay: index * transition.delay }}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {letter === " " ? " " : <span>{letter}</span>}
          </motion.span>
        ))}
      </Container>
    </div>
  );
};

export default SplitReveal;
