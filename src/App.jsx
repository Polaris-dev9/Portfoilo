<<<<<<< HEAD
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
=======
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
>>>>>>> 5b8c48d20a7a26600f2840b110a1bc877dc062b7

export default App;
