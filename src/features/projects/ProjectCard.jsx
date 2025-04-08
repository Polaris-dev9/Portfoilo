import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Card from './Card';
import { greenPinkGradient } from '../animations/StyleVars';
import Title from '../../Title';

const ProjectCard = () => {
  const { projects } = useSelector((store) => store);
  return (
    <>
      <ProjectCardWrapper className="text-light background-wrapper">
        <Title title="Projects Highlight" />
        {projects.map((project, index) => (
          <Card key={project.id} {...project} index={index % 2 === 0} />
        ))}
      </ProjectCardWrapper>
    </>

  );
};

const ProjectCardWrapper = styled.section`
  gap: 3rem;
  .card {
    width: 80%;
    margin: auto;
    img {
      width: 100%;
      height: 58vh;
      max-width: 460px;
    }
    ${greenPinkGradient}
    min-height: 60vh;
  }
  
  .card-wrapper {
    ${greenPinkGradient};

    @media only screen and (max-width: 769px) {
      iframe {
        width: 100% !important;
      }
      flex-direction: column !important;
    }
  }

  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  margin-bottom: 2rem;
  h3 {
    margin: 3rem 0 2rem 0;
  }
`;

export default ProjectCard;
