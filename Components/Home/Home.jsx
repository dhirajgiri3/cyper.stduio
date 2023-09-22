"use client";

import { ScrollContainer, GellyElement, FixedElement } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import React from "react";
import styled from "styled-components";
import Header from "../Common/Header/Header";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

function Home() {
  return (
    <>
      <ScrollContainer>
        <Header />
        <FirstSection />
        <SecondSection />
      </ScrollContainer>
    </>
  );
}

export default Home;
