import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SidebarCursor from "../../Cursor/SidebarCursor";

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    gap: 4rem;
    margin-top: 14vh;
  }

  .title {
    font-size: var(--para);
    font-weight: 500;
    font-family: var(--font);
    color: var(--para-color);

    @media screen and (max-width: 768px) {
        font-size: var(--norm);
        }
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;
    flex: 1;
    text-align: left;
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      li {
        font-size: var(--norm);
        font-weight: 300;
        letter-spacing: 1px;
        font-family: var(--light-font);
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        a {
          text-decoration: none;
          color: var(--white);
          transition: all 0.3s ease-in-out;
          line-height: 1.5rem;

          &:hover {
            letter-spacing: 2px;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;
    flex: 1;
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.3rem;

      li {
        font-size: var(--heading);
        font-weight: 100;
        letter-spacing: 1px;
        font-family: var(--light-font);
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        a {
          text-decoration: none;
          color: var(--white);
        }
      }
    }
  }
`;

const TextLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  button {
    outline: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4rem;
    overflow: hidden;
    cursor: pointer;
    background: transparent;
  }

  button div {
    transform: translateY(0px);
    width: 100%;
  }

  button,
  button div {
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  button div span {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 4rem;
  }

  button:hover div {
    transform: translateY(-4rem);
  }

  button h2 {
    font-size: 2rem;
    font-weight: 300;
    color: #eee;
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;

    @media screen and (max-width: 1000px) {
      font-size: 2.2rem;
    }
  }
  button h3 {
    font-size: 1.5rem;
    font-weight: 300;
    color: #ddd;
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
  }

  button:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 1000px) {
    button h1 {
      font-size: 2.2rem;
    }
  }
`;

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <div className="socials">
          <h1 className="title">Socials</h1>
          <ul>
            <li>
              <a target="_blank" href="https://www.instagram.com/cyperstudioo/">
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/cyperstudio/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/cyperstudio/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a target="_blank" href="https://behance.com/cyperstudio">
                Behance
              </a>
            </li>
            <li>
              <a target="_blank" href="https://dribbble.com/cyperstudio">
                Dribbble
              </a>
            </li>
            <li>
              <a target="_blank" href="https://dribbble.com/cyperstudio">
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <h1 className="title">Menu</h1>
          <ul>
            <li>
              <TextLink href="/" className="link text-link">
                <button>
                  <div>
                    <span>
                      <h2>Home</h2>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h3>Our Story</h3>
                    </span>
                  </div>
                </button>
              </TextLink>
            </li>
            <li>
              <TextLink href="/services" className="link text-link">
                <button>
                  <div>
                    <span>
                      <h2>Services</h2>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h3>What we do</h3>
                    </span>
                  </div>
                </button>
              </TextLink>
            </li>
            <li>
              <TextLink href="/services" className="link text-link">
                <button>
                  <div>
                    <span>
                      <h2>Projects</h2>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h3>Our Crafts</h3>
                    </span>
                  </div>
                </button>
              </TextLink>
            </li>
            <li>
              <TextLink href="/services" className="link text-link">
                <button>
                  <div>
                    <span>
                      <h2>Process</h2>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h3>How we do it</h3>
                    </span>
                  </div>
                </button>
              </TextLink>
            </li>
            <li>
              <TextLink href="/services" className="link text-link">
                <button>
                  <div>
                    <span>
                      <h2>About</h2>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h3>Know us</h3>
                    </span>
                  </div>
                </button>
              </TextLink>
            </li>
            <li>
              <TextLink href="/services" className="link text-link">
                <button>
                  <div>
                    <span>
                      <h2>Contact</h2>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h3>Let's talk</h3>
                    </span>
                  </div>
                </button>
              </TextLink>
            </li>
          </ul>
        </div>
        <SidebarCursor/>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
