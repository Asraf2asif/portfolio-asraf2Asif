import React from 'react';
import { SocialMedia, NavigationDots } from '../components';
import './appWrap.scss';

const AppWrap = ({ children }) => {
  return (
    <div>
      {children}
      <SocialMedia />
      <div className='copyright'>
        <div className='p-text'>
          @{new Date().getFullYear()}{' '}
          <a
            href='https://github.com/Asraf2asif'
            className='p-text'
            target='_blank'
            rel='noreferrer'
          >
            Asraf2asif
          </a>
        </div>
        <div className='p-text'>All rights reserved</div>
      </div>
      <NavigationDots />
    </div>
  );
};

export default AppWrap;
