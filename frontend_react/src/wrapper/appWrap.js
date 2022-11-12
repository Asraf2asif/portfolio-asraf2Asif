import React from 'react';
import { SocialMedia, NavigationDots } from '../components';

const AppWrap = ({ comp: Comp, idName, classes }) =>
  function HOCApp() {
    return (
      <div
        id={idName}
        className={`app__container${classes ? ` ${classes}` : ''}`}
      >
        <SocialMedia />
        <div className='app__wrapper app__flex-center '>
          <Comp />
          <div className='copyright'>
            <div className='p-text'>@2022 ASIF</div>
            <div className='p-text'>All rights reserved</div>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
