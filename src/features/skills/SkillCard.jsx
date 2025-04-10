import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { violetGradient } from '../animations/StyleVars';

const SkillCard = ({
  image, title, details,
}) => (
  <CardWrapper className="card gap-5 mx-auto rounded" style={{ width: '320px', height: '470px' }}>
    <h5 className="card-header">{title}</h5>
    <img src={image} className="card-img-top mx-auto" alt={title} />
    <div className="card-body h-25">
      <p className="card-text">{details}</p>
    </div>
  </CardWrapper>
);

const CardWrapper = styled.div`
  ${violetGradient}
  img {
    width: 50%;
    height: 140px;
  }
`;

SkillCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default SkillCard;
