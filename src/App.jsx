import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { styled } from 'styled-components';
import './App.css';
import Navigation from './features/nav/Navigation';
import Hero from './features/hero/Hero';
import SkillSlider from './features/skills/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from './features/projects/ProjectCard';
import { glowingAnimation } from './features/animations/GlowingText';
import { greenPinkGradient } from './features/animations/StyleVars';
import AboutMe from './features/about-me/AboutMe';
import Footer from './features/footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Liner id="skills" />
      <SkillSlider />
      <Liner id="projects" />
      <Project />
      <Liner id="about" />
      <AboutMe />
      <Footer />
    </>
  );
};

const Liner = styled.div`
  height: 1rem;
  ${glowingAnimation}
  ${greenPinkGradient}
`;

export default App;
