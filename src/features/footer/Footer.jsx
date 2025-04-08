import React from 'react';
import { styled } from 'styled-components';
import { violetGradient } from '../animations/StyleVars';

const Footer = () => (
  <FooterWrap className="d-flex flex-wrap justify-content-around align-items-center p-3 text-light">
    <p>
      All ©️rights reserved belongs to
      {' '}
      <a href="https://github.com/PowerLevel9000" target="_blank" rel="noreferrer">Adarsh Pathak</a>
      {' '}
      under
      {' '}
      <a href="https://github.com/PowerLevel9000" target="_blank" rel="noreferrer">GNU GENERAL PUBLIC LICENSE</a>
    </p>
    <a href="https://buymeacoffee.com/adi8090808E" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy me a coffee" /></a>
  </FooterWrap>
);

const FooterWrap = styled.footer`
  ${violetGradient}
  a {
    color: orange;
  }
`;

export default Footer;
