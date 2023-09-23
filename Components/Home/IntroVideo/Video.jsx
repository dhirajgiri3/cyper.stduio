import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 3rem 0;
  position: relative;
  z-index: 0;

  .introvid {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
      height: 30vh;
    }

    @media screen and (max-width: 768px) {
      height: 40vh;
    }
  }
`;

function Video() {
  return (
    <VideoContainer>
      <video autoPlay loop muted playsInline className="introvid">
        <source
          src="https://res.cloudinary.com/divbobkmd/video/upload/v1695467978/Cyper%20studio/cyper-intro_bfs06k.mp4"
          type="video/mp4"
        />
      </video>
    </VideoContainer>
  );
}

export default Video;
