import React from "react";
import styled from "styled-components";

const PortfolioRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 50vh;
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid var(--grey);

  @media screen and (max-width: 1024px) {
    min-height: 50vh;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 3rem;
  }

  .info {
    flex: 1;
    padding: 2rem;
    width: 100%;
    height: 100%;
    gap: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    transition: all 0.5s ease-in-out;

    &:hover {
      .title {
        svg {
          scale: 1.5;
        }
      }
    }

    .top {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
      flex: 1;

      .title {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        svg {
          transition: all 0.5s ease-in-out;
        }

        h1 {
          font-size: 3rem;
          font-weight: 900;
          font-family: var(--grot-bold);
          line-height: 1.3;
          color: var(--white);
        }
      }

      .opt {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        row-gap: .5rem;
        column-gap: 1rem;
        flex-wrap: wrap;

        p {
          font-size: var(--para);
          font-weight: 500;
          font-family: var(--font);
          color: var(--para-color);
          white-space: nowrap;
          border: 1px solid var(--grey);
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          background: linear-gradient(77deg, #7253ff 60%, #aa00ff);
          background: var(--black);
          backdrop-filter: blur(10px);
        }
      }

      .desc {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        p {
          font-size: var(--para);
          font-weight: 500;
          font-family: var(--font);
          color: var(--whites);
        }
      }
    }

    .type {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex: 1;

      p {
        font-size: var(--para);
        font-weight: 500;
        font-family: var(--font);
        color: var(--light-grey);

        span {
          font-weight: 700;
        }
      }
    }
  }

  .visuals {
    flex: 1;
    padding: 1rem;
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--grey);
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1024px) {
      min-height: 50vh;
    }

    @media screen and (max-width: 767px) {
      min-height: 50vh;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function Right({ title, desc, span, videosrc, option }) {
  return (
    <PortfolioRightContainer>
      <div className="visuals">
        <video autoPlay loop muted src={videosrc}></video>
      </div>
      <div className="info">
        <div className="top">
          <div className="title">
            <h1>{title}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="#eee"
            >
              <g fillRule="evenodd">
                <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
                <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
              </g>
            </svg>
          </div>
          <div className="opt">
            {option.map((o, key) => {
              return <p key={key}>{o}</p>;
            })}
          </div>
          <div className="desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="type">
          <p>
            <span> Type : </span> {span}
          </p>
        </div>
      </div>
    </PortfolioRightContainer>
  );
}

export default Right;
