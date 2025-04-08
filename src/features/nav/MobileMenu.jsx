import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import logo from '../../media/adarsh-logo.png';
import { glowingAnimation } from '../animations/GlowingText';

const MobileMenu = ({ open, onClick }) => (
  <Mobile style={{ width: open ? '100%' : 0, backgroundColor: open ? 'rgba(0,0,0, 0.9)' : 'rgba(0,0,0, 0)' }}>
    <div className="warper">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul style={{ height: open ? '50vh' : 0 }}>
        <a href="#projects" onClick={() => { onClick(false); }}><li>Projects</li></a>
        <a href="#skills" onClick={() => { onClick(false); }}><li>About</li></a>
        <a href="#about" onClick={() => { onClick(false); }}><li>About</li></a>
        <a href="#contact" onClick={() => { onClick(false); }}><li>Contact</li></a>
      </ul>
    </div>
  </Mobile>
);

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Mobile = styled.div`
	position: absolute;
	top: 0;
    right: 0;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
    height: 100vh;
	border: 1px solid black;
    overflow: hidden;
    transition: width 0.5s;
    transition: background-color 1s;
    padding: 0;
	z-index: 9;

	.warper {
        margin-top: 5rem;
		display: inherit;
		flex-direction: inherit;
		justify-content: space-around;

		div {
			width: 200px;
			display: grid;
			place-items: center;
			img {
				width: 100%
			}
		}
	}
	ul {
		list-style-type: none;
		padding: 0;
		font-weight: 800;
		letter-spacing: 4px;
		font-size: 30px;
		display: inherit;
		flex-direction: inherit;
		justify-content: space-around;
		align-items: center;
        transition: height 1s;
		a {
			color: #ac89f6 !important;
			text-decoration: none;
			position: relative;
			animation: ${glowingAnimation} 2s infinite;
		}

		li {
			padding: 0 .5rem;
		}
	}
`;

export default MobileMenu;
