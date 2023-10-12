import React from "react";
import styled from "styled-components";

const HomeServiceTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 5rem;
  border-bottom: 1px solid var(--grey);
  padding-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  .title {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;

    h1 {
      font-size: 8rem;
      font-weight: 900;
      font-family: var(--grot-bold);
      line-height: 1;
      @media screen and (max-width: 1024px) {
        font-size: 6rem;
      }

      @media screen and (max-width: 767px) {
        font-size: 4rem;
      }
    }
  }

  .desc {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 2;

    p {
      font-size: var(--para);
      font-weight: 500;
      font-family: var(--font);
      color: var(--whites);
    }
  }
`;

function Top() {
  return (
    <HomeServiceTop>
      <div className="title">
        <h1> Our Services</h1>
      </div>
      <div className="desc">
        <p>
          At Cyper Studio, we cherish your vision as our own, nurturing it with
          a blend of heartfelt passion and unmatched expertise. Together, we'll
          create something extraordinary, turning dreams into remarkable
          realities.
        </p>
      </div>
    </HomeServiceTop>
  );
}

export default Top;
