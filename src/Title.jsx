import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { glowingText } from './features/animations/GlowingText';

const Title = ({ title }) => (
  <TitleWrapper className="text-center">
    {title}
  </TitleWrapper>
);

const TitleWrapper = styled.h3`
    font-size: 4rem;
    font-weight: 700;
    animation: ${glowingText} 3s infinite;

    @media screen and (max-width: 769px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 426px) {
      font-size: 2rem;
    }
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
