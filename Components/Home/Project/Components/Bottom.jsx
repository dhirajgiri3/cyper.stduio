import WideButton from "@/Components/Common/Buttons/WideButtons";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Right from "./Right";

const HomeServiceBottom = styled.div`
  display: flex;
  gap: 5rem;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  .left {
    flex: 1;
    color: #000;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    .servicebtn {
      position: sticky;
      top: 15vh;
    }
  }

  .rightss {
    flex: 2.5;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

function Bottom() {
  return (
    <HomeServiceBottom>
      <div className="left">
        <div className="servicebtn">
          <Link href="/">
            <WideButton
              text="See all Services"
              paddingx="4rem"
              paddingy="1rem"
              mpaddingx="2rem"
              mpaddingy=".7rem"
              fontsize="1rem"
              mfontsize="1rem"
              color="#eee"
              hoverbg="#000"
              hovercolor="#eee"
              bordercolor="#a200ff80"
              hoverborder="#000"
            />
          </Link>
        </div>
      </div>
      <div className="rightss">
        <Link href="/" className="link">
          <Right
            title="FAD"
            desc="Discover a vibrant community that celebrates fashion, creativity, and individuality. Join Fad and be a part of India's first Fashion Community Platform."
            span="Website - Landing Platform"
            videosrc="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/web-dev.mp4?alt=media&token=febdf55b-1bee-4be0-bb02-c57907e5d707"
          />
          <Right
            title="FAD"
            desc="Discover a vibrant community that celebrates fashion, creativity, and individuality. Join Fad and be a part of India's first Fashion Community Platform."
            span="Website - Landing Platform"
            videosrc="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/app.mp4?alt=media&token=24c80e92-ae74-4acd-a486-db47afb9bbdc"
          />
          <Right
            title="FAD"
            desc="Discover a vibrant community that celebrates fashion, creativity, and individuality. Join Fad and be a part of India's first Fashion Community Platform."
            span="Website - Landing Platform"
            videosrc="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/ai.mp4?alt=media&token=748a3568-88c9-47ff-b928-4e873e409b69"
          />
          <Right
            title="FAD"
            desc="Discover a vibrant community that celebrates fashion, creativity, and individuality. Join Fad and be a part of India's first Fashion Community Platform."
            span="Website - Landing Platform"
            videosrc="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/blockchain.mp4?alt=media&token=8df06a4d-347c-4a99-9a4c-ed39bcf45aa6"
          />
          <Right
            title="FAD"
            desc="Discover a vibrant community that celebrates fashion, creativity, and individuality. Join Fad and be a part of India's first Fashion Community Platform."
            span="Website - Landing Platform"
            videosrc="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/ecommerce.mp4?alt=media&token=62ec96be-38f7-488f-8af4-cc5eb4f62965"
          />
        </Link>
      </div>
    </HomeServiceBottom>
  );
}

export default Bottom;
