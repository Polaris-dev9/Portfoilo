import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Turn as Hamburger } from 'hamburger-react';
import logo from '../../media/adarsh-logo.png';
import MobileMenu from './MobileMenu';
import Desktop from './Desktop';
import { glowingAnimation } from '../animations/GlowingText';
import { blackGradient } from '../animations/StyleVars';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <NavWrap style={scrolled ? blackGradient : { background: 'transparent' }}>
      <div className="logo-wrap">
        <img src={logo} alt="logo" />
      </div>

      {width <= 768 ? (
        <>
          {' '}
          <Hamburger direction="left" toggled={isOpen} toggle={setOpen} duration={1} />
          <MobileMenu open={isOpen} onClick={setOpen} />
        </>
      ) : <Desktop />}
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  display: flex;
  width: 100%;
  height: 8vh;
  position: fixed;
  z-index: 9;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  .logo-wrap {
    width: 40px;
    display: grid;
    place-items: center;
    img {
      width: 100%;
      border-radius: 50%;
      animation: ${glowingAnimation} 2s infinite;
    }
  }
  .hamburger-react {
    position: relative;
    color: #c3b0ec;
    z-index: 10;
  }

  @media screen and (min-width: 768px) {
    padding: 0.5rem 3rem;
  }
`;

export default Navigation;
