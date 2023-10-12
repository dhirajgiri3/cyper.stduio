"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Common/Header/Header";
import FirstSection from "./FirstSection/FirstSection";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import gsap, { Power4 } from "gsap";
import DashboardSection from "./ClientDashboardInformation/DashboardSection";
import SecondSection from "./SecondSection/SecondSection";
import AiServices from "./AiServiceSection/AiServices";
import Project from "./Project/Project";
import HomeService from "./Service/HomeService";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  transition: background-color 0.5s ease-in-out;


`;

function Home() {
  const HomeContainerRef = useRef(null);

  const [dashboardSectionRef, dashboardSectionInView] = useInView({
    threshold: 0.2,
  });

  const [homeservicetSectionRef, homeservicetSectionInView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    const tl = gsap.timeline();

    if (dashboardSectionInView) {
      tl.to(HomeContainerRef.current, {
        backgroundColor: "#5a3cdf",
        duration: 0.5, // Set the duration for smooth transition
        ease: Power4.easeInOut,
      });
    } else if (homeservicetSectionInView) {
      tl.to(HomeContainerRef.current, {
        backgroundColor: "#fff", // Set the background color to white
        duration: 0.5, // Set the duration for smooth transition
        ease: Power4.easeInOut,
      });
    } else {
      tl.to(HomeContainerRef.current, {
        backgroundColor: "#000",
        duration: 0.5, // Set the duration for smooth transition
        ease: Power4.easeInOut,
      });
    }
  }, [dashboardSectionInView, homeservicetSectionInView]);

  return (
    <HomeContainer ref={HomeContainerRef}>
      <Header />
      <FirstSection />
      <SecondSection />
      <div ref={dashboardSectionRef}>
        <DashboardSection />
      </div>
      <AiServices />
      <div>
        <Project />
      </div>
      <div>
        <HomeService />
      </div>
    </HomeContainer>
  );
}

export default Home;
