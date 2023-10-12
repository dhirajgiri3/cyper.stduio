import React from "react";
import styled from "styled-components";
import Top from "./Components/Top";
import Bottom from "./Components/Bottom";

const HomeServiceContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.5rem 10rem;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    padding: 2.5rem 5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 2.5rem 1rem;
  }

  .btm {
    position: sticky;
    top: 0;
  }
`;

function HomeService() {
  return (
    <HomeServiceContainer>
      <Top />
      <Bottom />
    </HomeServiceContainer>
  );
}

export default HomeService;
