import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container mx-auto text-center bg-dark pt-2'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items text-center pb-3'>
            <h6>Made by
              Dakota Pierce
            </h6>
            <a href='pdf/AshtonPierceResume.pdf' download>Click me to download my resume!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
