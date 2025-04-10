import React from 'react';
import { styled } from 'styled-components';
import Title from '../../Title';
import { violetGradient } from '../animations/StyleVars';
import Contact from './Contact';
// import video from '../../media/video.mp4';

const AboutMe = () => (
  <AboutMeWrapper className="about-me pt-5" data-aos="fade-up" data-aos-duration="1500">
    <Title title="About Me" />
    <div className="banner" />
    <div className="d-flex justify-content-between mx-auto w-75 about text-light" data-aos="flip-right">
      <div className="collapsed pb-5">
        <h3 className="card-header ps-0 fs-1 mb-3">Full Stack Developer</h3>
        <p className="card-description fs-4">
          I am looking for a collaborative, team-focused culture in my next job,
          opportunities to learn and grow my skills from a technical standpoint,
          and a chance to learn more leadership skills over time.
          I am a full stack developer who has experience of over 7 years and has handled many
          projects for businesses from startup to large scale.
          Working as a full stack developer for several years has enabled me to acquire
          multiple skills in the programming sphere.
          My experience allows me to contribute to the business success of clients.
          I can bring my successes and experiences to your job.
          I understand that every project that represents a business plays a very important role
          in its growth.
          Some cool facts about me are that I can work full time for your
          project in your time zone
          and I can deliver a 100% result.
          I will devote all my passion to you and your business success.
        </p>
      </div>
    </div>
    <Contact />
  </AboutMeWrapper>
);

const AboutMeWrapper = styled.section`
  position: relative;
  .banner {
    height: 100vh;
    width: 100%;
    ${violetGradient}
    position: absolute;
    top: 0;
    z-index: 0;
  }
  h3 {
    position: relative;
    z-index: 1;
    font-size: 3.5rem !important;
  }

  .about {
    position: relative;
    z-index: 1;
  }

  .card-description {
    font-size: 1.5rem !important;
    line-height: 1.8;
  }
`;

export default AboutMe;
