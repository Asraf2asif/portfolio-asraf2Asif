import React from 'react';
import { SocialMedia, NavigationDots } from '../components';
import './appWrap.scss';

const AppWrap = ({ children }) => {
  return (
    <div>
      {children}
      <SocialMedia />
      <div className='copyright'>
        <div className='p-text'>@2022 ASIF</div>
        <div className='p-text'>All rights reserved</div>
      </div>
      <NavigationDots />
    </div>
  );
};

export default AppWrap;
