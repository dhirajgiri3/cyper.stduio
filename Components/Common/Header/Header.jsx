"use client";

import React, { useState, useRef, useEffect } from "react";
import { FixedElement } from "react-nice-scroll";
import styled from "styled-components";
import logo from "@/Assets/Images/cyper-logo/cyper-white-logo.png";
import Image from "next/image";
import Sidebar from "./Sidebar/Sidebar";

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 10rem;

  @media screen and (max-width: 1024px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0.5rem;
  }

  .container {
    background: #00000010;
    backdrop-filter: blur(10px);
    height: 8vh;
    width: calc(100vw - 20rem);
    padding: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100px;
    border: 1px solid #333;

    @media screen and (max-width: 1024px) {
      height: 6vh;
      width: calc(100vw - 10rem);
    }

    @media screen and (max-width: 768px) {
      height: 7vh;
      width: calc(100vw - 1rem);
    }

    @media screen and (max-width: 380px) {
      height: 9vh;
    }

    .left {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        height: 3rem;
        width: 3rem;
        object-fit: cover;
      }
    }

    .mid {
      display: none;

      @media screen and (max-width: 768px) {
        opacity: 0;
        transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        display: block;

        h3 {
          font-family: var(--font);
          letter-spacing: 1px;
          font-weight: 300;
          font-size: 1.5rem;
        }
      }
    }

    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 3rem;

      .time {
        p {
          font-size: var(--para);
          color: var(--white);
        }

        @media screen and (max-width: 768px) {
          display: none;
        }
      }

      .bar {
        position: relative; /* Remove absolute positioning */
        z-index: 1002;

        label {
          z-index: 1002; /* Higher z-index for label */
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 0.3rem;
          cursor: pointer;
          transition: all 0.5s ease-in-out;
          border: 2px solid var(--white);
          outline: none;
          position: relative;
        }

        label::before,
        label::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          transform: scale(0);
          background: var(--primary);
          border-radius: 50%;
          transition: all 0.5s ease-in-out;
          z-index: -1;
        }

        label::before {
          width: 100%;
          height: 100%;
        }

        label::after {
          width: 100%;
          height: 100%;
        }

        label:hover::before,
        label:hover::after {
          transform: scale(1);
        }

        label:hover {
          transform: scale(1.1);
          border: 2px solid var(--primary);

          .line {
            stroke: var(--white);
          }
        }

        .hamburger {
          cursor: pointer;
        }

        .hamburger input {
          display: none;
        }

        .hamburger svg {
          height: 1.6rem;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);

          @media screen and (max-width: 768px) {
            height: 1.7rem;
          }

          @media screen and (max-width: 350px) {
            height: 1.5rem;
          }
        }

        .line {
          fill: none;
          stroke: var(--white);
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 1s;
        }

        .line-top-bottom {
          stroke-dasharray: 12 63;
          stroke-dashoffset: 0;
        }

        .hamburger input:checked + svg {
          transform: rotate(-45deg);
        }

        .hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
      }
    }
  }
`;

const BlackBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: #00000050;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: none;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
`;

const Sidebars = styled.div`
  width: 45vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  /* background: #fff; */
  backdrop-filter: blur(50px);
  color: var(--white);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1001;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-120%);
  padding: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 60vw;
    height: 70vh;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
`;



function Header() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const bgRef = useRef(null);
  const midRef = useRef(null);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    if (sidebarRef.current) {
      if (sidebar) {
        sidebarRef.current.style.transform = "translateX(0vw)";
        bgRef.current.style.display = "flex";
        midRef.current.style.opacity = "1";
        bgRef.current.style.opacity = "1";
      } else {
        sidebarRef.current.style.transform = "translateX(-120%)";
        bgRef.current.style.display = "none";
        midRef.current.style.opacity = "0";
        bgRef.current.style.opacity = "0";
      }
    }
  });

  const [dateTime, setDateTime] = React.useState(
    new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(
        new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <HeaderContainer>
        <FixedElement top={20}>
          <div className="container">
            <div className="left">
              <Image
                src={logo}
                alt="Cyper studio Logo"
                title="Cyper studio Logo"
              />
            </div>
            <div ref={midRef} className="mid">
              <h3>Cyper Studio</h3>
            </div>
            <div className="right">
              <div className="time">
                <p> London, UK : {dateTime}</p>
              </div>
              <div className="bar">
                <label className="hamburger">
                  <input type="checkbox" onClick={showSidebar} />
                  <svg viewBox="0 0 32 32">
                    <path
                      className="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </FixedElement>
      </HeaderContainer>
      <BlackBg ref={bgRef} />
      <Sidebars ref={sidebarRef}>
        <Sidebar />
      </Sidebars>
    </>
  );
}

export default Header;
