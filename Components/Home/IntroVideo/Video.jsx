import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }

  .introvid {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1024px) {
      height: 40vh;
      object-fit: cover;
    }

    @media screen and (max-width: 768px) {
      height: 30vh;
    }
  }
`;

function Video() {
  return (
    <div>
      <Container>
        <video playsInline loop muted autoPlay className="introvid">
          <source
            src="https://res.cloudinary.com/divbobkmd/video/upload/v1695302321/cyper-intro_zcyuip.mp4"
            type="video/mp4"
          />
        </video>
      </Container>
    </div>
  );
}

export default Video;
