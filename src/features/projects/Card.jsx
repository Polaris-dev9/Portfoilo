import React, { Suspense, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import {
  Modal, Button, Carousel,
} from 'react-bootstrap';
import { Vortex } from 'react-loader-spinner';
import { orangeTextGradient } from '../animations/GlowingText';
import { blackGradient } from '../animations/StyleVars';

const Card = ({
  image, title, techList, description, link, index,
}) => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CardWrapper className="card">
      {index && width > 769 ? (
        <>
          <div className="project-details rounded" data-aos="zoom-in">
            <h2>{title}</h2>
            <h3 className="m-0 p-0 fs-3">Tech Stack</h3>
            <div className="d-flex flex-wrap gap-2 my-2">
              {techList.map((item) => (<div key={item} className="badge bg-info text-dark">{item}</div>))}
            </div>
            <p className="fs-6 my-2">{description}</p>
            <div className="d-flex gap-5 my-4">
              <Button variant="success" onClick={handleShow}>
                Preview
              </Button>
              <a href={link[1]} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary" type="button">See Source</button></a>
            </div>
          </div>
          <div className="image-wrapper h-100" data-aos="zoom-in">
            <img src={image[1].image} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="image-wrapper h-100" data-aos="zoom-in">
            <img src={image[1].image} alt="" />
          </div>
          <div className="project-details rounded" data-aos="zoom-in">
            <h2>{title}</h2>
            <h3 className="m-0 p-0 fs-3">Tech Stack</h3>
            <div className="d-flex flex-wrap gap-2 my-2">
              {techList.map((item) => (<div key={item} className="badge bg-info text-dark">{item}</div>))}
            </div>
            <p className="fs-6 my-2">{description}</p>
            <div className="d-flex gap-5 my-4">
              <Button variant="success" onClick={handleShow}>
                Preview
              </Button>
              <a href={link[1]} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary" type="button">See Source</button></a>
            </div>
          </div>
        </>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        size="fullscreen"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
            <Modal.Title className="text-dark">
              {title}
              {' '}
              Preview
            </Modal.Title>
          </Modal.Header> */}
        <div className="text-end p-4">
          <Button variant="secondary" onClick={handleClose}>
            <i className="fa-solid fa-xmark" />
          </Button>
        </div>

        <Modal.Body>
          <Carousel data-bs-theme="dark">
            {image.map((img) => (
              <Carousel.Item key={img}>
                <div className="wrapper text-center w-100">
                  <Suspense fallback={(
                    <Vortex
                      visible
                      height="400"
                      width="400"
                      ariaLabel="vortex-loading"
                      wrapperStyle={{}}
                      wrapperClass="vortex-wrapper"
                      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    />
)}
                  >
                    <img src={img.image} style={width < 768 ? img.styleMobile : img.style} className="image" alt="project0" />
                  </Suspense>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="text-center mt-5">
            <a href={link[0]} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary" type="button">See Live</button>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </CardWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techList: PropTypes.oneOf([]).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.bool.isRequired,
};

const CardWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: row;
.image-wrapper {
  width: 45%;
  height: 80vh;
  display: grid;
  place-items: center;
}

.wrapper {
  width: 100%;
  height: 70vh;
  display: grid;
  place-items: center;
}

iframe {
    width: 100%;
    height: 70vh;
  }
  h2 {
    font-weight: 700;
    ${orangeTextGradient};
    text-align: center;
  }
  
  .project-details {
    width: 60%;
    margin: 2rem;
    ${blackGradient}
    padding: 1rem;
  }
  
  @media only screen and (max-width: 769px) {
    flex-direction: column !important;
    
    .project-details {
      width: 100%;
      margin: 1rem 0 0 0;
    }

    img {
      width: 100%;
      height: auto;
    }

    .image-wrapper {
      width: 100%;
      height: auto;
    }
  };

  @media only screen and (max-width: 426px) {
    button {
      padding: .2rem;
    }
  }
  `;

export default Card;
