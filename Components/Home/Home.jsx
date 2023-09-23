"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Common/Header/Header";
import FirstSection from "./FirstSection/FirstSection";
import Video from "./IntroVideo/Video";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import DashboardSection from "./ClientDashboardInformation/DashboardSection";
import SecondSection from "./SecondSection/SecondSection";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  transition: background-color 0.5s ease;
`;

function Home() {
  const HomeContainerRef = useRef(null);

  const [dashboardSectionRef, dashboardSectionInView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    const tl = gsap.timeline();

    if (dashboardSectionInView) {
      tl.to(HomeContainerRef.current, {
        backgroundColor: "#5a3cdf",
        duration: 0.5,
      });
    } else {
      tl.to(HomeContainerRef.current, {
        backgroundColor: "#000",
        duration: 0.5,
      });
    }
  }, [dashboardSectionInView]);

  return (
    <HomeContainer ref={HomeContainerRef}>
      <Header />
      <FirstSection />
      <SecondSection />
      {/* <Video /> */}
      <div ref={dashboardSectionRef}>
        <DashboardSection />
      </div>
    </HomeContainer>
  );
}

export default Home;
