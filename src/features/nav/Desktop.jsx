import React from 'react';
import { styled } from 'styled-components';
import { glowingAnimation } from '../animations/GlowingText';

const Desktop = () => (
  <Wrap>
    <a href="#projects"><li>Projects</li></a>
    <a href="#skills"><li>Skills</li></a>
    <a href="#about"><li>About</li></a>
    <a href="#contact"><li>Contact</li></a>
  </Wrap>
);

const Wrap = styled.ul`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  list-style-type:  none;
  font-size: 1.2rem;
  margin: 0;
  a {
    color: #c3b0ec;
    border-radius: .3rem;
    text-decoration: none;
    position: relative;
    animation: ${glowingAnimation} 2s infinite;
    li {
      width: 6rem;
      text-align: center;
      padding: .1rem .3rem;
    }

    transition: all 1s;
    &:hover {
      background-color: #c3b0ec;
      color: black;
    }
  }
`;

export default Desktop;
