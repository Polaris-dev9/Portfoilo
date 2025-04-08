/* eslint-disable */

import React from 'react';
import { styled } from 'styled-components';
import { glowingAnimation } from '../animations/GlowingText';

const Social = () => (
  <SocialWrap className="d-flex flex-column gap-4 mt-5">
    {/* <a data-aos="fade-up" data-aos-duration="1000" href="http://www.github.com/PowerLevel9000" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" /></a> */}
    {/* <a data-aos="fade-up" data-aos-duration="1300" href="http://www.linkedin.com/in/powerlevel" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin" /></a> */}
    {/* <a data-aos="fade-up" data-aos-duration="1600" href="https://wellfound.com/u/adarsh-pathak-8" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-angellist" /></a> */}
    {/* <a data-aos="fade-up" data-aos-duration="1900" href="http://www.x.com/powerlevel9002" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter" /></a> */}
    {/* <a data-aos="fade-up" data-aos-duration="1200" href="https://medium.com/@adi8090808766" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-medium" /></a> */}
    {/* <a data-aos="fade-up" data-aos-duration="2500" href="mailto:adi8090808766@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope" /></a> */}
  </SocialWrap>
);

const SocialWrap = styled.div`
  a {
    color: inherit;
    border-radius: 50%;
    display: grid;
    place-items: center;
    &:hover {
        color: black;
        background-color: #c3b0ec;
        transition: all 1s;
    }
  }

  i {
    font-size: 1.5rem;
    border-radius: 50%;
    animation: ${glowingAnimation} 2s infinite;
  }
`;

export default Social;
