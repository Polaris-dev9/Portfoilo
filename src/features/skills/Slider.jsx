import React, { useState } from 'react';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import { data, techLogos } from './data';
import SkillCard from './SkillCard';
import Title from '../../Title';
import '../../media/marble.png';
import { violetGradient } from '../animations/StyleVars';
import { glowingText } from '../animations/GlowingText';

const SkillSlider = () => {
  const [isOpen, setOpen] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleOpen = () => {
    setOpen(() => !isOpen);
  };
  return (
    <SliderWrapper className="mx-auto slider-wrapper">
      <Title title="Tech and Tool" />
      <Slider {...settings} className="slider">
        {data.map((card) => (
          <SkillCard key={card.id} {...card} />
        ))}
      </Slider>
      <div className="accordion bg-transparent accordion-flush" id="accordionFlushExample">
        <div className="accordion-item bg-transparent">
          <div id="flush-collapseOne" className="accordion-collapse bg-transparent collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body bg-transparent">
              <div className="mx-auto" style={{ maxWidth: '1200px' }}>
                <div className="header card-header mt-5">
                  <h3>Tech Tools Framework</h3>
                </div>
                <div className="card logo-wrapper">
                  {techLogos.map((logo) => (
                    <div key={logo.id} className="card logo" data-aos="spin-right">
                      <img src={logo.image} alt={logo.title} className="card-img-top" />
                      <small className="text-center">{logo.title}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h2 className="accordion-header text-center mt-3 fs-1 bg-transparent" id="flush-headingOne">
            <button className="badge text-light fs-3 bg-transparent text-center collapsed" onClick={handleOpen} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              {isOpen ? 'Collapse 💀' : 'See More 🚀'}
            </button>
          </h2>
        </div>
      </div>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.section`
  max-width: 1200px;
  margin: 6rem 0 3rem 0;
  .slider {
    margin-top: 1rem;
  }

  .header {
    padding: 0 !important;
  }

  .accordion {
    background-color: transparent;
  }

  button {
    border-color: transparent !important;
    animation: ${glowingText} 2s infinite;
  }

  .logo-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    background: transparent;
  }

  .logo {
    img {
      width: 100px;
      height: 100px;
    }
    ${violetGradient}
  }
`;

export default SkillSlider;
