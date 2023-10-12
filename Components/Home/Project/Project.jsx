import React from "react";
import Head from "./Components/Head";
import styled from "styled-components";
import Prtfolio from "./Components/Prtfolio";

const HomeProjectContainer = styled.div`
  overflow: hidden;
`;

function Project() {
  return (
    <HomeProjectContainer>
      <Head />
      <Prtfolio />
    </HomeProjectContainer>
  );
}

export default Project;
