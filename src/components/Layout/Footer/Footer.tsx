import React from 'react';
import './Footer.scss';
import modsenLogo from '@assets/images/modsen-logo.png';
import museumLogo from '@assets/images/museum-logo2.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <img src={museumLogo} alt="Museum" />
        <img src={modsenLogo} alt="Modsen" />
      </div>
    </footer>
  );
};

export default Footer;
