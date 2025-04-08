import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
// import { Scene } from 'three';
// import { OrbitControls } from '@react-three/drei';
import { violetGradient } from '../animations/StyleVars';
import Social from './Social';

const Hero = () => {
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
  return (
    <HeroWrapper className="hero" id="top">
      <div className="text-hero d-flex gap-4" data-aos="fade-up" data-aos-duration="1500">
        <Social />
        <div className="flex flex-direction-column justify-content-center align-items-center">
          <div className="circle" />
          <div className="line" />
        </div>
        <div
          className="text me-3"
          data-aos="slide-left"
          data-aos-duration="2000"
          data-aos-mirror="true"
        >
          <h1 className="text-light mt-4">
            Hi I&apos;m
            {' '}
            <span>Bohdan</span>
          </h1>
          <p>
            I am Bohdan and
            {' '}
            <b>Full-Stack</b>
            {' '}
            Developer
          </p>
          <p>Each Coding Fight makes me stronger than before</p>
        </div>
      </div>
      {scrolled
        && (
          <a href="#top" className="link" id="link">
            <i className="fa-solid fa-arrow-up" />
          </a>
        )}
      {/* <canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <OrbitControls />
        <Scene />
      </Suspense>
    </canvas> */}
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  .text-hero {
    width: 80%;
    padding-top: 10rem;
    margin-left: 20%;
    overflow: hidden;
    span,
    b {
      color: #9153ff;
    }

    h1 {
      font-size: 5rem;
      font-weight: 700;
    }

    p {
      font-size: 2rem;
    }

  }
  .circle {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #c3b0ec;
    margin: auto;
  }

  .line {
    width: 5px;
    height: 50vh;
    margin: auto;
    background: ${violetGradient};
  }

  @media screen and (max-width: 769px) {
    .text-hero {
      margin-left: 10%;
      width: 80%;
      h1 {
        font-size: 4.5rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 426px) {
    .text-hero {
      width: 90% !important;
      margin-left: 5%;
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
    .line {
      height: 70vh;
    }
  }
`;

export default Hero;
