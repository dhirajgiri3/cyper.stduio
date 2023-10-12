import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: normal;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Cursor = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  padding: 0.5rem;
`;

const PText = styled.p`
  color: #fff;
  font-size: 4px;
  font-family: var(--light-font);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: all 0.3s ease-in-out;
`;

const SidebarCursor = () => {
  const cursorRef = useRef(null);
  const [isPVisible, setPVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const carouselElements = document.querySelectorAll(".link");
    const cursorCenterX = cursor.offsetWidth / 2;
    const cursorCenterY = cursor.offsetHeight / 2;

    const onMouseMove = (event) => {
      gsap.to(cursor, {
        duration: 0.4,
        x: event.clientX - cursorCenterX,
        y: event.clientY - cursorCenterY,
      });
    };

    const onMouseEnterCarousel = () => {
      setPVisible(true);
      gsap.to(cursor, {
        duration: 0.3,
        scale: 3,
        mixBlendMode: "difference",
        
      });
    };

    const onMouseLeaveCarousel = () => {
      setPVisible(false);
      gsap.to(cursor, { duration: 0.3, scale: 1 });
    };

    window.addEventListener("mousemove", onMouseMove);
    carouselElements.forEach((carouselItem) => {
      carouselItem.addEventListener("mouseenter", onMouseEnterCarousel);
      carouselItem.addEventListener("mouseleave", onMouseLeaveCarousel);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      carouselElements.forEach((carouselItem) => {
        carouselItem.removeEventListener("mouseenter", onMouseEnterCarousel);
        carouselItem.removeEventListener("mouseleave", onMouseLeaveCarousel);
      });
    };
  }, []);

  return (
    <CursorWrapper ref={cursorRef}>
      <Cursor>
        <PText visible={isPVisible}>Click</PText>
      </Cursor>
    </CursorWrapper>
  );
};

export default SidebarCursor;
